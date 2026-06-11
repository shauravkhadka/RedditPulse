import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { extname, join } from 'node:path'

let failed = false
const sourceRoots = ['app', 'components', 'src', 'lib']
const sourceFiles = []
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (['.ts', '.tsx', '.mjs'].includes(extname(entry.name))) sourceFiles.push(path)
  }
}
sourceRoots.forEach(walk)

for (const path of sourceFiles) {
  const text = readFileSync(path, 'utf8')
  if (/import\s*\{[^}]*\bGithub\b[^}]*\}\s*from\s*['"]lucide-react['"]/.test(text)) {
    console.error(`Unsafe lucide Github import: ${path}`)
    failed = true
  }
}

const publicSourceFiles = sourceFiles.filter((path) => path.startsWith('app/') || path.startsWith('components/') || path.startsWith('src/'))
const visitorFacingPatterns = [
  [/Proof Hub|proof hub|Proof hub/, 'visitor-facing Proof Hub wording'],
  [/Derived visual|derived visual/, 'ambiguous derived-visual wording'],
  [/replace it with|after rerunning|final artifact bundle|final evidence bundle|publication package pending|evaluation package pending|public artifact package pending/, 'visitor-facing maintenance note'],
]
for (const path of publicSourceFiles) {
  const text = readFileSync(path, 'utf8')
  for (const [pattern, label] of visitorFacingPatterns) {
    if (pattern.test(text)) {
      console.error(`Unsafe ${label}: ${path}`)
      failed = true
    }
  }
}

const caseStudies = readFileSync('src/data/case-studies.ts', 'utf8')
if (/},\s*,\s*{/.test(caseStudies) || /\[\s*,/.test(caseStudies) || /,\s*,/.test(caseStudies)) {
  console.error('Sparse-array syntax detected in src/data/case-studies.ts. Remove accidental extra commas before deployment.')
  failed = true
}
const assetObjects = [...caseStudies.matchAll(/\{\s*kind:\s*'(image|video|link)'[\s\S]*?src:\s*'([^']*)'[\s\S]*?published:\s*(true|false)\s*\}/g)]
for (const [, kind, src, published] of assetObjects) {
  if (published !== 'true' || kind === 'link') continue
  if (!src || !src.startsWith('/proofs/')) {
    console.error(`Published proof asset has invalid src: ${src || '(empty)'}`)
    failed = true
    continue
  }
  if (!existsSync(`public${src}`)) {
    console.error(`Published proof asset is missing: public${src}`)
    failed = true
  }
}

if (failed) process.exit(1)
console.log('Source-safety validation passed. Navigation, Lucide imports, and published proof assets are safe.')

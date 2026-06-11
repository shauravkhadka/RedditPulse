import { readdirSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'

const root = 'public/proofs'
const allowed = new Set(['.webp', '.png', '.jpg', '.jpeg', '.avif', '.mp4', '.webm', '.md', '.gitkeep'])
const imageLimit = 4 * 1024 * 1024
const videoLimit = 30 * 1024 * 1024
let failed = false

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path)
    else inspect(path)
  }
}
function inspect(path) {
  const ext = extname(path).toLowerCase()
  if (path.endsWith('.gitkeep')) return
  if (!allowed.has(ext)) { console.error(`Unsupported proof asset: ${relative('.', path)}`); failed = true; return }
  const size = statSync(path).size
  if (['.webp', '.png', '.jpg', '.jpeg', '.avif'].includes(ext) && size > imageLimit) { console.error(`Proof image exceeds 4 MB: ${relative('.', path)}`); failed = true }
  if (['.mp4', '.webm'].includes(ext) && size > videoLimit) { console.error(`Proof video exceeds 30 MB: ${relative('.', path)}`); failed = true }
}
walk(root)
if (failed) process.exit(1)
console.log('Proof-asset validation passed. Media files are within safe deployment limits.')

import { existsSync } from 'node:fs'
import './validate-proof-assets.mjs'
import './validate-source-safety.mjs'

const required = [
  'public/manifest.webmanifest',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/resume.pdf',
  'public/og-image.png',
  'public/profile.webp',
  'public/favicon.ico',
  'app/icon.png',
  'public/proofs/vision-ros2-sim2real/accuracy-before-after.webp',
  'public/proofs/vision-ros2-sim2real/robot-finetune-accuracy.webp',
  'public/proofs/vision-ros2-sim2real/deployment-predictions.webp',
  'public/proofs/reinforcement-learning-benchmark-suite/airraid-training-curve.webp',
  'public/proofs/reinforcement-learning-benchmark-suite/mountaincar-success-rate.webp',
  'public/proofs/redditpulse/retrieval-evaluation.webp',
]

const forbiddenDynamicMetadataRoutes = [
  'app/manifest.ts',
  'app/robots.ts',
  'app/sitemap.ts',
]

const missing = required.filter((file) => !existsSync(file))
const forbidden = forbiddenDynamicMetadataRoutes.filter((file) => existsSync(file))

if (missing.length || forbidden.length) {
  console.error('\nStatic-export preflight failed.')
  if (missing.length) console.error(`Missing required files: ${missing.join(', ')}`)
  if (forbidden.length) console.error(`Remove dynamic metadata routes: ${forbidden.join(', ')}`)
  process.exit(1)
}

console.log('Static-export preflight passed. Premium responsive UI, media, portrait, favicon, resume, sitemap, and metadata assets are present.')

# Proof Asset Upload Guide

The public site already renders honest diagrams and verified metric summaries. Add real artifacts only when you own them and are allowed to publish them.

## Workflow

1. Export a real asset as WebP, PNG, JPG, or MP4.
2. Upload it into the exact `public/proofs/<project>/` folder.
3. Open `src/data/case-studies.ts`.
4. Find the matching item and set `published: true`.
5. For public repositories, demos, or videos, add the URL inside the matching `links` block.
6. Commit to GitHub. Cloudflare Pages rebuilds automatically.

## Priority 1 — Vision and ROS2 Sim2Real

Folder: `public/proofs/vision-ros2-sim2real/`

- `lab-vs-robot-camera.webp`
- `confusion-matrix.webp`
- `accuracy-before-after.webp`
- `robot-demo.mp4`

## Priority 2 — Production AI reliability

Folder: `public/proofs/production-ai-reliability/`

Use synthetic or anonymised visuals only. Never upload client invoices, internal screenshots, detector logic, secrets, or proprietary data.

- `synthetic-invoice-workflow.webp`
- `confidence-analysis.webp`
- `error-taxonomy.webp`

## Priority 3 — RedditPulse

Folder: `public/proofs/redditpulse/`

- `dashboard.webp`
- `query-result.webp`
- `retrieval-comparison.webp`

Add the public Streamlit URL only after the deployment is working.

## Priority 4 — Reinforcement learning

Folder: `public/proofs/reinforcement-learning-benchmark-suite/`

- `airraid-training-curve.webp`
- `mountaincar-success-rate.webp`
- `reward-shaping-comparison.webp`

## Priority 5 — Temporal GNN

Folder: `public/proofs/temporal-gnn-blockchain-fraud/`

- `temporal-graph-snapshot.webp`
- `tgat-architecture.webp`
- `xgboost-vs-tgat.webp`

Publish the benchmark table only after a reproducible rerun. Do not use approximate or remembered metrics.

## Selected exploration — multilingual RAG

Folder: `public/proofs/llm-financial-assistant/`

- `rag-architecture.webp`
- `multilingual-query-response.webp`
- `retrieval-evaluation.webp`

Keep the prototype labelled as an exploration until evaluation evidence exists.

## Image optimisation rules

The website now protects layout stability automatically, but upload discipline still matters.

- Export screenshots and charts as WebP when possible.
- Use 1600–2200px width for screenshots and charts.
- Keep images below 4 MB; the preflight script rejects larger proof images.
- Keep MP4 or WebM clips below 30 MB; the preflight script rejects larger proof videos.
- Use `fit: 'contain'` for charts, dashboards, tables, and screenshots so nothing is cropped.
- Use `fit: 'cover'` only for camera photos where filling the frame is desirable.
- Use `aspect: 'wide'` for dashboards and diagrams, `aspect: 'square'` for confusion matrices, and `aspect: 'video'` for clips.

Example:

```ts
{
  kind: 'image',
  src: '/proofs/vision-ros2-sim2real/confusion-matrix.webp',
  aspect: 'square',
  fit: 'contain',
  published: true,
}
```

## Optional one-command image optimisation

Before publishing a screenshot or chart, run:

```text
python scripts/optimize-proof-assets.py INPUT.png public/proofs/<project>/<filename>.webp
```

The script:

- preserves the original aspect ratio
- applies EXIF rotation correctly
- resizes only when the source exceeds 2200px width
- converts to high-quality WebP
- avoids distortion and uncontrolled page weight

## Semantic Search and Multilingual IR
Folder: `public/proofs/semantic-search-ir/`
- `tfidf-vs-embeddings.webp`
- `multilingual-ranking.webp`
- `retrieval-architecture.webp`

## ML Evaluation and Data-Science Pipeline
Folder: `public/proofs/ml-data-science-evaluation/`
- `experiment-flow.webp`
- `model-comparison.webp`
- `error-analysis.webp`

## Responsible AI and Governance
Folder: `public/proofs/responsible-ai-governance/`
- `framework-map.webp`
- `risk-register.webp`
- `human-review-flow.webp`


## Included Sim2Real chart

This release already publishes:

```text
public/proofs/vision-ros2-sim2real/accuracy-before-after.webp
```

It is a derived visual of the verified endpoint comparison. Add the lab-versus-camera image, confusion matrix, and robot demo video next.

## Integrated evidence in this release

- `vision-ros2-sim2real/robot-demo.mp4` and poster image are public.
- `temporal-gnn-blockchain-fraud/tgat-vs-xgboost-benchmark.webp`, `tgat-auc-comparison.webp`, and `tgat-latency-tradeoff.webp` are public and labelled as synthetic validation.

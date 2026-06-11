# Shaurav Khadka — Research-Led AI Portfolio

A statically exported Next.js portfolio for **Shaurav Khadka**, designed for Cloudflare Pages.

## Positioning

The site presents an applied AI researcher with strong systems-engineering execution. Research direction appears first; applied evidence, proof boundaries, and engineering implementation support the claims.

## Edit content

Primary public content:

```text
src/data/portfolio.ts
src/data/editorial.ts
src/data/case-studies.ts
src/data/note-content.ts
```

Use empty strings for missing URLs. Buttons with empty URLs stay hidden automatically.

## Add proof assets

Read:

```text
PROOF_ASSET_UPLOAD_GUIDE.md
```

Upload approved screenshots, charts, and videos under:

```text
public/proofs/<project-slug>/
```

Then set the matching `published: true` value inside:

```text
src/data/case-studies.ts
```

Only publish assets you own and are allowed to share. Never upload confidential client material.

## Replace résumé or portrait

```text
public/resume.pdf
public/profile.webp
```

Keep the filenames unchanged to avoid editing links.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verify before deployment

```bash
npm run check
```

The production static export is written to:

```text
out
```


## Final evidence upgrade

This release includes:

- a published Sim2Real accuracy chart at `public/proofs/vision-ros2-sim2real/accuracy-before-after.webp`
- a featured quantum-device-characterisation note at `/notes/process-tensors-non-markovian-noise/`
- a hidden-until-configured RedditPulse live-demo button

To connect the RedditPulse demo later, read:

```text
REDDITPULSE_LIVE_DEMO_CONNECT.md
```

Paste the real Streamlit and repository URLs inside:

```text
src/data/portfolio.ts
```

## Cloudflare Pages settings

```text
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: leave blank
```

Cloudflare rebuilds the site automatically after a push to the connected Git branch.

## Undo a broken change

Open the GitHub repository, select **Commits**, locate the last working commit, and revert the broken update.

## Portfolio structure

The homepage now contains three distinct layers:

1. **Measured Highlights** — three memorable benchmark anchors, not a second project list.
2. **Inspectable Systems** — six different case-study cards shown once; none repeat the three benchmark-highlight projects.
3. **Capability Atlas** — the wider AI, ML, data-science, governance, and communication inventory grouped without duplicate project cards.

Read `PORTFOLIO_INVENTORY_MAP.md` for the full mapping and `BUILD_STATUS.md` for the validation boundary.

## Private maintenance checklist

Keep unpublished artifact tasks inside `PRIVATE_RELEASE_CHECKLIST.md`. Do not render maintenance instructions on public pages.

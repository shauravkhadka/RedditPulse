# Deploy to Cloudflare Pages

Use the repository already connected to Cloudflare Pages.

## Cloudflare settings

```text
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: leave blank
```

## Upload workflow

1. Replace the repository contents with everything inside this folder.
2. Commit to the connected branch.
3. Wait for Cloudflare Pages to rebuild automatically.
4. Verify the preview deployment before updating your production workflow.

Do not change DNS records.

# Deploy on Streamlit Community Cloud

Do not deploy this Python dashboard as a Cloudflare Pages or Next.js project.

1. Sign in to Streamlit Community Cloud with GitHub.
2. Grant access to private repositories if `shauravkhadka/RedditPulse` remains private.
3. Click **Create app**.
4. Select:

```text
Repository: shauravkhadka/RedditPulse
Branch: main
Main file path: app.py
```

5. Deploy.
6. In the deployed app settings, change the app to **Public** before linking it from the portfolio.
7. Copy the final `streamlit.app` URL into the portfolio's `src/data/portfolio.ts` file under `projectLinks.redditpulseDemo`.

# RedditPulse deployment fix

The RedditPulse dashboard is a Python Streamlit application. Do not deploy it as a Cloudflare Pages or Next.js project.

Use the separate `redditpulse-streamlit-cloud-ready.zip` package and deploy it through Streamlit Community Cloud with:

```text
Repository: shauravkhadka/RedditPulse
Branch: main
Main file path: app.py
```

If the GitHub repository remains private, authorise Streamlit Community Cloud to access private repositories. Make the deployed app public before linking it from the portfolio.

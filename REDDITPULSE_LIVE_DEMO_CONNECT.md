# Connect the RedditPulse live demo

A separate ready-to-deploy package is provided as `redditpulse-streamlit-demo.zip`.

After deploying it to Streamlit Community Cloud, open:

```text
src/data/portfolio.ts
```

Set:

```ts
export const projectLinks = {
  redditpulseDemo: 'YOUR_PUBLIC_STREAMLIT_URL',
  redditpulseRepository: 'YOUR_PUBLIC_GITHUB_REPOSITORY_URL',
}
```

The live-demo and repository buttons appear automatically. Never commit API keys or credentials.

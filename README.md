# RedditPulse Streamlit Demo

A deployable dashboard for the collaborative RedditPulse academic prototype.

## Run locally

```bash
pip install -r requirements.txt
streamlit run app.py
```

## Deploy

1. Push this folder to a public GitHub repository.
2. Create a Streamlit Community Cloud app using `app.py` as the entry point.
3. Copy the public URL into the portfolio file `src/data/portfolio.ts`.

## Notes

- Semantic search uses the included FAISS index and `all-MiniLM-L6-v2`.
- BART summaries are optional and disabled by default to reduce cold-start cost.
- Do not commit secrets.

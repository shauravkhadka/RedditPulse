# RedditPulse Streamlit Dashboard

Deploy this repository with **Streamlit Community Cloud**, not Cloudflare Pages.

## Entrypoint

```text
app.py
```

## Deployment fields

```text
Repository: shauravkhadka/RedditPulse
Branch: main
Main file path: app.py
```

The repository can remain private if Streamlit Community Cloud is authorised to access private repositories. To let portfolio visitors open the demo, make the deployed Streamlit app public in its app settings.

## Local run

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
streamlit run app.py
```

## Notes

- BART summaries remain optional and disabled by default.
- Do not commit `.streamlit/secrets.toml`.
- The FAISS index and processed demo data are included.

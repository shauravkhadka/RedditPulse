import torch; torch.set_num_threads(1)
import streamlit as st
import pandas as pd
import sys; sys.path.append('..')
from styles import inject_css, page_header
from utils import load_posts, load_faiss, load_embedding_model, load_bart, semantic_search, bart_summarise

inject_css()
page_header("RAG Search", "Semantic search over Reddit posts using FAISS + sentence embeddings")
df             = load_posts()
faiss_index, _ = load_faiss()
model          = load_embedding_model()
COLORS         = {'Positive':'#22c55e', 'Neutral':'#3b82f6', 'Negative':'#ef4444'}

c1, c2, c3 = st.columns([3, 1, 1])
with c1: query = st.text_input("", placeholder="e.g. What do people think about AI?", label_visibility="collapsed")
with c2: top_k = st.slider("Results", 3, 15, 5)
with c3: gen_summary = st.checkbox("Optional BART summary", value=False)

if st.button("Search", type="primary") and query.strip():
    results = semantic_search(query, faiss_index, model, df, top_k)

    st.markdown("---")
    sentiments = [r['sentiment'] for r in results]
    c1, c2, c3 = st.columns(3)
    c1.metric("Positive", sentiments.count('Positive'))
    c2.metric("Neutral",  sentiments.count('Neutral'))
    c3.metric("Negative", sentiments.count('Negative'))

    st.markdown(f"**Top {top_k} results for:** *{query}*")
    for i, r in enumerate(results, 1):
        with st.expander(f"{i}. {r['title'][:90]}"):
            c1, c2, c3, c4 = st.columns(4)
            c1.markdown(f"**Subreddit** · r/{r['subreddit']}")
            c2.markdown(f"**Sentiment** · {r['sentiment']}")
            c3.markdown(f"**Topic** · {r['topic'][:28]}")
            c4.markdown(f"**Score** · {r['score']:.4f}")

    if gen_summary:
        st.markdown("---")
        st.markdown("**AI Summary (BART)**")
        with st.spinner("Generating..."):
            try:
                tok, mdl = load_bart()
                st.info(bart_summarise([r['title'] for r in results], tok, mdl))
            except Exception as e:
                st.warning(f"Failed: {e}")

    st.markdown("---")
    st.dataframe(pd.DataFrame(results)[['title','subreddit','sentiment','topic','score']], use_container_width=True, hide_index=True)

else:
    st.markdown("---")
    st.markdown("**Example queries**")
    for col, ex in zip(st.columns(3), [
        "What do people think about AI replacing jobs?",
        "Climate change and environmental policy",
        "Gaming industry news and updates",
    ]):
        col.caption(ex)

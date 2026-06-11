import torch; torch.set_num_threads(1)
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import json
import sys; sys.path.append('..')
from styles import inject_css, page_header
from utils import load_posts, load_trends, load_faiss, load_embedding_model, load_bart, semantic_search, bart_summarise

inject_css()
page_header("AI Insights", "Brand monitoring, topic summaries, and keyword trend tracking")
df             = load_posts()
df_trends      = load_trends()
faiss_index, _ = load_faiss()
model          = load_embedding_model()

try:
    with open('db/outputs/insights.json','r') as f:       brand_insights  = json.load(f)
    with open('db/outputs/topic_summaries.json','r') as f: topic_summaries = json.load(f)
except Exception:
    brand_insights = {}; topic_summaries = {}

# Brand Monitoring
st.markdown("#### Brand Monitoring")
st.caption("Sentiment breakdown and AI-generated summary per brand.")
brands = list(brand_insights.keys()) or ['Google AI products and services','Microsoft technology announcements','Meta social media platform','Amazon business and technology']
brand = st.selectbox("Brand", brands)

if brand in brand_insights:
    ins = brand_insights[brand]
    c1, c2, c3 = st.columns(3)
    c1.metric("Positive", ins['sentiment'].get('Positive', 0))
    c2.metric("Neutral",  ins['sentiment'].get('Neutral',  0))
    c3.metric("Negative", ins['sentiment'].get('Negative', 0))
    st.info(ins.get('summary', 'No summary available'))
    for i, t in enumerate(ins.get('top_posts', []), 1):
        st.caption(f"{i}. {t}")
else:
    with st.spinner("Retrieving..."):
        results = semantic_search(brand, faiss_index, model, df, 5)
        sentiments = [r['sentiment'] for r in results]
        c1, c2, c3 = st.columns(3)
        c1.metric("Positive", sentiments.count('Positive'))
        c2.metric("Neutral",  sentiments.count('Neutral'))
        c3.metric("Negative", sentiments.count('Negative'))
        try:
            tok, mdl = load_bart()
            st.info(bart_summarise([r['title'] for r in results], tok, mdl))
        except Exception:
            pass

st.markdown("---")

# Topic Summaries
st.markdown("#### Topic Summaries")
st.caption("BART-generated summaries for each detected topic.")
if topic_summaries:
    topic = st.selectbox("Topic", list(topic_summaries.keys()))
    st.info(topic_summaries[topic])
    st.dataframe(
        df[df['topic_zeroshot'] == topic][['title','sentiment','score','subreddit']].sort_values('score', ascending=False).head(5),
        use_container_width=True, hide_index=True
    )

st.markdown("---")

# Keyword Trends
st.markdown("#### Keyword Trend Tracking")
st.caption("Daily mention frequency for selected keywords.")
df_trends['date'] = pd.to_datetime(df_trends['date'])
kw_cols = [c for c in df_trends.columns if c != 'date']
selected = st.multiselect("Keywords", kw_cols, default=kw_cols[:4])

if selected:
    fig, ax = plt.subplots(figsize=(13, 4))
    for kw, color in zip(selected, plt.cm.tab10(range(len(selected)))):
        if df_trends[kw].sum() > 0:
            ax.plot(df_trends['date'], df_trends[kw], marker='o', linewidth=1.8, markersize=3, label=kw, color=color)
    ax.set_ylabel("Mentions / Day", fontsize=9); ax.tick_params(labelsize=8)
    ax.legend(fontsize=8); plt.xticks(rotation=25)
    ax.spines[['top','right']].set_visible(False); plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")

# Live RAG
st.markdown("#### Live Insight Generator")
st.caption("FAISS retrieves relevant posts, BART generates a grounded summary.")
query = st.text_input("Question", placeholder="What are people saying about AI regulation?", label_visibility="collapsed")

if st.button("Generate", type="primary") and query.strip():
    with st.spinner("Generating..."):
        results = semantic_search(query, faiss_index, model, df, 6)
        st.markdown("**Retrieved posts**")
        for r in results:
            st.caption(f"r/{r['subreddit']} · {r['sentiment']} · {r['title'][:80]}")
        try:
            tok, mdl = load_bart()
            st.success(bart_summarise([r['title'] for r in results], tok, mdl))
        except Exception as e:
            st.warning(f"Failed: {e}")

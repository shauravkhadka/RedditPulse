import torch
torch.set_num_threads(1)

import streamlit as st

st.set_page_config(
    page_title="MQCOMP_SMI",
    page_icon=None,
    layout="wide",
    initial_sidebar_state="expanded",
)

pg = st.navigation({
    "": [
        st.Page("pages/home.py",        title="Dashboard",   icon=":material/dashboard:"),
    ],
    "Analysis": [
        st.Page("pages/overview.py",    title="Overview",    icon=":material/bar_chart:"),
        st.Page("pages/sentiment.py",   title="Sentiment",   icon=":material/sentiment_satisfied:"),
        st.Page("pages/topics.py",      title="Topics",      icon=":material/category:"),
        st.Page("pages/rag_search.py",  title="RAG Search",  icon=":material/search:"),
        st.Page("pages/ai_insights.py", title="AI Insights", icon=":material/auto_awesome:"),
    ],
})

pg.run()

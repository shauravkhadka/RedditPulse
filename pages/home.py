import torch; torch.set_num_threads(1)
import streamlit as st
import matplotlib.pyplot as plt
import sys; sys.path.append('..')
from styles import inject_css, stat_card, section_header
from utils import load_posts, load_comments

inject_css()
df = load_posts()
dc = load_comments()

st.markdown("## Dashboard")
st.caption("MQCOMP8420 · Social Media Intelligent Platform")

# Stat cards
c1, c2, c3, c4 = st.columns(4, gap="medium")
c1.markdown(stat_card("Total Posts",    f"{len(df):,}",            "From 10 subreddits",          "posts",      "stat-icon-blue"),   unsafe_allow_html=True)
c2.markdown(stat_card("Comments",       f"{len(dc):,}",            "Top posts per subreddit",      "comments",   "stat-icon-green"),  unsafe_allow_html=True)
c3.markdown(stat_card("Subreddits",     "10",                      "Tech · AI · News · Gaming",    "subreddits", "stat-icon-orange"), unsafe_allow_html=True)
c4.markdown(stat_card("Unique Authors", f"{df['author'].nunique():,}", f"{df['date'].min().strftime('%b %d')} – {df['date'].max().strftime('%b %d, %Y')}", "authors", "stat-icon-purple"), unsafe_allow_html=True)

st.markdown("---")

# Charts
c1, c2 = st.columns([1.6, 1], gap="medium")

with c1:
    st.markdown(section_header("Posts Over Time", "Daily volume · Apr – May 2026"), unsafe_allow_html=True)
    daily = df.groupby('date').size()
    fig, ax = plt.subplots(figsize=(6.5, 2.8))
    ax.plot(daily.index, daily.values, color='#2563eb', linewidth=2)
    ax.fill_between(daily.index, daily.values, alpha=0.1, color='#2563eb')
    ax.set_ylabel("Posts", fontsize=8, color='#475569')
    ax.tick_params(labelsize=7.5, colors='#64748b')
    for s in ['top','right','left']: ax.spines[s].set_visible(False)
    ax.grid(axis='y', color='#f1f5f9', linewidth=0.8)
    plt.xticks(rotation=20); plt.tight_layout(pad=0.4)
    st.pyplot(fig, use_container_width=True); plt.close()

with c2:
    st.markdown(section_header("Sentiment Breakdown", f"All {len(df):,} posts"), unsafe_allow_html=True)
    sent = df['sentiment'].value_counts()
    COLORS = {'Positive':'#22c55e', 'Neutral':'#3b82f6', 'Negative':'#ef4444'}
    fig, ax = plt.subplots(figsize=(3.5, 2.8))
    _, _, autotexts = ax.pie(
        sent.values, labels=sent.index,
        colors=[COLORS.get(s,'#94a3b8') for s in sent.index],
        autopct='%1.0f%%', startangle=90,
        wedgeprops={'width':0.55, 'edgecolor':'white', 'linewidth':2.5},
        textprops={'fontsize':8.5, 'color':'#1e293b'}
    )
    for at in autotexts:
        at.set_fontsize(8); at.set_color('white'); at.set_fontweight('bold')
    plt.tight_layout(pad=0.3)
    st.pyplot(fig, use_container_width=True); plt.close()

c3, c4 = st.columns(2, gap="medium")

with c3:
    st.markdown(section_header("Posts per Subreddit", "Distribution across 10 communities"), unsafe_allow_html=True)
    counts = df['subreddit'].value_counts()
    fig, ax = plt.subplots(figsize=(5, 3))
    bars = ax.barh(counts.index[::-1], counts.values[::-1], color='#3b82f6', height=0.55)
    ax.tick_params(labelsize=7.5, colors='#475569')
    for s in ['top','right','left','bottom']: ax.spines[s].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(axis='x', color='#e2e8f0', linewidth=0.7)
    for bar, val in zip(bars, counts.values[::-1]):
        ax.text(bar.get_width() + 0.5, bar.get_y() + bar.get_height()/2, str(val), va='center', fontsize=7.5, color='#475569')
    plt.tight_layout(pad=0.4)
    st.pyplot(fig, use_container_width=True); plt.close()

with c4:
    st.markdown(section_header("NLP Techniques", "Implemented across 7 notebooks"), unsafe_allow_html=True)
    for name, desc in [
        ("Text Preprocessing",  "NLTK · spaCy · NER · POS"),
        ("Sentiment Analysis",  "RoBERTa · Naive Bayes · LR"),
        ("Topic Detection",     "KMeans · Zero-Shot NLI"),
        ("Embeddings",          "all-MiniLM-L6-v2"),
        ("FAISS Search",        "Semantic similarity"),
        ("RAG Pipeline",        "Retrieval + BART"),
        ("Prompt Engineering",  "Basic · CoT · ReAct"),
    ]:
        st.markdown(f'<div class="tech-row"><span class="tech-name">{name}</span><span class="tech-desc">{desc}</span></div>', unsafe_allow_html=True)

st.markdown("---")
st.caption("MQCOMP8420 SMI · COMP8420 Advanced NLP · Macquarie University 2026")

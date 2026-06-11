import torch; torch.set_num_threads(1)
import streamlit as st
import matplotlib.pyplot as plt
import sys; sys.path.append('..')
from styles import inject_css, page_header
from utils import load_posts, load_comments

inject_css()
page_header("Overview", "Dataset statistics and post distribution across subreddits")
df = load_posts()
dc = load_comments()
COLORS = {'Positive':'#22c55e', 'Neutral':'#3b82f6', 'Negative':'#ef4444'}

c1, c2, c3, c4, c5 = st.columns(5)
c1.metric("Posts",          f"{len(df):,}")
c2.metric("Comments",       f"{len(dc):,}")
c3.metric("Subreddits",     df['subreddit'].nunique())
c4.metric("Unique Authors", f"{df['author'].nunique():,}")
c5.metric("Avg Score",      f"{df['score'].median():.0f}")

st.markdown("---")
c1, c2 = st.columns(2)

with c1:
    st.markdown("#### Posts per Subreddit")
    counts = df['subreddit'].value_counts()
    fig, ax = plt.subplots(figsize=(6, 4))
    ax.barh(counts.index[::-1], counts.values[::-1], color='#3b4fd4', height=0.6)
    ax.tick_params(labelsize=8)
    for i, v in enumerate(counts.values[::-1]):
        ax.text(v + 1, i, str(v), va='center', fontsize=8)
    ax.spines[['top','right']].set_visible(False)
    plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

with c2:
    st.markdown("#### Sentiment Distribution")
    sent = df['sentiment'].value_counts()
    fig, ax = plt.subplots(figsize=(6, 4))
    bars = ax.bar(sent.index, sent.values, color=[COLORS.get(s,'#94a3b8') for s in sent.index], width=0.5)
    ax.set_ylabel("Posts", fontsize=9)
    ax.tick_params(labelsize=8)
    for bar, val in zip(bars, sent.values):
        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 5, str(val), ha='center', fontsize=8, fontweight='bold')
    ax.spines[['top','right']].set_visible(False)
    plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

c3, c4 = st.columns(2)

with c3:
    st.markdown("#### Posts per Day")
    daily = df.groupby('date').size()
    fig, ax = plt.subplots(figsize=(6, 3))
    ax.plot(daily.index, daily.values, color='#3b4fd4', linewidth=1.5)
    ax.fill_between(daily.index, daily.values, alpha=0.1, color='#3b4fd4')
    ax.set_ylabel("Posts", fontsize=9); ax.tick_params(labelsize=8)
    plt.xticks(rotation=25)
    ax.spines[['top','right']].set_visible(False)
    plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

with c4:
    st.markdown("#### Posts by Hour (UTC)")
    hourly = df.groupby('hour').size()
    fig, ax = plt.subplots(figsize=(6, 3))
    ax.bar(hourly.index, hourly.values, color='#6366f1', width=0.8)
    ax.set_xlabel("Hour (UTC)", fontsize=9); ax.set_ylabel("Posts", fontsize=9)
    ax.tick_params(labelsize=8)
    ax.spines[['top','right']].set_visible(False)
    plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")
st.markdown("#### Recent Posts")
st.dataframe(
    df[['title','subreddit','sentiment','score','num_comments','date']].sort_values('date', ascending=False).head(10),
    use_container_width=True, hide_index=True
)

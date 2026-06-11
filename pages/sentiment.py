import torch; torch.set_num_threads(1)
import streamlit as st
import matplotlib.pyplot as plt
import seaborn as sns
import sys; sys.path.append('..')
from styles import inject_css, page_header
from utils import load_posts, load_comments

inject_css()
page_header("Sentiment", "Sentiment analysis by subreddit, over time, and across comments")
df = load_posts()
dc = load_comments()
COLORS = {'Positive':'#22c55e', 'Neutral':'#3b82f6', 'Negative':'#ef4444'}

# Filters
c1, c2 = st.columns(2)
with c1:
    sub = st.selectbox("Subreddit", ["All"] + sorted(df['subreddit'].unique().tolist()))
with c2:
    sent_filter = st.selectbox("Sentiment", ["All", "Positive", "Neutral", "Negative"])

# Apply filters
dff = df.copy()
if sub         != "All": dff = dff[dff['subreddit'] == sub]
if sent_filter != "All": dff = dff[dff['sentiment'] == sent_filter]
st.caption(f"{len(dff):,} posts shown")

st.markdown("---")
c1, c2 = st.columns(2)

with c1:
    st.markdown("#### Sentiment by Subreddit (%)")
    pivot = dff.groupby(['subreddit','sentiment']).size().unstack(fill_value=0)
    if not pivot.empty:
        pct = pivot.div(pivot.sum(axis=1), axis=0) * 100
        fig, ax = plt.subplots(figsize=(6, 4))
        pct.plot(kind='bar', ax=ax, color=[COLORS.get(c,'#94a3b8') for c in pct.columns], edgecolor='none', width=0.7)
        ax.set_ylabel("%", fontsize=9); ax.tick_params(labelsize=7.5)
        ax.legend(title="", fontsize=8); plt.xticks(rotation=30, ha='right')
        ax.spines[['top','right']].set_visible(False); plt.tight_layout()
        st.pyplot(fig, use_container_width=True); plt.close()
    else:
        st.info("No data for selected filters.")

with c2:
    st.markdown("#### Sentiment Trends Over Time")
    sent_daily = dff.groupby(['date','sentiment']).size().unstack(fill_value=0)
    if not sent_daily.empty:
        fig, ax = plt.subplots(figsize=(6, 4))
        for s, c in COLORS.items():
            if s in sent_daily.columns:
                ax.plot(sent_daily.index, sent_daily[s], label=s, color=c, linewidth=1.8)
        ax.set_ylabel("Posts", fontsize=9); ax.tick_params(labelsize=8)
        ax.legend(fontsize=8); plt.xticks(rotation=25)
        ax.spines[['top','right']].set_visible(False); plt.tight_layout()
        st.pyplot(fig, use_container_width=True); plt.close()
    else:
        st.info("No data for selected filters.")

c3, c4 = st.columns(2)

with c3:
    st.markdown("#### Comment Sentiment")
    dc_filtered = dc.copy()
    if sub != "All": dc_filtered = dc_filtered[dc_filtered['subreddit'] == sub]
    if sent_filter != "All": dc_filtered = dc_filtered[dc_filtered['sentiment'] == sent_filter]
    dc_counts = dc_filtered['sentiment'].value_counts()
    if not dc_counts.empty:
        fig, ax = plt.subplots(figsize=(6, 3))
        bars = ax.bar(dc_counts.index, dc_counts.values, color=[COLORS.get(s,'#94a3b8') for s in dc_counts.index], width=0.5)
        for bar, val in zip(bars, dc_counts.values):
            ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 3, str(val), ha='center', fontsize=8, fontweight='bold')
        ax.set_ylabel("Comments", fontsize=9); ax.tick_params(labelsize=8)
        ax.spines[['top','right']].set_visible(False); plt.tight_layout()
        st.pyplot(fig, use_container_width=True); plt.close()
    else:
        st.info("No comments for selected filters.")

with c4:
    st.markdown("#### RoBERTa Confidence")
    fig, ax = plt.subplots(figsize=(6, 3))
    ax.hist(dff['sentiment_confidence'], bins=25, color='#6366f1', edgecolor='none')
    ax.axvline(dff['sentiment_confidence'].mean(), color='#ef4444', linestyle='--', linewidth=1.2,
               label=f"Mean {dff['sentiment_confidence'].mean():.2f}")
    ax.set_xlabel("Confidence", fontsize=9); ax.set_ylabel("Posts", fontsize=9)
    ax.tick_params(labelsize=8); ax.legend(fontsize=8)
    ax.spines[['top','right']].set_visible(False); plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")
st.dataframe(
    dff[['title','subreddit','sentiment','sentiment_confidence','score','date']].sort_values('score', ascending=False).head(20),
    use_container_width=True, hide_index=True
)

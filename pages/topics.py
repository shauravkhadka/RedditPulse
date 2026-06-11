import torch; torch.set_num_threads(1)
import streamlit as st
import matplotlib.pyplot as plt
import seaborn as sns
from wordcloud import WordCloud
import sys; sys.path.append('..')
from styles import inject_css, page_header
from utils import load_posts

inject_css()
page_header("Topics", "Topic detection using TF-IDF, KMeans, and Zero-Shot Classification")
df = load_posts()
df['date'] = df['date'].astype('datetime64[ns]')

c1, c2 = st.columns(2)

with c1:
    st.markdown("#### Topic Distribution")
    counts = df['topic_zeroshot'].value_counts()
    fig, ax = plt.subplots(figsize=(6, 4))
    ax.barh(counts.index[::-1], counts.values[::-1], color='#3b4fd4', height=0.6)
    ax.tick_params(labelsize=8)
    for i, v in enumerate(counts.values[::-1]):
        ax.text(v + 2, i, str(v), va='center', fontsize=8)
    ax.spines[['top','right']].set_visible(False); plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

with c2:
    st.markdown("#### Topic x Sentiment (%)")
    ts = df.groupby(['topic_zeroshot','sentiment']).size().unstack(fill_value=0)
    pct = ts.div(ts.sum(axis=1), axis=0) * 100
    fig, ax = plt.subplots(figsize=(6, 4))
    sns.heatmap(pct.round(1), annot=True, fmt='.1f', cmap='RdYlGn', linewidths=0.3,
                ax=ax, annot_kws={'size':8}, cbar_kws={'label':'%','shrink':0.8})
    ax.tick_params(labelsize=8); plt.tight_layout()
    st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")
st.markdown("#### Topic Trends Over Time")
topic_daily = df.groupby(['date','topic_zeroshot']).size().unstack(fill_value=0)
fig, ax = plt.subplots(figsize=(13, 4))
for topic, color in zip(topic_daily.columns, plt.cm.tab10(range(len(topic_daily.columns)))):
    ax.plot(topic_daily.index, topic_daily[topic], linewidth=1.8, label=topic[:35], color=color)
ax.set_ylabel("Posts per Day", fontsize=9); ax.tick_params(labelsize=8)
ax.legend(bbox_to_anchor=(1.01,1), loc='upper left', fontsize=7.5)
plt.xticks(rotation=25)
ax.spines[['top','right']].set_visible(False); plt.tight_layout()
st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")
st.markdown("#### Word Clouds per Subreddit")
fig, axes = plt.subplots(2, 5, figsize=(18, 6))
for ax, sr in zip(axes.flatten(), df['subreddit'].unique()):
    text = ' '.join(df[df['subreddit'] == sr]['processed_text'].fillna(''))
    if text.strip():
        wc = WordCloud(width=280, height=180, background_color='white', max_words=40, colormap='Blues').generate(text)
        ax.imshow(wc, interpolation='bilinear')
    ax.axis('off'); ax.set_title('r/' + sr, fontsize=9, fontweight='600', pad=4)
plt.tight_layout(pad=0.5)
st.pyplot(fig, use_container_width=True); plt.close()

st.markdown("---")
st.markdown("#### KMeans Cluster Distribution")
st.caption("K=9 clusters · Silhouette Score = 0.0073")
cluster_counts = df['topic_cluster'].value_counts().sort_index()
fig, ax = plt.subplots(figsize=(10, 3))
ax.bar([str(i) for i in cluster_counts.index], cluster_counts.values, color='#6366f1', width=0.6)
ax.tick_params(labelsize=8)
for i, v in enumerate(cluster_counts.values):
    ax.text(i, v + 3, str(v), ha='center', fontsize=8)
ax.spines[['top','right']].set_visible(False); plt.tight_layout()
st.pyplot(fig, use_container_width=True); plt.close()

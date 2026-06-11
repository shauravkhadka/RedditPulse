import os
import pandas as pd
import numpy as np
import streamlit as st
import torch

# Fix segmentation fault on Mac with PyTorch + multiprocessing
torch.set_num_threads(1)

import faiss
from sentence_transformers import SentenceTransformer

DATA_PATH      = "db/data/processed/reddit_topics.csv"
COMMENTS_PATH  = "db/data/processed/reddit_comments_sentiment.csv"
TRENDS_PATH    = "db/data/processed/keyword_trends.csv"
FAISS_INDEX    = "db/vectorstore/faiss_index/reddit_posts.index"


@st.cache_data
def load_posts():
    df = pd.read_csv(DATA_PATH)
    df = df[df['full_text'].notna()].reset_index(drop=True)
    df['date'] = pd.to_datetime(df['date'])
    return df


@st.cache_data
def load_comments():
    dc = pd.read_csv(COMMENTS_PATH)
    dc['date'] = pd.to_datetime(dc['date'])
    return dc


@st.cache_data
def load_trends():
    return pd.read_csv(TRENDS_PATH)


@st.cache_resource
def load_faiss():
    index      = faiss.read_index(FAISS_INDEX)
    return index, None


@st.cache_resource
def load_embedding_model():
    return SentenceTransformer('all-MiniLM-L6-v2')


@st.cache_resource
def load_bart():
    from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
    tokenizer = AutoTokenizer.from_pretrained('facebook/bart-large-cnn')
    model     = AutoModelForSeq2SeqLM.from_pretrained('facebook/bart-large-cnn')
    model.eval()
    return tokenizer, model


def semantic_search(query, faiss_index, embedding_model, df, top_k=5):
    q_embed = embedding_model.encode([query], convert_to_numpy=True)
    q_norm  = q_embed / np.linalg.norm(q_embed)
    scores, indices = faiss_index.search(q_norm.astype(np.float32), top_k)
    results = []
    for score, idx in zip(scores[0], indices[0]):
        post = df.iloc[idx]
        results.append({
            'title'    : post['title'],
            'subreddit': post['subreddit'],
            'sentiment': post['sentiment'],
            'topic'    : post['topic_zeroshot'],
            'score'    : round(float(score), 4),
            'full_text': post['full_text'],
        })
    return results


def bart_summarise(texts, tokenizer, model, max_new_tokens=80):
    passage = ' '.join(texts)
    inputs  = tokenizer(passage, return_tensors='pt', max_length=1024, truncation=True)
    with torch.no_grad():
        ids = model.generate(
            inputs['input_ids'],
            min_new_tokens=20,
            max_new_tokens=max_new_tokens,
            length_penalty=2.0,
            num_beams=4,
            early_stopping=True
        )
    return tokenizer.decode(ids[0], skip_special_tokens=True)

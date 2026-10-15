# 📊 RedditPulse – Reddit Data Intelligence Dashboard

A comprehensive **Streamlit-based dashboard** for analyzing Reddit data across 10 major subreddits using advanced Natural Language Processing (NLP) techniques. RedditPulse provides real-time sentiment analysis, topic detection, semantic search, and AI-powered insights on Reddit discussions.

**🔗 [View Live Demo](https://redditpulse.streamlit.app)** (Deployed on Streamlit Community Cloud)

---

## ✨ Features

### 📈 **Dashboard Overview**
- **Key Statistics**: Total posts, comments, subreddits, and unique authors tracked
- **Temporal Analysis**: Daily post volume trends (April – May 2026)
- **Sentiment Breakdown**: Pie chart showing positive/neutral/negative post distribution
- **Subreddit Distribution**: Horizontal bar chart comparing posts across communities

### 🎯 **Analysis Modules**
- **Overview**: High-level dataset statistics and exploration
- **Sentiment Analysis**: Classify posts as Positive, Neutral, or Negative using RoBERTa-based models
- **Topic Detection**: Identify trending topics using K-Means clustering and Zero-Shot classification
- **RAG Search**: Semantic search engine powered by FAISS and sentence embeddings
- **AI Insights**: BART-based automatic text summarization (optional, disabled by default)

### 🧠 **Advanced NLP Techniques**
- **Text Preprocessing**: NLTK, spaCy, Named Entity Recognition (NER), Part-of-Speech (POS) tagging
- **Sentiment Models**: RoBERTa, Naive Bayes, Logistic Regression
- **Embeddings**: Sentence-Transformers (`all-MiniLM-L6-v2`) for semantic similarity
- **Topic Modeling**: KMeans clustering with Zero-Shot NLI classification
- **Retrieval-Augmented Generation (RAG)**: FAISS-indexed semantic search with BART summarization
- **Prompt Engineering**: Includes basic, Chain-of-Thought (CoT), and ReAct strategies

---

## 📦 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | [Streamlit](https://streamlit.io/) |
| **NLP Models** | Hugging Face Transformers, Sentence-Transformers |
| **ML Frameworks** | PyTorch, scikit-learn |
| **Indexing** | FAISS (CPU) |
| **Data Processing** | Pandas, NumPy |
| **Visualization** | Matplotlib, Seaborn, Wordcloud |
| **Deployment** | Streamlit Community Cloud |

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shauravkhadka/RedditPulse.git
   cd RedditPulse
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run locally**
   ```bash
   streamlit run app.py
   ```

5. **Access the dashboard**
   - Open your browser and navigate to `http://localhost:8501`

---

## 📁 Project Structure

```
RedditPulse/
├── app.py                      # Main Streamlit application entry point
├── requirements.txt            # Python dependencies
├── styles.py                   # CSS styling and UI components
├── utils.py                    # Utility functions (data loading, etc.)
├── pages/
│   ├── home.py                # Dashboard homepage with key stats & charts
│   ├── overview.py            # Dataset overview and exploration
│   ├── sentiment.py           # Sentiment analysis visualization
│   ├── topics.py              # Topic detection and clustering
│   ├── rag_search.py          # Semantic search interface
│   └── ai_insights.py         # BART summarization and insights
├── db/                        # Database/data storage
├── .streamlit/
│   └── config.toml            # Streamlit configuration
└── README.md                  # This file
```

---

## 🔧 Configuration

### Environment Variables (Streamlit Secrets)
Store sensitive API keys in `.streamlit/secrets.toml` (not committed to version control):

```toml
# Example structure
[reddit]
client_id = "your_reddit_client_id"
client_secret = "your_reddit_secret"
user_agent = "your_app_user_agent"
```

### Optional Features
- **BART Summarization**: Disabled by default due to computational overhead. Enable in `ai_insights.py` if needed.
- **FAISS Index**: Pre-computed index is included for fast semantic search (~50MB).
- **Demo Data**: Processed dataset is included for quick testing.

---

## 🌐 Deployment

### Deploy on Streamlit Community Cloud

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Streamlit Community Cloud**
   - Go to [Streamlit Cloud](https://share.streamlit.io/)
   - Click "New app"
   - Select repository: `shauravkhadka/RedditPulse`
   - Branch: `main`
   - Main file path: `app.py`

3. **Configure Secrets**
   - In the Streamlit Cloud dashboard, add environment variables under "Secrets"
   - Copy contents from `.streamlit/secrets.toml`

4. **Deploy**
   - Streamlit will automatically build and deploy your app
   - Share the public URL with others

**Note**: The repository can remain private if Streamlit is authorized. The deployed app can be made public independently.

---

## 📊 Sample Data

The repository includes:
- **Pre-processed Reddit posts** from 10 major subreddits (Tech, AI, News, Gaming, etc.)
- **FAISS index** for fast semantic search
- **Pre-computed embeddings** using `all-MiniLM-L6-v2`

Ready to run without additional data collection!

---

## 🔍 Usage Examples

### Dashboard
Navigate to the **Dashboard** page to see:
- Real-time statistics on posts, comments, and authors
- Daily volume trends over time
- Sentiment distribution
- Top subreddits by post count

### Sentiment Analysis
- View sentiment breakdowns by subreddit
- Filter posts by sentiment classification
- Analyze comment sentiment on specific posts

### RAG Search
- Enter a query (e.g., "AI regulations")
- Retrieve semantically similar Reddit posts
- Get BART-generated summaries (optional)

### Topic Detection
- Automatically discover trending topics
- Visualize topic clusters
- Explore keywords per topic

---

## 🛠️ Development

### Adding New Features

1. **New Analysis Page**: Create a new file in `pages/` and register it in `app.py`
   ```python
   st.Page("pages/my_analysis.py", title="My Analysis", icon=":material/icon:")
   ```

2. **Custom Styling**: Edit `styles.py` to modify CSS and UI components

3. **Utilities**: Add helper functions to `utils.py` for data loading and processing

### Running Tests
```bash
pytest tests/  # Add test files as needed
```

---

## 📚 References & Resources

- [Streamlit Documentation](https://docs.streamlit.io/)
- [Hugging Face Transformers](https://huggingface.co/transformers/)
- [Sentence-Transformers](https://www.sbert.net/)
- [FAISS Documentation](https://faiss.ai/)
- [spaCy NLP](https://spacy.io/)
- [NLTK](https://www.nltk.org/)

---

## 🎓 Academic Context

This project was developed as part of **COMP8420: Advanced NLP** at **Macquarie University** (2026).

**Key Learnings**:
- End-to-end NLP pipeline design
- Production-ready machine learning deployment
- Semantic search and RAG implementations
- Multi-model ensemble approaches

---

## 📝 Notes

- BART summaries remain **optional and disabled by default** due to computational overhead
- **Do not commit** `.streamlit/secrets.toml` to version control
- FAISS index and processed demo data are pre-included for quick deployment
- Torch is configured to use single-threaded mode to optimize Streamlit resource usage

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

For questions or feedback, please reach out to [Shaurav Khadka](https://github.com/shauravkhadka) or open an issue on GitHub.

---

## 🙏 Acknowledgments

- **Macquarie University** for the COMP8420 course
- **Hugging Face** for pre-trained NLP models
- **Streamlit** for the intuitive dashboard framework
- **Meta's FAISS** for efficient similarity search

---

**⭐ If you find this project useful, please consider giving it a star!**

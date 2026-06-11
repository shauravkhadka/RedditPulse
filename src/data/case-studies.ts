import { projectLinks } from '@/src/data/portfolio'

export type ProofAsset = {
  kind: 'image' | 'video' | 'link'
  title: string
  caption: string
  src: string
  alt?: string
  poster?: string
  href?: string
  actionLabel?: string
  aspect?: 'video' | 'wide' | 'square' | 'portrait'
  fit?: 'contain' | 'cover'
  position?: string
  priority?: boolean
  published: boolean
}

export type CaseStudyVisual = {
  mode: 'sim2real' | 'reliability' | 'retrieval' | 'rl-system' | 'graph' | 'rag' | 'ir' | 'ml' | 'governance'
  label: string
  note: string
}

export type CaseStudy = {
  slug: string
  category: string
  title: string
  dek: string
  status: string
  role: string
  problem: string
  architecture: string[]
  evidence: { value: string; label: string; detail: string }[]
  evidenceNote?: string
  visual: CaseStudyVisual
  proofAssets: ProofAsset[]
  contribution: string[]
  lessons: string[]
  limitations: string[]
  tags: string[]
  links: { repositoryUrl: string; demoUrl: string; videoUrl: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'production-ai-reliability',
    category: 'Production AI · Document Intelligence',
    title: 'Production AI Reliability and Document Intelligence',
    dek: 'A method-focused public case study on evaluating document-intelligence reliability beyond OCR accuracy alone.',
    status: 'Method-only public case study · sensitive operational details omitted',
    role: 'AI/ML Research and Development Intern',
    problem: 'Document intelligence can fail before, during, or after OCR. Reliable evaluation must inspect the full path from ingestion to extraction, transformation, validation, and review without exposing private records or proprietary implementation details.',
    architecture: ['Document intake', 'OCR configuration', 'Structured extraction', 'Transformation rules', 'Validation dependencies', 'Error-code review', 'Operational recommendation'],
    evidence: [
      { value: 'OCR', label: 'Configuration comparison', detail: 'Compared extraction behaviour across OCR configurations and transformation choices.' },
      { value: 'FAR / FRR', label: 'Operational trade-off framing', detail: 'Reviewed false-acceptance and false-rejection implications in adversarial evaluation workflows.' },
      { value: 'E2E', label: 'System reliability', detail: 'Shifted evaluation from model-only accuracy toward traceability, reproducibility, latency, cost, and validation dependencies.' },
    ],
    evidenceNote: 'Public visuals must use synthetic or anonymised data only. Do not publish client invoices, internal screenshots, detector logic, or confidential metrics.',
    visual: { mode: 'reliability', label: 'Synthetic method illustration', note: 'This fictional invoice trace demonstrates the evaluation method without exposing client data.' },
    proofAssets: [
      { kind: 'image', title: 'Synthetic invoice workflow', caption: 'Synthetic invoice workflow from extraction to validation and error review.', src: '/proofs/production-ai-reliability/synthetic-invoice-workflow.webp', alt: 'Synthetic invoice document intelligence workflow', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Confidence analysis', caption: 'Synthetic or anonymised confidence-distribution summary.', src: '/proofs/production-ai-reliability/confidence-analysis.webp', alt: 'Synthetic confidence-score distribution', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Error taxonomy', caption: 'Generalised document-processing error taxonomy.', src: '/proofs/production-ai-reliability/error-taxonomy.webp', alt: 'Synthetic document processing error taxonomy', aspect: 'wide', fit: 'contain', published: false },
    ],
    contribution: ['Built a repeatable evaluation workflow across OCR configurations, field mappings, confidence scores, and error codes.', 'Reviewed reruns and edge cases while preserving traceability and review boundaries.', 'Translated findings into system-level recommendations rather than treating OCR quality as the entire problem.'],
    lessons: ['Reliability is a pipeline property, not a single model metric.', 'Traceability changes debugging from anecdotal investigation into a repeatable engineering process.', 'Synthetic public demonstrations can explain a method without violating confidentiality.'],
    limitations: ['Client data, internal detector logic, and confidential operational metrics are intentionally omitted.', 'The synthetic public visual demonstrates method structure, not production performance.', 'A public benchmark is inappropriate unless a publishable dataset and protocol are available.'],
    tags: ['Python', 'pandas', 'AWS S3', 'boto3', 'Azure Document Intelligence', 'JSON', 'OCR Evaluation'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'vision-ros2-sim2real',
    category: 'Computer Vision · Robotics',
    title: 'Fine-Grained Vision and ROS2 Robot Deployment',
    dek: 'A collaborative deployment-focused computer-vision case study on recovering classifier performance after robot-camera domain shift.',
    status: 'Collaborative academic project · team-level results clearly labelled',
    role: 'Collaborative group project. My portfolio contribution focuses on robot-camera evaluation, adaptation analysis, and the deployment evidence I can defend.',
    problem: 'A classifier trained on cleaner image data degraded sharply on robot-camera inputs. Lighting, viewpoint, scale, framing, and background conditions changed enough to expose a deployment gap that headline test accuracy concealed.',
    architecture: ['Curated image dataset', 'Transfer-learning baseline', 'Robot-camera capture', 'Domain-shift diagnosis', 'Targeted augmentation', 'Deployment-specific fine-tuning', 'Confidence-aware ROS2 action mapping'],
    evidence: [
      { value: '90.69%', label: '21-class ResNet50 accuracy', detail: 'Team-level fine-grained classification result across 21 pasta subclasses.' },
      { value: '2.38% → 95.24%', label: 'Robot-image accuracy recovery', detail: 'Team-level endpoint comparison before adaptation and after robot-image augmentation plus fine-tuning.' },
      { value: '3 classes', label: 'Deployment subset', detail: 'Fettuccine, fusilli, and penne were evaluated under robot-camera conditions.' },
    ],
    visual: { mode: 'sim2real', label: 'Verified endpoint comparison', note: 'Measured team-level robot-image accuracy before and after deployment-specific adaptation.' },
    proofAssets: [
      { kind: 'image', title: 'Robot-image accuracy before and after adaptation', caption: 'Verified team-level endpoint comparison: 2.38% before adaptation and 95.24% after robot-image augmentation and fine-tuning.', src: '/proofs/vision-ros2-sim2real/accuracy-before-after.webp', alt: 'Bar chart showing robot-camera accuracy increasing from 2.38 percent before adaptation to 95.24 percent after adaptation', aspect: 'wide', fit: 'contain', priority: true, published: true },
      { kind: 'image', title: 'Robot fine-tuning accuracy with augmentation', caption: 'Exported from the executed notebook: training and validation accuracy across the robot-image fine-tuning run with augmentation.', src: '/proofs/vision-ros2-sim2real/robot-finetune-accuracy.webp', alt: 'Training and validation accuracy during robot-image fine-tuning with augmentation', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'image', title: 'Robot-camera prediction examples', caption: 'Exported from the executed notebook: representative correct and incorrect predictions under deployment conditions.', src: '/proofs/vision-ros2-sim2real/deployment-predictions.webp', alt: 'Robot-camera pasta recognition prediction examples', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'image', title: 'Twenty-one-class ResNet50 training accuracy', caption: 'Exported from the executed notebook: training and validation accuracy for the broader fine-grained classifier.', src: '/proofs/vision-ros2-sim2real/resnet21-training-accuracy.webp', alt: 'Twenty-one-class ResNet50 training and validation accuracy', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'video', title: 'Robot recognition and navigation demo', caption: 'Collaborative Group 15 robot-deployment recording showing the camera-to-action workflow in operation.', src: '/proofs/vision-ros2-sim2real/robot-demo.mp4', poster: '/proofs/vision-ros2-sim2real/robot-demo-poster.webp', aspect: 'video', fit: 'contain', published: true },
    ],
    contribution: ['Contributed to the collaborative Phase 3 deployment workflow and the evaluation of robot-camera domain shift.', 'Documented how targeted augmentation and fine-tuning changed the deployment result.', 'Present the team-level metrics with explicit collaborative attribution rather than claiming sole ownership.'],
    lessons: ['Domain shift should be designed for from the start, not patched at the end.', 'A deployment metric can reveal a failure that a curated test set hides.', 'Physical actions require explicit confidence boundaries.'],
    limitations: ['The reported metrics are collaborative team-level outcomes.', 'The public artifacts include exported evaluation figures, prediction examples, and a collaborative robot-deployment recording.', 'The deployment subset covers three pasta classes rather than the full twenty-one-class dataset.'],
    tags: ['ROS2', 'PyTorch', 'ResNet50', 'Transfer Learning', 'Data Augmentation', 'Sim2Real'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'redditpulse',
    category: 'NLP · Semantic Retrieval',
    title: 'RedditPulse: Semantic Retrieval and Grounded Insight Platform',
    dek: 'A collaborative NLP and retrieval case study on measuring semantic-search quality before treating generated insights as useful.',
    status: 'Collaborative academic prototype · verified evaluation outputs',
    role: 'Collaborative academic project. My portfolio presents the retrieval evaluation, dashboard workflow, and public evidence with explicit team attribution.',
    problem: 'Public discussions are noisy, high-volume, and difficult to inspect with keyword search alone. The system needed an evidence-first retrieval layer before generated summaries could be treated as useful.',
    architecture: ['Reddit collection', 'Text cleaning and metadata', 'Sentiment analysis', 'Topic detection', 'Sentence-transformer embeddings', 'FAISS retrieval', 'Top-k evaluation', 'Grounded insights', 'Streamlit dashboard'],
    evidence: [
      { value: '1,989', label: 'Filtered posts', detail: 'Collaborative dataset after collection and filtering.' },
      { value: '1,588', label: 'Comments', detail: 'Discussion context across 10 subreddits.' },
      { value: 'P@5 = 0.68 · R@5 = 0.68', label: 'Semantic retrieval quality', detail: 'Verified top-five evaluation using 384-dimensional embeddings and FAISS.' },
    ],
    visual: { mode: 'retrieval', label: 'Verified retrieval metrics', note: 'Measured evaluation results from the collaborative prototype.' },
    proofAssets: [
      { kind: 'image', title: 'Semantic retrieval evaluation', caption: 'Generated from the project evaluation JSON: Precision@k and Recall@k across the published retrieval cut-offs.', src: '/proofs/redditpulse/retrieval-evaluation.webp', alt: 'RedditPulse precision and recall evaluation chart', aspect: 'wide', fit: 'contain', priority: true, published: true },
      { kind: 'image', title: 'Sentiment baseline comparison', caption: 'Generated from the project evaluation JSON: Naive Bayes and Logistic Regression baseline metrics.', src: '/proofs/redditpulse/sentiment-baseline-comparison.webp', alt: 'RedditPulse sentiment baseline comparison chart', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'image', title: 'Streamlit dashboard', caption: 'Interactive dashboard showing sentiment, topic, and retrieval outputs.', src: '/proofs/redditpulse/dashboard.webp', alt: 'RedditPulse Streamlit dashboard screenshot', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'link', title: 'Live Streamlit demo', caption: 'Interactive public dashboard.', src: '', href: projectLinks.redditpulseDemo, actionLabel: 'Open live demo', published: Boolean(projectLinks.redditpulseDemo) },
    ],
    contribution: ['Contributed to the collaborative platform and document the retrieval-evaluation path, public metrics, and dashboard workflow.', 'Keep generated insight claims grounded in measured retrieval quality.', 'Present the team-level prototype with explicit collaborative attribution.'],
    lessons: ['Retrieval quality should be evaluated before generation is celebrated.', 'TF-IDF remains a valuable baseline even when dense retrieval is added.', 'Interactive interfaces are most useful when they expose retrieval context, not only generated summaries.'],
    limitations: ['The metrics and evaluation charts describe the collaborative academic prototype.', 'A public Streamlit URL can be enabled from the central content file after deployment.', 'The dashboard is a research prototype rather than a production service.'],
    tags: ['Python', 'NLP', 'RoBERTa', 'Sentence Transformers', 'FAISS', 'RAG', 'Streamlit'],
    links: { repositoryUrl: projectLinks.redditpulseRepository, demoUrl: projectLinks.redditpulseDemo, videoUrl: '' },
  },
  {
    slug: 'reinforcement-learning-benchmark-suite',
    category: 'Reinforcement Learning',
    title: 'Reinforcement-Learning Benchmark Suite',
    dek: 'An individual benchmark suite on algorithm choice, observation design, temporal context, and reward shaping.',
    status: 'Individual coursework benchmark suite · executed notebook figures published',
    role: 'Implemented and compared agents, preprocessing choices, reward wrappers, evaluation callbacks, and exported learning curves.',
    problem: 'Control performance depends on more than selecting an algorithm. Observation design, temporal context, and reward structure materially change what an agent can learn.',
    architecture: ['Taxi-v3 Q-learning', 'LunarLander DQN and PPO', 'AirRaid pixel observations', 'Frame skipping', 'Frame stacking', 'MountainCar reward wrappers', 'Training-curve analysis'],
    evidence: [
      { value: '300 → 1,925', label: 'AirRaid PPO mean reward', detail: 'Executed comparison between no-skip/no-stack and skip=6, stack=3 preprocessing.' },
      { value: '100%', label: 'Final MountainCar success rate', detail: 'Executed momentum-position reward-shaping evaluation.' },
      { value: 'Q-learning · DQN · PPO', label: 'Algorithm comparison', detail: 'Compared discrete, control, and pixel-based learning workflows.' },
    ],
    visual: { mode: 'rl-system', label: 'Executed reinforcement-learning evaluation', note: 'The gallery includes exported curves from the submitted notebook.' },
    proofAssets: [
      { kind: 'image', title: 'AirRaid PPO preprocessing comparison', caption: 'Exported from the executed notebook: AirRaid reward trajectory comparing skip=6, stack=3 against no-skip/no-stack preprocessing.', src: '/proofs/reinforcement-learning-benchmark-suite/airraid-training-curve.webp', alt: 'AirRaid PPO reward trajectory comparing temporal preprocessing settings', aspect: 'wide', fit: 'contain', priority: true, published: true },
      { kind: 'image', title: 'MountainCar reward-shaping success rate', caption: 'Exported from the executed notebook: success rate across evaluation checkpoints for the two shaped-reward designs.', src: '/proofs/reinforcement-learning-benchmark-suite/mountaincar-success-rate.webp', alt: 'MountainCar custom reward success-rate curve', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'image', title: 'LunarLander DQN and PPO comparison', caption: 'Exported from the executed notebook: mean-reward trajectories for DQN and PPO on LunarLander-v3.', src: '/proofs/reinforcement-learning-benchmark-suite/lunarlander-dqn-vs-ppo.webp', alt: 'LunarLander DQN and PPO mean reward comparison', aspect: 'wide', fit: 'contain', published: true },
    ],
    contribution: ['Implemented benchmark agents across four environment families.', 'Changed temporal observation design through frame skipping and stacking.', 'Designed and evaluated custom MountainCar reward wrappers for sparse-reward learning.'],
    lessons: ['Observation design can matter as much as algorithm choice.', 'Reward shaping is an interface-design problem, not a shortcut.', 'Executed curves make the experimental path inspectable instead of relying on endpoint claims alone.'],
    limitations: ['The public figures are exported from the executed coursework notebook.', 'Results are scoped to the stated benchmark environments and evaluation settings.', 'The notebook evaluates single executed runs rather than a multi-seed research benchmark.'],
    tags: ['Python', 'Gymnasium', 'Stable-Baselines3', 'Q-learning', 'DQN', 'PPO'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'temporal-gnn-blockchain-fraud',
    category: 'Temporal Graph Learning · Fraud Detection',
    title: 'Temporal GNN for Blockchain Fraud Detection',
    dek: 'A temporal-graph research build comparing TGAT-style structural reasoning with an optimized XGBoost baseline under a documented synthetic-validation protocol.',
    status: 'Synthetic-validation benchmark · modelling trade-offs clearly labelled',
    role: 'Built and documented a temporal-graph modelling pipeline and comparative validation path. Public claims are limited to the uploaded synthetic-validation report.',
    problem: 'Fraud and anomalous interactions are relational and time-dependent. Flattened tabular features can be fast, but they may lose higher-order structural context as interactions evolve across a network.',
    architecture: ['Temporal interaction stream', 'Rolling tabular features', 'XGBoost baseline', 'Continuous-time encoding', 'TGAT-style attention', 'Dynamic link prediction', 'Latency and memory trade-off analysis'],
    evidence: [
      { value: '98.42%', label: 'Wikipedia-profile TGAT AUC-ROC', detail: 'Synthetic-validation result from the uploaded comparative report.' },
      { value: '94.20%', label: 'Enterprise-profile TGAT AUC-ROC', detail: 'Synthetic-validation result on the higher-complexity transaction profile.' },
      { value: '31.5–78.9 ms', label: 'TGAT latency range', detail: 'Per-batch inference latency across the three synthetic-validation profiles; XGBoost remains substantially faster.' },
    ],
    evidenceNote: 'The public benchmark is a synthetic-validation run. It demonstrates modelling trade-offs and pipeline behaviour; it is not presented as production-system evidence.',
    visual: { mode: 'graph', label: 'Temporal-graph modelling trade-off', note: 'TGAT improves predictive quality in the documented synthetic-validation run while requiring greater latency and memory than XGBoost.' },
    proofAssets: [
      { kind: 'image', title: 'TGAT versus XGBoost benchmark table', caption: 'Synthetic-validation benchmark across Wikipedia interaction, Reddit hyperlink, and enterprise transaction profiles.', src: '/proofs/temporal-gnn-blockchain-fraud/tgat-vs-xgboost-benchmark.webp', alt: 'Synthetic validation benchmark table comparing TGAT and XGBoost', aspect: 'wide', fit: 'contain', priority: true, published: true },
      { kind: 'image', title: 'TGAT and XGBoost AUC-ROC comparison', caption: 'AUC-ROC comparison from the uploaded synthetic-validation report.', src: '/proofs/temporal-gnn-blockchain-fraud/tgat-auc-comparison.webp', alt: 'Bar chart comparing TGAT and XGBoost AUC ROC values', aspect: 'wide', fit: 'contain', published: true },
      { kind: 'image', title: 'Inference-latency trade-off', caption: 'Per-batch latency comparison from the uploaded synthetic-validation report. Lower is faster.', src: '/proofs/temporal-gnn-blockchain-fraud/tgat-latency-tradeoff.webp', alt: 'Bar chart comparing TGAT and XGBoost inference latency', aspect: 'wide', fit: 'contain', published: true },
    ],
    contribution: ['Modelled dynamic interactions as a temporal graph.', 'Built a TGAT-style validation path with continuous-time encodings and attention-based message passing.', 'Compared predictive quality, latency, and memory trade-offs against a tabular XGBoost baseline.', 'Label the public benchmark as synthetic validation rather than overstating production evidence.'],
    lessons: ['Model choice should follow the structure of the problem.', 'Higher predictive quality can carry meaningful latency and memory costs.', 'Synthetic validation is useful when its boundary is explicit and the protocol is documented.'],
    limitations: ['The public benchmark is a synthetic-validation run rather than a live production benchmark.', 'The enterprise transaction profile is a representative validation scenario, not a disclosed client dataset.', 'Deployment decisions still require dataset-specific reruns, calibration, and operational testing.'],
    tags: ['PyTorch', 'NetworkX', 'TGAT', 'Temporal GNNs', 'XGBoost', 'Fraud Detection', 'Synthetic Validation'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'llm-financial-assistant',
    category: 'Generative AI · Conversational Systems',
    title: 'LLM-Based Financial Assistant Prototype',
    dek: 'An individual conversational-AI prototype exploring prompt structure, lightweight model comparison, synthetic financial profiles, and a Gradio interface.',
    status: 'Individual coursework prototype · clearly scoped',
    role: 'Built the notebook prototype, structured prompting flow, lightweight model comparison, and Gradio interface.',
    problem: 'Financial-assistant interfaces need explicit scope boundaries. This prototype explores how structured prompts and a simple dialogue interface can organise responses without presenting the result as professional financial advice.',
    architecture: ['Synthetic financial profiles', 'Structured prompt template', 'GPT-2 and DistilGPT-2 comparison', 'Dialogue wrapper', 'Gradio interface', 'Scoped prototype output'],
    evidence: [
      { value: '2 models', label: 'Lightweight comparison', detail: 'GPT-2 and DistilGPT-2 pipelines are wired into the notebook.' },
      { value: 'Gradio', label: 'Interactive interface', detail: 'A user-facing prototype accepts age, income, risk, goal, and model choice.' },
      { value: 'Synthetic', label: 'Data boundary', detail: 'The notebook uses synthetic profiles and is not financial advice.' },
    ],
    visual: { mode: 'rag', label: 'Conversational prototype workflow', note: 'The public scope reflects the executed notebook rather than claiming an unverified production system.' },
    proofAssets: [],
    contribution: ['Built the prompt-driven dialogue prototype and Gradio interface.', 'Compared lightweight model pipelines inside one notebook workflow.', 'Keep the public scope narrow: conversational prototype, synthetic profiles, and no financial-advice claim.'],
    lessons: ['Interface clarity and scope boundaries matter as much as model output.', 'Synthetic examples are useful for prototyping but do not establish real-world financial suitability.', 'A stronger future version would need grounded retrieval, domain evaluation, and safety review.'],
    limitations: ['The current notebook is a lightweight prototype using synthetic profiles.', 'The public case study does not claim validated financial recommendations.', 'Grounded retrieval and multilingual evaluation are future extensions rather than published evidence.'],
    tags: ['Python', 'Transformers', 'GPT-2', 'DistilGPT-2', 'Prompt Design', 'Gradio'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'semantic-search-ir',
    category: 'NLP · Information Retrieval',
    title: 'Semantic Search and Information Retrieval Engine',
    dek: 'A modular information-retrieval case study comparing transparent lexical baselines with context-aware semantic search and multilingual flow.',
    status: 'Individual modular retrieval research build',
    role: 'Built the reusable preprocessing, retrieval, ranking, and evaluation workflow.',
    problem: 'Keyword matching is inspectable and fast, but meaning can vary across phrasing and language. The system explores how classical TF-IDF baselines and transformer embeddings can be compared honestly rather than treated as competing slogans.',
    architecture: ['Raw text and documents', 'Cleaning and tokenisation', 'TF-IDF baseline', 'Sentence-transformer embeddings', 'Vector search', 'Ranking logic', 'Retrieval evaluation'],
    evidence: [
      { value: 'TF-IDF', label: 'Transparent lexical baseline', detail: 'Maintains an interpretable keyword-oriented comparison path.' },
      { value: 'Dense', label: 'Semantic retrieval path', detail: 'Uses embedding-based similarity for context-aware matching.' },
      { value: 'Top-k', label: 'Retrieval evaluation', detail: 'Evaluates ranked results across representative queries.' },
    ],
    evidenceNote: 'The public scope focuses on architecture and evaluation design without claiming unpublished comparative performance.',
    visual: { mode: 'ir', label: 'Classical-to-semantic retrieval map', note: 'The visual explains the comparison path without inventing benchmark improvements.' },
    proofAssets: [
      { kind: 'image', title: 'TF-IDF versus embeddings comparison', caption: 'Query-level comparison of lexical and semantic retrieval paths.', src: '/proofs/semantic-search-ir/tfidf-vs-embeddings.webp', alt: 'TF-IDF and semantic embedding retrieval comparison', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Multilingual ranking example', caption: 'Reviewed cross-lingual query with ranked results.', src: '/proofs/semantic-search-ir/multilingual-ranking.webp', alt: 'Multilingual information retrieval ranking example', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Retrieval architecture', caption: 'Architecture diagram showing lexical and dense retrieval paths.', src: '/proofs/semantic-search-ir/retrieval-architecture.webp', alt: 'Semantic search and multilingual information retrieval architecture', aspect: 'wide', fit: 'contain', published: false },
    ],
    contribution: ['Built reusable preprocessing, lexical baseline, embedding, vector-search, and ranking components.', 'Separated retrieval quality from response fluency.', 'Kept multilingual support as an evaluated workflow requirement rather than a decorative feature claim.'],
    lessons: ['Classical baselines remain useful because they are transparent and cheap.', 'Dense retrieval should earn its complexity with query-level evidence.', 'Retrieval systems need reviewed examples and evaluation, not only architecture diagrams.'],
    limitations: ['No comparative retrieval improvement is claimed publicly.', 'The public scope focuses on method architecture and evaluation design.', 'Architecture remains separate from unverified outcome claims.'],
    tags: ['TF-IDF', 'Sentence Transformers', 'Vector Search', 'Ranking', 'Information Retrieval'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'ml-data-science-evaluation',
    category: 'Machine Learning · Data Science',
    title: 'Machine-Learning Evaluation and Data-Science Pipeline',
    dek: 'A reproducible experimentation case study covering data preparation, model comparison, validation, and error analysis.',
    status: 'Individual experimentation toolkit',
    role: 'Built reusable experimentation workflows across structured and unstructured data tasks.',
    problem: 'Model selection becomes unreliable when data cleaning, feature engineering, validation, and error analysis are treated as disconnected notebook steps. The pipeline makes the experimental path explicit and repeatable.',
    architecture: ['Problem definition', 'Data collection', 'Cleaning', 'Exploratory analysis', 'Feature engineering', 'Model comparison', 'Cross-validation', 'Error analysis', 'Reporting'],
    evidence: [
      { value: 'E2E', label: 'Lifecycle coverage', detail: 'Connects raw data, modelling, evaluation, and reporting.' },
      { value: 'Compare', label: 'Algorithm benchmarking', detail: 'Supports supervised comparisons, clustering, and baseline analysis.' },
      { value: 'Inspect', label: 'Failure analysis', detail: 'Uses confusion matrices, validation results, and qualitative error review.' },
    ],
    evidenceNote: 'The public scope focuses on reusable experimental method rather than dataset-specific benchmark claims.',
    visual: { mode: 'ml', label: 'Reproducible experimentation loop', note: 'The visual represents the evaluation workflow, not a fabricated benchmark result.' },
    proofAssets: [
      { kind: 'image', title: 'Experiment flow', caption: 'Experiment flow from raw data to reporting.', src: '/proofs/ml-data-science-evaluation/experiment-flow.webp', alt: 'Machine learning experiment workflow', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Model comparison table', caption: 'Algorithm-comparison table from a reproducible evaluation.', src: '/proofs/ml-data-science-evaluation/model-comparison.webp', alt: 'Machine learning model comparison table', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Error-analysis artifact', caption: 'Error slice or confusion matrix with concise interpretation.', src: '/proofs/ml-data-science-evaluation/error-analysis.webp', alt: 'Machine learning error analysis artifact', aspect: 'wide', fit: 'contain', published: false },
    ],
    contribution: ['Built modular workflows for cleaning, exploratory analysis, feature engineering, training, and evaluation.', 'Compared model behaviour with explicit baselines and validation methods.', 'Used error analysis to distinguish headline metrics from actionable findings.'],
    lessons: ['The experimental pipeline is part of the research result.', 'Baseline comparisons prevent overclaiming.', 'A confusion matrix is useful only when it changes what you do next.'],
    limitations: ['The public release focuses on reusable experimental method rather than dataset-specific benchmark results.', 'Any public benchmark requires dataset context and evaluation protocol.', 'Error analysis remains central to model selection.'],
    tags: ['Python', 'pandas', 'scikit-learn', 'EDA', 'Cross-validation', 'Clustering', 'Error Analysis'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  },
  {
    slug: 'responsible-ai-governance',
    category: 'Responsible AI · Governance',
    title: 'Responsible AI, Governance and Human-Centred Analysis',
    dek: 'A research-analysis case study on connecting technical AI decisions with accountability, risk, transparency, and human oversight.',
    status: 'Responsible-AI research and communication portfolio',
    role: 'Analysed governance questions, ethical trade-offs, adoption constraints, and communication requirements across applied-AI contexts.',
    problem: 'AI systems can be technically capable and still fail users or organisations when accountability, transparency, safety, risk, and human oversight are treated as afterthoughts.',
    architecture: ['Use case and stakeholders', 'Risk identification', 'Technical evidence', 'Transparency questions', 'Human oversight', 'Governance controls', 'Communication and review'],
    evidence: [
      { value: 'Risk', label: 'Governance lens', detail: 'Frames technical choices around consequences, controls, and accountability.' },
      { value: 'Human', label: 'Oversight boundary', detail: 'Keeps usability, review, and escalation visible in the system design.' },
      { value: 'Explain', label: 'Communication requirement', detail: 'Translates limitations and trade-offs into decision-ready documentation.' },
    ],
    evidenceNote: 'The public scope presents a research-analysis framework rather than a compliance certification.',
    visual: { mode: 'governance', label: 'Risk-to-governance map', note: 'The visual shows the analysis path without pretending a single framework resolves every context.' },
    proofAssets: [
      { kind: 'image', title: 'Responsible-AI framework map', caption: 'Framework map connecting risks, evidence, controls, and oversight.', src: '/proofs/responsible-ai-governance/framework-map.webp', alt: 'Responsible AI governance framework map', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Risk-register example', caption: 'Generalised risk-register example for an AI use case.', src: '/proofs/responsible-ai-governance/risk-register.webp', alt: 'Responsible AI risk register example', aspect: 'wide', fit: 'contain', published: false },
      { kind: 'image', title: 'Human-centred review flow', caption: 'Human-review, escalation, and accountability flow.', src: '/proofs/responsible-ai-governance/human-review-flow.webp', alt: 'Human-centred AI review and escalation flow', aspect: 'wide', fit: 'contain', published: false },
    ],
    contribution: ['Connected technical decisions with risk, accountability, and user impact.', 'Analysed governance and adoption questions without collapsing them into generic ethical slogans.', 'Treated communication quality as part of responsible system design.'],
    lessons: ['Responsible AI requires system-level decisions, not a checkbox.', 'Transparency must be useful to the people making or contesting decisions.', 'Human oversight needs a defined role, not merely a mention.'],
    limitations: ['This is a research-analysis portfolio, not a compliance certification.', 'Framework choice remains context-specific.', 'Human oversight requires explicit decision boundaries.'],
    tags: ['Responsible AI', 'Governance', 'Risk Analysis', 'Human-Centred AI', 'Transparency', 'Technical Communication'],
    links: { repositoryUrl: '', demoUrl: '', videoUrl: '' },
  }

]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

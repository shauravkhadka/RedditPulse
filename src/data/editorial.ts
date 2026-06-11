import { projectLinks } from '@/src/data/portfolio'

export type SignalContext = {
  label: string
  value: string
}

export type VerifiedSignal = {
  value: string
  title: string
  intro: string
  caseStudyUrl: string
  evidenceUrl: string
  demoUrl?: string
  contexts: SignalContext[]
}

export type EditorialSystem = {
  category: string
  evidenceStatus: string
  title: string
  problem: string
  contribution: string
  result: string
  role: string
  tags: string[]
  caseStudyUrl: string
  featured: boolean
}

export type EvidenceIndexEntry = {
  project: string
  claim: string
  evidenceType: string
  status: 'public-benchmark' | 'public-method' | 'synthetic-validation' | 'research-scope' | 'exploration'
  href: string
}

/** Three benchmark anchors only. These are not repeated as inspectable-system cards. */
export const verifiedSignals: VerifiedSignal[] = [
  {
    value: '2.38% → 95.24%',
    title: 'Robot-image accuracy after deployment-specific Sim2Real adaptation',
    intro:
      'The model looked strong on curated data and degraded sharply on robot-camera images. The recovery came from treating domain shift as a deployment problem, not a footnote.',
    caseStudyUrl: '/work/vision-ros2-sim2real/',
    evidenceUrl: '#evidence',
    demoUrl: '',
    contexts: [
      { label: 'Baseline', value: '2.38% before deployment-specific adaptation.' },
      { label: 'Measured', value: '95.24% robot-image accuracy after targeted collection, augmentation, and fine-tuning.' },
      { label: 'Conditions', value: 'Robot-camera inputs with lighting, viewpoint, scale, and background differences.' },
      { label: 'Public scope', value: 'Collaborative team-level result with exported notebook figures and explicit attribution.' },
    ],
  },
  {
    value: '300 → 1,925',
    title: 'AirRaid PPO mean reward after temporal observation changes',
    intro:
      'Observation design materially changed what the policy could learn. Frame skipping and frame stacking improved the benchmark result without pretending algorithm choice was the only lever.',
    caseStudyUrl: '/work/reinforcement-learning-benchmark-suite/',
    evidenceUrl: '#evidence',
    demoUrl: '',
    contexts: [
      { label: 'Baseline', value: '300 mean reward before temporal observation changes.' },
      { label: 'Measured', value: '1,925 mean reward after frame skipping and frame stacking.' },
      { label: 'Conditions', value: 'AirRaid PPO evaluation inside the reinforcement-learning benchmark suite.' },
      { label: 'Public scope', value: 'The current public release includes exported notebook curves and verified endpoints.' },
    ],
  },
  {
    value: 'P@5 = 0.68 · R@5 = 0.68',
    title: 'RedditPulse semantic retrieval quality',
    intro:
      'The retrieval layer was measured before generation was treated as useful. That matters because grounded insight quality depends on which evidence the system surfaces first.',
    caseStudyUrl: '/work/redditpulse/',
    evidenceUrl: '#evidence',
    demoUrl: projectLinks.redditpulseDemo,
    contexts: [
      { label: 'Measured', value: 'Top-five semantic retrieval evaluation using 384-dimensional embeddings and FAISS.' },
      { label: 'Dataset context', value: '1,989 filtered posts · 1,588 comments · 10 subreddits.' },
      { label: 'Conditions', value: 'Sentence-transformer embeddings and FAISS vector retrieval.' },
      { label: 'Public scope', value: 'Collaborative prototype with verified evaluation charts and explicit attribution.' },
    ],
  },
]

/** Six systems deliberately different from the benchmark-highlight projects above. */
export const allSystems: EditorialSystem[] = [
  {
    category: 'Production AI · Document Intelligence',
    evidenceStatus: 'Public method case study',
    title: 'Production AI Reliability and Document Intelligence',
    problem:
      'Document intelligence can fail long before or after OCR. Real reliability depends on the complete path from ingestion to extraction, transformation, validation, and review.',
    contribution:
      'Built repeatable evaluation workflows across OCR configurations, mappings, confidence scores, error codes, and reruns while preserving traceability and review boundaries.',
    result: 'OCR → transform → validate → trace',
    role: 'AI/ML Research and Development Intern',
    tags: ['Python', 'pandas', 'AWS S3', 'boto3', 'Azure Document Intelligence', 'JSON'],
    caseStudyUrl: '/work/production-ai-reliability/',
    featured: true,
  },
  {
    category: 'Temporal Graph Learning',
    evidenceStatus: 'Temporal graph-learning research build',
    title: 'Temporal GNN for Blockchain Fraud Detection',
    problem:
      'Fraud is relational and time-dependent. Static tabular features can miss how transactions evolve across a network.',
    contribution:
      'Built a TGAT-style pipeline with temporal encodings, attention-based message passing, dual-task learning, and an XGBoost comparison path.',
    result: 't0 → t1 → t2',
    role: 'Research build',
    tags: ['PyTorch', 'NetworkX', 'TGAT', 'Temporal GNNs', 'XGBoost'],
    caseStudyUrl: '/work/temporal-gnn-blockchain-fraud/',
    featured: true,
  },
  {
    category: 'Generative AI · Conversational Systems',
    evidenceStatus: 'Scoped conversational-AI prototype',
    title: 'LLM-Based Financial Assistant Prototype',
    problem:
      'Conversational assistants can produce fluent but poorly scoped responses. This prototype explores structured prompting, model comparison, synthetic profiles, and explicit safety boundaries.',
    contribution:
      'Built a structured prompt workflow, lightweight GPT-2 and DistilGPT-2 comparison, synthetic profile inputs, and a Gradio interface.',
    result: 'profile → prompt → compare → respond',
    role: 'Individual prototype',
    tags: ['Transformers', 'GPT-2', 'DistilGPT-2', 'Prompt Design', 'Gradio'],
    caseStudyUrl: '/work/llm-financial-assistant/',
    featured: true,
  },
  {
    category: 'NLP · Information Retrieval',
    evidenceStatus: 'Modular retrieval research toolkit',
    title: 'Semantic Search and Information Retrieval Engine',
    problem:
      'Keyword matching is transparent but limited when meaning varies across phrasing. The system needed a modular comparison path from classical retrieval to dense semantic search.',
    contribution:
      'Built reusable text preprocessing, TF-IDF baselines, embedding-based retrieval, ranking logic, and evaluation hooks for comparing relevance trade-offs.',
    result: 'clean → encode → rank → evaluate',
    role: 'Individual modular research build',
    tags: ['TF-IDF', 'Sentence Transformers', 'Vector Search', 'Ranking'],
    caseStudyUrl: '/work/semantic-search-ir/',
    featured: false,
  },
  {
    category: 'Machine Learning · Data Science',
    evidenceStatus: 'Reusable experimental evaluation pipeline',
    title: 'Machine-Learning Evaluation and Data-Science Pipeline',
    problem:
      'A model result is only useful when the path from raw data to evaluation is reproducible, comparable, and explicit about failure cases.',
    contribution:
      'Built repeatable workflows for cleaning, exploratory analysis, feature engineering, supervised comparison, clustering, validation, hyperparameter tuning, and error analysis.',
    result: 'data → features → compare → inspect',
    role: 'Individual experimentation toolkit',
    tags: ['scikit-learn', 'pandas', 'EDA', 'Cross-validation', 'Clustering', 'Error Analysis'],
    caseStudyUrl: '/work/ml-data-science-evaluation/',
    featured: false,
  },
  {
    category: 'Responsible AI · Governance',
    evidenceStatus: 'Responsible-AI research and analysis portfolio',
    title: 'Responsible AI, Governance and Human-Centred Analysis',
    problem:
      'AI systems can be technically capable and still fail users, organisations, or communities when accountability, transparency, risk, and human oversight are treated as afterthoughts.',
    contribution:
      'Analysed responsible-AI principles, governance frameworks, human-centred design questions, adoption constraints, and technical-communication requirements across applied AI contexts.',
    result: 'risk → explain → govern → improve',
    role: 'Research analysis and technical communication',
    tags: ['Responsible AI', 'Governance', 'Risk Analysis', 'Human-Centred AI', 'Technical Communication'],
    caseStudyUrl: '/work/responsible-ai-governance/',
    featured: false,
  },
]

export const systemsPortfolioSection = {
  heading: 'Six distinct systems. One research-led portfolio.',
  intro:
    'The benchmark highlights above stay as concise entry points. The six systems below expand the portfolio across production reliability, temporal graph learning, conversational AI, semantic retrieval, machine-learning evaluation, and responsible-AI analysis.',
  metrics: [
    { value: '06', label: 'Distinct systems' },
    { value: '03', label: 'Benchmark anchors' },
    { value: '09', label: 'Total case-study routes' },
  ],
}

/** Evidence index across all nine public case-study routes. */
export const evidenceIndexEntries: EvidenceIndexEntry[] = [
  { project: 'Vision and ROS2 Sim2Real', claim: 'Robot-image accuracy recovery', evidenceType: 'verified endpoint comparison', status: 'public-benchmark', href: '/work/vision-ros2-sim2real/' },
  { project: 'RL Benchmark Suite', claim: 'RL curves and endpoint evaluation', evidenceType: 'exported notebook figures', status: 'public-benchmark', href: '/work/reinforcement-learning-benchmark-suite/' },
  { project: 'RedditPulse', claim: 'Semantic retrieval evaluation', evidenceType: 'verified metrics and evaluation charts', status: 'public-benchmark', href: '/work/redditpulse/' },
  { project: 'Production AI Reliability', claim: 'Synthetic invoice reliability trace', evidenceType: 'sanitised method illustration', status: 'public-method', href: '/work/production-ai-reliability/' },
  { project: 'Temporal GNN Fraud Detection', claim: 'TGAT versus XGBoost trade-off benchmark', evidenceType: 'synthetic-validation table and charts', status: 'synthetic-validation', href: '/work/temporal-gnn-blockchain-fraud/' },
  { project: 'LLM Financial Assistant Prototype', claim: 'Prompt-driven conversational workflow', evidenceType: 'scoped prototype architecture', status: 'exploration', href: '/work/llm-financial-assistant/' },
  { project: 'Semantic Search and IR', claim: 'Classical-to-dense retrieval comparison path', evidenceType: 'retrieval-method architecture', status: 'public-method', href: '/work/semantic-search-ir/' },
  { project: 'ML Evaluation and Data-Science Pipeline', claim: 'Reproducible evaluation workflow', evidenceType: 'experimental pipeline architecture', status: 'public-method', href: '/work/ml-data-science-evaluation/' },
  { project: 'Responsible AI and Governance Analysis', claim: 'Risk-to-governance analysis path', evidenceType: 'governance-analysis framework', status: 'public-method', href: '/work/responsible-ai-governance/' },
]

export const supportingExperience = {
  organisation: 'Ingleburn Convenience Store',
  role: 'Operations and Digital Support Assistant · Part-time',
  dates: 'Oct 2024 — Jun 2026',
  summary:
    'Supported transaction accuracy, inventory records, POS troubleshooting, digital administration, and customer-facing operations while completing postgraduate study in Australia.',
}

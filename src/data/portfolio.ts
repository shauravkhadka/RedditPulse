/**
 * portfolio.ts — Central content file
 * ------------------------------------
 * This is the ONE place to edit the text, links, capabilities,
 * experience, education, credentials, publications, notes, and contact details.
 *
 * Tips:
 * - Leave a URL as an empty string ("") to automatically HIDE its button/link.
 * - Do not invent fake links or emails — empty strings are hidden safely.
 * - After editing, commit to GitHub and Cloudflare Pages will redeploy.
 */

export type CapabilityGroup = {
  title: string
  items: string[]
}

export type ExperienceEntry = {
  role: string
  organisation: string
  dates: string
  location: string
  summary: string
  tags: string[]
}

export type EducationEntry = {
  institution: string
  qualification: string
  dates: string
  location: string
  note: string
}

export type Credential = {
  title: string
  issuer: string
  note: string
}

export type LabNote = {
  title: string
  excerpt: string
  url: string
  eyebrow?: string
  featured?: boolean
}

export type Publication = {
  title: string
  subtitle: string
  role: string
  note: string
  amazonUrl: string
  goodreadsUrl: string
  featured: boolean
  cover: 'amber' | 'blue' | 'rose' | 'violet' | 'emerald' | 'slate' | 'copper'
}

/* ------------------------------------------------------------------ */
/* Identity & hero                                                    */
/* ------------------------------------------------------------------ */

export const site = {
  /** Final public domain. Change this only if your domain changes. */
  url: 'https://shauravkhadka.com.np',
  name: 'Shaurav Khadka',
  title: 'Shaurav Khadka — Applied AI Researcher & AI Systems Engineer',
  description:
    'Portfolio of Shaurav Khadka, an applied AI researcher and AI systems engineer exploring AI-assisted quantum device characterisation, scientific machine learning, trustworthy AI, temporal reasoning, and dependable real-world systems.',
}

export const profile = {
  name: 'Shaurav Khadka',
  title: 'Applied AI Researcher and AI Systems Engineer',
  headline: 'Researching and building dependable AI systems for complex real-world data.',
  supporting:
    'Applied AI researcher with a systems-engineering background. My current priority is AI-assisted quantum device characterisation, supported by scientific machine learning, temporal reasoning, and computational modelling. I build and evaluate dependable systems that turn research questions into testable evidence.',
  microCopy: 'From research question to defensible evidence and dependable implementation.',
  availability: 'Open to interdisciplinary research collaborations and selected AI systems roles',
  portrait: '/profile.webp',
  location: 'Sydney, NSW, Australia',
  signals: [
    { label: 'Primary research direction', value: 'AI-assisted quantum device characterisation' },
    { label: 'Interdisciplinary lens', value: 'Quantum systems · scientific ML · temporal reasoning' },
    { label: 'Execution advantage', value: 'Build · evaluate · integrate' },
  ],
}

/* ------------------------------------------------------------------ */
/* Links — leave "" to hide a button automatically                    */
/* ------------------------------------------------------------------ */

export const links = {
  email: 'khadka.shaurav@gmail.com',
  researchEmail: 'shauravkhadka@students.mq.edu.au',
  linkedin: 'https://www.linkedin.com/in/shauravkhadka',
  github: 'https://github.com/shauravkhadka',
  resume: '/resume.pdf',
  amazonAuthor: 'https://www.amazon.com.au/stores/author/B0CGLSW36F/about',
  goodreads: 'https://www.goodreads.com/author/show/43678467.Shaurav_Khadka',
  coauthorAmazon: 'https://www.amazon.ie/s?i=stripbooks&rh=p_27%3AGokul%2BKhadka',
}

/** Optional public project links. Paste a real URL to reveal its button automatically. */
export const projectLinks = {
  redditpulseDemo: '',
  redditpulseRepository: '',
}

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navItems = [
  { label: 'Research', href: '#research' },
  { label: 'Work', href: '#work' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Experience', href: '#experience' },
  { label: 'Books', href: '#writing' },
  { label: 'About', href: '#about' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

/* ------------------------------------------------------------------ */
/* Expertise strip                                                    */
/* ------------------------------------------------------------------ */

export type ExpertiseGroup = {
  label: string
  note: string
  items: string[]
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    label: 'Research Priorities',
    note: 'Current research direction',
    items: [
      'Artificial Intelligence',
      'AI-Assisted Quantum Device Characterisation',
      'Scientific Machine Learning',
      'Quantum Computing',
      'Open Quantum Systems',
      'Non-Markovian Dynamics',
      'Computational Physics',
      'Computational Mathematics',
    ],
  },
  {
    label: 'Applied Evidence Base',
    note: 'Built and evaluated systems',
    items: [
      'Trustworthy AI',
      'Document Intelligence',
      'Semantic Retrieval',
      'Temporal Graph Learning',
      'Computer Vision',
      'Robotics and Sim2Real',
      'Reinforcement Learning',
      'AI Reliability',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Capabilities                                                       */
/* ------------------------------------------------------------------ */

export const capabilitiesSection = {
  heading: 'Capability Atlas',
  intro:
    'The broader portfolio inventory, grouped by research and systems domain. These capabilities support three measured highlights and six different inspectable systems without turning every subtask into a separate project card.',
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Generative AI, RAG and Multilingual Interaction',
    items: ['Large Language Models', 'Retrieval-Augmented Generation', 'Document chunking', 'Vector embeddings', 'Context injection', 'Prompt engineering', 'Grounded generation', 'Language detection', 'Translation workflows', 'Cross-lingual retrieval'],
  },
  {
    title: 'NLP, Information Retrieval and Social Intelligence',
    items: ['Text preprocessing', 'Tokenisation and lemmatisation', 'Named-entity recognition', 'TF-IDF baselines', 'Sentence-transformer embeddings', 'FAISS retrieval', 'Ranking logic', 'Sentiment modelling', 'Topic classification', 'Trend and community analysis'],
  },
  {
    title: 'Machine Learning, Data Science and Evaluation',
    items: ['Supervised learning', 'Classification', 'Predictive modelling', 'Clustering', 'Exploratory data analysis', 'Feature engineering', 'Cross-validation', 'Hyperparameter tuning', 'Confusion-matrix analysis', 'Comparative benchmarking'],
  },
  {
    title: 'Computer Vision, Robotics and Sim2Real',
    items: ['Convolutional neural networks', 'Transfer learning', 'Fine-tuning', 'Image augmentation', 'Fine-grained recognition', 'Domain-shift analysis', 'Robot-camera adaptation', 'ROS2 integration', 'Confidence thresholds', 'Vision-to-action pipelines'],
  },
  {
    title: 'Reinforcement Learning and Decision Systems',
    items: ['Q-learning', 'DQN', 'PPO', 'Sparse-reward environments', 'Reward shaping', 'Frame stacking', 'Frame skipping', 'Temporal observations', 'Training-curve analysis', 'Policy evaluation'],
  },
  {
    title: 'Production AI, Document Intelligence and Cloud Workflows',
    items: ['OCR evaluation', 'Azure Document Intelligence', 'Invoice parsing', 'Structured extraction', 'AWS S3', 'boto3', 'JSON transformation', 'Confidence-score analytics', 'Error-code analysis', 'Adversarial testing', 'Auditability and deployment risk'],
  },
  {
    title: 'Responsible AI, Governance and Research Communication',
    items: ['Responsible-AI analysis', 'Transparency and accountability', 'Human-centred AI design', 'AI-governance evaluation', 'AI-risk assessment', 'Literature reviews', 'Experimental reporting', 'Technical documentation', 'Presentations', 'Stakeholder communication'],
  },
]

/* ------------------------------------------------------------------ */
/* Approach                                                           */
/* ------------------------------------------------------------------ */

export const approach = {
  eyebrow: 'Research Method',
  heading: 'From research question to defensible evidence.',
  intro:
    'A research-led loop for turning complex questions into models, experiments, evidence, and dependable systems.',
  steps: [
    { number: '01', title: 'Question', text: 'Frame the scientific or operational question, assumptions, constraints, and falsifiable evidence.' },
    { number: '02', title: 'Model', text: 'Choose representations and computational methods that preserve the structure of the problem.' },
    { number: '03', title: 'Test', text: 'Design reproducible experiments, compare baselines, inspect edge cases, and challenge assumptions.' },
    { number: '04', title: 'Translate', text: 'Connect experimental findings to interpretable decisions, robust systems, and practical constraints.' },
    { number: '05', title: 'Communicate', text: 'Document trade-offs, limitations, and decisions clearly enough to act on.' },
  ],
}

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export const experienceSection = {
  heading: 'Research and Technical Work, Ordered by Signal',
  intro:
    'Applied research, production-oriented AI R&D, technical leadership, and software engineering. Supporting operations experience stays visible without dominating the research narrative.',
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI/ML Research and Development Intern',
    organisation: 'TRUUTH',
    dates: 'Feb 2026 — Present',
    location: 'Sydney, NSW, Australia · Hybrid',
    summary: 'Production-oriented document intelligence, fraud-detection evaluation, and AI reliability analysis. Built repeatable OCR-evaluation workflows across layouts, configuration choices, confidence scores, field mappings, and error codes while documenting traceability, reproducibility, validation dependencies, latency, and cost considerations.',
    tags: ['Document Intelligence', 'OCR Evaluation', 'AWS S3', 'Azure Document Intelligence', 'Reliability'],
  },
  {
    role: 'Chief Technology Officer',
    organisation: 'Picpoint Nepal Pvt. Ltd.',
    dates: 'Jun 2021 — Dec 2024',
    location: 'Kathmandu, Nepal · Hybrid',
    summary: 'Technical leadership across operational systems, digital workflows, and data-informed decision support. Led the technical roadmap and maintained systems supporting remote workflows, business coordination, web operations, and market-intelligence tooling.',
    tags: ['Technical Leadership', 'Operations Systems', 'Data Workflows', 'Web Systems'],
  },
  {
    role: 'Jr. Full Stack Developer',
    organisation: 'Thakur International',
    dates: 'Jun 2019 — May 2020',
    location: 'Kathmandu, Nepal · On-site',
    summary: 'Application development, API integration, debugging, and backend-data quality within an agile engineering team. Implemented and maintained web and mobile components while improving maintainability through structured debugging, refactoring, and performance tuning.',
    tags: ['PHP', 'Python', 'JavaScript', 'REST APIs', 'Debugging'],
  },
]

/* ------------------------------------------------------------------ */
/* Education and credentials                                          */
/* ------------------------------------------------------------------ */

export const educationSection = {
  heading: 'Education and Selected Credentials',
  intro: 'Formal study, applied leadership programs, and focused technical learning.',
}

export const education: EducationEntry[] = [
  {
    institution: 'Macquarie University',
    qualification: 'Master of Information Technology · Artificial Intelligence',
    dates: '2024 — Present',
    location: 'Sydney, NSW, Australia',
    note: 'Relevant work: NLP and LLM systems, graph machine learning, advanced computer vision and action, reinforcement learning, AI governance, and an industry AI/ML R&D internship.',
  },
  {
    institution: 'London Metropolitan University · Islington College',
    qualification: 'BSc Computer Science · First Class Honours',
    dates: '2017 — 2021',
    location: 'Kathmandu, Nepal',
    note: 'Ranked among the top 10 students in the cohort. Built recommendation, trip-planning, and database-backed systems across Python, PHP/MySQL, Oracle, C#, Java, and GUI development.',
  },
]

export const credentials: Credential[] = [
  { title: 'Global Leadership Program', issuer: 'Macquarie University', note: 'Structured co-curricular leadership development focused on global engagement and professional growth.' },
  { title: 'MQ Incubator × KPMG Design Thinking', issuer: 'MQ Incubator × KPMG', note: 'Entrepreneurship, innovation, and human-centred problem solving.' },
  { title: 'UPG Sustainability Leadership · 2024', issuer: 'UPG', note: 'Selected as one of 500 participants from a global applicant pool.' },
  { title: 'CS50x Computer Science', issuer: 'Harvard University', note: '' },
  { title: 'Elements of AI', issuer: 'University of Helsinki', note: '' },
  { title: 'Ethics and Governance of AI for Health', issuer: 'World Health Organization', note: '' },
]

/* ------------------------------------------------------------------ */
/* Writing and independent publishing                                 */
/* ------------------------------------------------------------------ */

export const writingSection = {
  heading: 'Books & Independent Publishing',
  intro:
    'Explore my authored and collaborative publishing catalogue: technology and well-being, children’s storytelling, illustration, editing, and creative production.',
  note:
    'The catalogue below includes the seven distinct works listed on my Goodreads Author profile. Purchase links lead to Amazon Australia where a verified listing is available; Goodreads links provide the public catalogue record.',
  featureLabel: 'Featured authored publication',
  featureCta: 'Buy on Amazon',
  catalogueHeading: 'Complete publication catalogue',
  catalogueIntro: 'Authored and collaborative publishing work, presented with direct reading and purchase paths.',
}

export const publications: Publication[] = [
  {
    title: 'The Digital Equilibrium',
    subtitle: 'Navigating Technological Advancement for Optimal Well-Being',
    role: 'Author',
    note: 'An independent authored work exploring how technological progress can be balanced with human well-being and intentional living.',
    amazonUrl: 'https://www.amazon.com.au/Digital-Equilibrium-Navigating-Technological-Advancement/dp/B0D8F68VTN',
    goodreadsUrl: 'https://www.goodreads.com/book/show/197830087-the-digital-equilibrium',
    featured: true,
    cover: 'amber',
  },
  {
    title: 'Children Stories',
    subtitle: 'Bal Katha',
    role: 'Illustrator · Editor',
    note: 'A children’s-story collection created with Gokul Khadka, with illustration and editorial contribution by Shaurav Khadka.',
    amazonUrl: 'https://www.amazon.com.au/Children-Stories-Katha-Gokul-Khadka/dp/B0D877TB8B',
    goodreadsUrl: 'https://www.goodreads.com/book/show/215522595-children-stories',
    featured: false,
    cover: 'blue',
  },
  {
    title: 'Joyful Stories',
    subtitle: 'Joyful Stories',
    role: 'Illustrator · Creative contributor',
    note: 'An illustrated story collection listed in the Goodreads Author catalogue.',
    amazonUrl: 'https://www.amazon.com.au/s?k=Joyful+Stories+Gokul+Khadka+Shaurav+Khadka',
    goodreadsUrl: 'https://www.goodreads.com/book/show/215529800-joyful-stories',
    featured: false,
    cover: 'rose',
  },
  {
    title: 'Joyful Stories',
    subtitle: 'Mazzako Katha',
    role: 'Illustrator · Editor',
    note: 'A colourful illustrated collection designed for younger readers and created with Gokul Khadka.',
    amazonUrl: 'https://www.amazon.com.au/Joyful-Stories-Mazzako-Gokul-Khadka-ebook/dp/B0D89G1C3Q',
    goodreadsUrl: 'https://www.goodreads.com/book/show/215548673-joyful-stories',
    featured: false,
    cover: 'violet',
  },
  {
    title: 'Joyful Stories',
    subtitle: 'Mazzako Katha · Alternate edition',
    role: 'Illustrator · Creative contributor',
    note: 'An alternate catalogue edition of the illustrated Mazzako Katha collection.',
    amazonUrl: 'https://www.amazon.com.au/Joyful-Stories-Mazzako-Gokul-Khadka-ebook/dp/B0D89G1C3Q',
    goodreadsUrl: 'https://www.goodreads.com/book/show/215558712-joyful-stories',
    featured: false,
    cover: 'emerald',
  },
  {
    title: 'Words of Wisdom',
    subtitle: 'Amritvani',
    role: 'Illustrator · Editor',
    note: 'A collaborative illustrated publication centred on devotional reflections and words of wisdom.',
    amazonUrl: 'https://www.amazon.com.au/Words-Wisdom-Amritvani-Gokul-Khadka/dp/B0D8ZHVN8D',
    goodreadsUrl: 'https://www.goodreads.com/book/show/216139388-words-of-wisdom',
    featured: false,
    cover: 'copper',
  },
  {
    title: '2 in 1 Joyful, Children Stories',
    subtitle: 'Combined children’s-story edition',
    role: 'Illustrator · Creative contributor',
    note: 'A combined illustrated edition bringing together children’s stories in a single collection.',
    amazonUrl: 'https://www.amazon.com.au/2-1-Joyful-Children-Stories/dp/B0D94GK5S2',
    goodreadsUrl: 'https://www.goodreads.com/book/show/216276475-2-in-1-joyful-children-stories',
    featured: false,
    cover: 'slate',
  },
]

/* ------------------------------------------------------------------ */
/* Research directions                                                 */
/* ------------------------------------------------------------------ */

export type ResearchDirection = {
  status: 'Primary focus' | 'Active focus'
  title: string
  description: string
  questions: string[]
}

export type ResearchFoundationGroup = {
  title: string
  note: string
  items: string[]
}

export const researchSection = {
  heading: 'Research Directions',
  intro:
    'My primary direction is AI-assisted quantum device characterisation: using rigorous artificial intelligence, scientific machine learning, and mathematical modelling to study noisy quantum systems. I am especially interested in research where temporal dependencies, interpretability, and practical mitigation decisions meet.',
  statement:
    'I want to contribute to research that is mathematically grounded, experimentally honest, physically informed, interpretable where possible, and useful beyond a controlled demonstration.',
  primaryLabel: 'Primary research focus',
  foundationsHeading: 'Interdisciplinary research landscape',
  foundationsIntro:
    'A transparent map of the scientific domains and methods I am actively developing. These are research priorities and learning directions, not inflated claims of completed expertise.',
  ctaLabel: 'Discuss a research opportunity',
  ctaSubject: 'Interdisciplinary AI and quantum research collaboration inquiry',
}

export const researchDirections: ResearchDirection[] = [
  {
    status: 'Primary focus',
    title: 'AI-Assisted Quantum Device Characterisation',
    description:
      'My current priority is the characterisation and mitigation of non-Markovian noise in quantum hardware: combining physical reasoning, artificial intelligence, temporal modelling, and interpretable representations to connect measurement data with practical mitigation decisions.',
    questions: [
      'How can process-tensor and tensor-network representations make memory effects measurable and interpretable?',
      'Where can temporal AI methods improve characterisation without obscuring the underlying physics?',
      'How can optimisation support parameter tuning or gate-sequence decisions for mitigation?',
    ],
  },
  {
    status: 'Active focus',
    title: 'Trustworthy AI Systems and Production Reliability',
    description:
      'Evaluation methods for AI pipelines where traceability, robustness, auditability, confidence handling, latency, and cost matter alongside model accuracy.',
    questions: [
      'How should reliability be measured across the full decision pipeline?',
      'How can failure analysis distinguish model, data, and system faults?',
    ],
  },
  {
    status: 'Active focus',
    title: 'Temporal Learning for Dynamic and Relational Data',
    description:
      'Learning systems for data that evolves over time: temporal graphs, sequential evidence, changing relationships, and non-static risk signals.',
    questions: [
      'When does temporal modelling materially outperform static baselines?',
      'How should time-dependent behaviour be evaluated and explained?',
    ],
  },
  {
    status: 'Active focus',
    title: 'Sim2Real Perception and Autonomous Systems',
    description:
      'Robust perception under deployment shift, confidence-aware decisions, and vision-to-action systems that must behave safely outside curated datasets.',
    questions: [
      'How can deployment adaptation be designed in from the beginning?',
      'How should confidence thresholds shape downstream actions?',
    ],
  },
]

export const researchFoundationGroups: ResearchFoundationGroup[] = [
  {
    title: 'Quantum systems, characterisation and control',
    note: 'The physical and computational language needed to study noisy quantum devices and practical mitigation strategies.',
    items: ['Quantum computing', 'Open quantum systems', 'Non-Markovian dynamics', 'Quantum control', 'Quantum error mitigation'],
  },
  {
    title: 'Mathematical modelling and scientific AI',
    note: 'Methods for turning partially observed physical systems into testable models, interpretable evidence, and reproducible analysis.',
    items: ['Scientific machine learning', 'Process tensors', 'Tensor networks', 'Inverse problems', 'System identification', 'Uncertainty quantification'],
  },
  {
    title: 'Broader scientific interests',
    note: 'Adjacent fields that sharpen how I think about dynamic, complex, and partially observed systems.',
    items: ['Data science', 'Scientific computing', 'Dynamical systems', 'Astrophysics', 'Cosmology', 'Complex systems'],
  },
]

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export const about = {
  heading: 'Research-Led Systems Work',
  paragraphs: [
    'I am an applied AI researcher and AI systems engineer interested in scientifically grounded methods for complex, dynamic, and imperfectly observed systems.',
    'My current direction is AI-assisted quantum device characterisation, with a focus on non-Markovian dynamics, temporal reasoning, interpretable models, and mitigation-oriented analysis. I care about the full path from research question to defensible evidence: defining the problem clearly, selecting representations carefully, testing assumptions, evaluating limitations, and translating results into dependable systems.',
    'My background in software development, technical operations, leadership programs, and independent publishing is an execution advantage. It helps me approach research not as an isolated model exercise, but as a disciplined process of experimentation, explanation, implementation, and responsibility.',
  ],
}

/* ------------------------------------------------------------------ */
/* Tools & technologies                                               */
/* ------------------------------------------------------------------ */

export type TechnologyGroup = {
  title: string
  note: string
  items: string[]
  variant: 'engineering' | 'methods'
}

export const toolsSection = {
  heading: 'Research Methods and Applied Toolkit',
  intro:
    'A research-first view of the methods I am developing and the implementation tools I use to test ideas reproducibly.',
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Research methods in development',
    note: 'Mathematical, computational, and physically informed methods I am actively developing for scientific AI and quantum-device characterisation.',
    variant: 'methods',
    items: [
      'Artificial Intelligence', 'Scientific Machine Learning', 'Process-Tensor Reasoning', 'Tensor Networks', 'Computational Mathematics', 'Computational Physics', 'Numerical Linear Algebra', 'Probability and Statistical Inference', 'Inverse Problems', 'System Identification', 'Uncertainty Quantification', 'Temporal Modelling', 'Signal Processing', 'Optimisation',
    ],
  },
  {
    title: 'Applied engineering toolkit',
    note: 'Languages, libraries, platforms, and workflow tools used to build, evaluate, and communicate applied AI systems.',
    variant: 'engineering',
    items: [
      'Python', 'SQL', 'Java', 'C#', 'PHP', 'pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'TensorFlow', 'PyTorch', 'NetworkX', 'Hugging Face Transformers', 'Sentence Transformers', 'FAISS', 'Streamlit', 'Jupyter', 'Gymnasium', 'Stable-Baselines3', 'ROS2', 'Docker', 'Linux', 'AWS S3', 'boto3', 'Azure Document Intelligence', 'JSON', 'MySQL', 'Oracle', 'Git',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Lab notes                                                          */
/* ------------------------------------------------------------------ */

export const labNotesSection = {
  heading: 'Research Notes and Engineering Decisions',
  intro:
    'Short reflections on research questions, evaluation choices, and the engineering decisions that shape dependable scientific work.',
}

export const labNotes: LabNote[] = [
  {
    title: 'Why I am exploring process tensors for non-Markovian quantum-noise characterisation',
    excerpt: 'A research-preparation note on memory effects in quantum hardware, process-tensor reasoning, tensor-network representations, and where AI may help without obscuring the physics.',
    url: '/notes/process-tensors-non-markovian-noise/',
    eyebrow: 'Primary Research Direction',
    featured: true,
  },
  {
    title: 'Evaluating AI reliability beyond headline accuracy',
    excerpt: 'Why confidence calibration, error-code analysis, and traceability often matter more than a single accuracy number when systems leave the demo.',
    url: '/notes/reliability-beyond-accuracy/',
  },
  {
    title: 'What sparse rewards teach us about system design',
    excerpt: 'Lessons from reward shaping in MountainCar and continuous-control tasks — and how sparse feedback reshapes how we structure learning systems.',
    url: '/notes/sparse-rewards-system-design/',
  },
  {
    title: 'From keyword matching to semantic retrieval',
    excerpt: 'Comparing TF-IDF baselines with transformer embeddings and vector search, and the practical trade-offs of moving to semantic retrieval.',
    url: '/notes/keyword-to-semantic-retrieval/',
  },
]

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

export const contact = {
  heading: 'Let’s investigate and build something consequential.',
  text: 'I am open to interdisciplinary research collaborations and selected AI systems roles spanning AI-assisted quantum device characterisation, scientific machine learning, trustworthy AI, and temporal reasoning.',
  researchEmailSubject: 'Interdisciplinary AI and quantum research collaboration inquiry',
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

export const footer = {
  name: 'Shaurav Khadka',
  title: 'Applied AI Researcher and AI Systems Engineer',
  note: 'Research-led, evidence-disciplined, and built for questions that matter beyond the demo.',
}

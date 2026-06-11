export type NoteLink = { label: string; url: string; note?: string }
export type NoteSection = { heading: string; paragraphs: string[]; bullets?: string[]; links?: NoteLink[] }
export type TechnicalNote = { slug: string; title: string; dek: string; date: string; readTime: string; sections: NoteSection[] }

export const technicalNotes: TechnicalNote[] = [
  {
    slug: 'process-tensors-non-markovian-noise',
    title: 'Why I am exploring process tensors for non-Markovian quantum-noise characterisation',
    dek: 'A research-preparation note on memory effects in quantum hardware, process-tensor reasoning, tensor-network representations, and where AI may help without obscuring the physics.',
    date: 'June 2026',
    readTime: '7 min read',
    sections: [
      {
        heading: 'The research question begins with memory',
        paragraphs: [
          'My current research direction is AI-assisted quantum device characterisation, with a particular interest in non-Markovian noise. The practical question is not simply whether a quantum device is noisy. It is whether the effect of the environment at one moment changes what the device does later, creating temporal dependencies that cannot be represented well by a memoryless approximation.',
          'That distinction matters because simplified Markovian models can be useful, but they can also hide correlations that shape real device behaviour. In superconducting quantum processors, non-Markovian effects have already been characterised experimentally using multi-time methods. This makes the topic more than an abstract mathematical curiosity: it is a measurement, modelling, and control problem.',
        ],
      },
      {
        heading: 'Why process tensors are compelling',
        paragraphs: [
          'A process tensor is appealing because it treats a quantum process across multiple times rather than compressing everything into a single input-output snapshot. Conceptually, it asks how interventions, measurements, and environmental memory combine across a sequence. That makes it a natural language for reasoning about temporal correlations.',
          'Process-tensor tomography extends ordinary process tomography toward non-Markovian dynamics over a chosen time frame. The formalism is powerful, but the experimental and computational cost can grow quickly. That tension is exactly what makes the area interesting: the representation is expressive enough to capture memory, yet practical characterisation still demands careful choices about approximations, efficient reconstruction, and the structure of the noise being measured.',
        ],
      },
      {
        heading: 'Where tensor networks and AI may help',
        paragraphs: [
          'Tensor-network representations are relevant because they can compress structured temporal information. The goal is not to add AI as decoration. The goal is to use computational methods only where they make the physical reasoning more tractable, more interpretable, or more efficient.',
          'The most defensible opportunities appear to be constrained ones: learning compact representations of temporal correlations, identifying informative measurements, comparing reconstruction strategies, supporting optimisation of mitigation decisions, and testing whether a model generalises across device conditions. Any machine-learning component should be evaluated against physics-informed baselines and should preserve a clear evidence path from measurement to conclusion.',
        ],
        bullets: [
          'Characterisation: identify whether memory effects are present and which time scales matter.',
          'Representation: test whether tensor-network structure can reduce the effective complexity of the process description.',
          'Optimisation: explore whether parameter tuning or gate-sequence choices can reduce the impact of correlated noise.',
          'Interpretability: keep the learned representation connected to physically meaningful assumptions and measurable evidence.',
        ],
      },
      {
        heading: 'What I am preparing to learn',
        paragraphs: [
          'My preparation path is interdisciplinary by necessity. It includes open quantum systems, quantum information, linear algebra and tensor methods, probability, numerical methods, optimisation, and scientific machine learning. My existing work in temporal modelling, reliability evaluation, and evidence-disciplined AI systems provides a useful computational base, but it does not replace the physics.',
          'The right standard is therefore humility with momentum: learn the formalism carefully, reproduce small examples, compare methods honestly, and publish only claims that can be defended. The direction is ambitious, but the first milestone is concrete: build enough mathematical and computational fluency to reason about process tensors, memory effects, and mitigation workflows without hand-waving.',
        ],
      },
      {
        heading: 'Reading map',
        paragraphs: [
          'These primary sources are the starting points behind this preparation note. They cover experimental non-Markovian characterisation, process-tensor tomography, open-source simulation tooling, and the role of tensor-network methods in representing memory effects.',
        ],
        links: [
          { label: 'Demonstration of non-Markovian process characterisation and control on a quantum processor', url: 'https://www.nature.com/articles/s41467-020-20113-3', note: 'Experimental characterisation on superconducting quantum devices.' },
          { label: 'Non-Markovian Quantum Process Tomography', url: 'https://arxiv.org/abs/2106.11722', note: 'Formal process-tensor tomography framework and practical reconstruction considerations.' },
          { label: 'OQuPy: A Python package to efficiently simulate non-Markovian open quantum systems with process tensors', url: 'https://arxiv.org/abs/2406.16650', note: 'Open-source process-tensor simulation tooling.' },
          { label: 'Process Tensor Approaches to Non-Markovian Quantum Dynamics', url: 'https://arxiv.org/abs/2509.07661', note: 'Perspective on process tensors and tensor-network approaches.' },
        ],
      },
    ],
  },
  {
    slug: 'reliability-beyond-accuracy',
    title: 'Evaluating AI reliability beyond headline accuracy',
    dek: 'Why production AI evaluation must cover the complete decision pipeline: ingestion, extraction, transformation, validation, review, and operational constraints.',
    date: 'June 2026',
    readTime: '9 min read',
    sections: [
      { heading: 'Accuracy is a starting point, not a conclusion', paragraphs: ['A single accuracy number compresses too much information. It does not reveal whether errors cluster around specific document layouts, whether low-confidence predictions are handled safely, or whether downstream rules fail silently.', 'The useful unit of analysis is the full pipeline: ingestion, OCR, extraction, transformation, validation, storage, review, and operational decision making. A model can appear healthy while the system remains brittle.'] },
      { heading: 'The pipeline is the product', paragraphs: ['When a workflow touches money, identity, security, or compliance, each stage changes the meaning of the final output. A small upstream mismatch can become a large downstream consequence.'], bullets: ['Can the same input be rerun and traced through the same stages?', 'Can reviewers identify where a mismatch entered the pipeline?', 'Are low-confidence results handled explicitly rather than silently accepted?', 'Can teams distinguish model failure from system failure?'] },
      { heading: 'A practical reliability stack', paragraphs: ['A useful review decomposes reliability into layers so one strong metric cannot hide another weakness.'], bullets: ['Input quality: completeness, layout variation, image quality, and ingestion consistency.', 'Extraction quality: OCR behaviour, field confidence, structured output, and missing values.', 'Transformation quality: mappings, normalisation, derived fields, and rule interactions.', 'Decision quality: thresholds, escalation logic, and reviewer visibility.', 'Operational quality: reruns, audit trails, latency, cost, repeatability, and recovery behaviour.'] },
      { heading: 'Traceability changes improvement', paragraphs: ['Traceability is not paperwork added after engineering. When a result can be followed from source input to extraction, transformation, validation rule, and final decision, teams can improve the correct layer instead of guessing.', 'Reliable AI is not merely impressive in a notebook. It remains understandable under pressure, inspectable when it fails, and designed so people can improve it without pretending uncertainty has disappeared.'] },
    ],
  },
  {
    slug: 'sparse-rewards-system-design',
    title: 'What sparse rewards teach us about system design',
    dek: 'Reward shaping is not a shortcut. It is an interface-design problem between an objective and a learning algorithm.',
    date: 'June 2026',
    readTime: '5 min read',
    sections: [
      { heading: 'The learner only sees the interface', paragraphs: ['A sparse reward can make a valid objective almost unusable as a learning signal. MountainCar exposes the distinction clearly: success matters, but a learner may need a more informative path to discover it.'] },
      { heading: 'Reward shaping is a design decision', paragraphs: ['A shaped reward should preserve the direction of the real objective while making useful progress observable. Momentum and position can provide information without pretending the benchmark has changed.'], bullets: ['Define the real success condition first.', 'Add informative signals carefully.', 'Compare designs under the same evaluation protocol.', 'Publish learning curves, not only endpoints.'] },
      { heading: 'The broader lesson', paragraphs: ['System design often determines whether an algorithm can use the information available. Observation design, temporal context, and reward structure can matter as much as model choice.'] },
    ],
  },
  {
    slug: 'keyword-to-semantic-retrieval',
    title: 'From keyword matching to semantic retrieval',
    dek: 'Why TF-IDF remains useful, where dense embeddings help, and how retrieval quality should be evaluated before generation is added.',
    date: 'June 2026',
    readTime: '6 min read',
    sections: [
      { heading: 'Start with a baseline', paragraphs: ['TF-IDF remains useful because it is fast, inspectable, and difficult to hand-wave. Dense retrieval should earn its complexity by improving the queries that matter.'] },
      { heading: 'Measure retrieval before generation', paragraphs: ['A fluent generated answer can hide weak retrieval. Precision@k and Recall@k make the evidence layer visible before generation is treated as useful.'], bullets: ['Compare top-k results across representative queries.', 'Review failure cases manually.', 'Keep baseline and dense retrieval outputs side by side.', 'Attach query-level examples when publishing a demo.'] },
      { heading: 'Grounding is an evidence problem', paragraphs: ['Retrieval-augmented generation is only as trustworthy as the evidence path it exposes. The right question is not whether the answer sounds good. It is whether the surfaced evidence is relevant enough to support the answer.'] },
    ],
  },
]

export function getTechnicalNote(slug: string) { return technicalNotes.find((note) => note.slug === slug) }

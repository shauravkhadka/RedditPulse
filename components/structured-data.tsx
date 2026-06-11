import { links, profile, publications, site } from '@/src/data/portfolio'

/** Lightweight JSON-LD for search engines. Only real public links are included. */
export function StructuredData() {
  const sameAs = [links.linkedin, links.github, links.amazonAuthor, links.goodreads].filter(Boolean)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: site.url,
    jobTitle: profile.title,
    description: site.description,
    image: profile.portrait ? `${site.url}${profile.portrait}` : undefined,
    email: (links.researchEmail || links.email) ? `mailto:${links.researchEmail || links.email}` : undefined,
    knowsAbout: ['Artificial Intelligence', 'Applied AI Research', 'Scientific Machine Learning', 'AI-Assisted Quantum Device Characterisation', 'Quantum Computing', 'Quantum Physics', 'Quantum Information Science', 'Open Quantum Systems', 'Non-Markovian Dynamics', 'Quantum Noise', 'Quantum Control', 'Quantum Error Mitigation', 'Process Tensors', 'Tensor Networks', 'Computational Physics', 'Computational Mathematics', 'Numerical Linear Algebra', 'Inverse Problems', 'System Identification', 'Uncertainty Quantification', 'Temporal Modelling', 'Optimisation', 'Data Science', 'Scientific Computing', 'Signal Processing', 'Dynamical Systems', 'Astrophysics', 'Cosmology', 'Complex Systems', 'Trustworthy AI Systems', 'Natural Language Processing', 'Retrieval-Augmented Generation', 'Temporal Graph Learning', 'Computer Vision', 'Robotics', 'Reinforcement Learning', 'Document Intelligence', 'Sim2Real Adaptation'],
    ...(sameAs.length ? { sameAs } : {}),
    hasPart: publications.map((publication) => ({
      '@type': 'Book',
      name: `${publication.title}: ${publication.subtitle}`,
      author: publication.role === 'Author' ? { '@type': 'Person', name: profile.name } : undefined,
      url: publication.goodreadsUrl || publication.amazonUrl,
      sameAs: [publication.amazonUrl, publication.goodreadsUrl].filter(Boolean),
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

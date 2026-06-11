import type { Metadata, Viewport } from 'next'
import { site } from '@/src/data/portfolio'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s — Shaurav Khadka' },
  description: site.description,
  keywords: ['Shaurav Khadka', 'Applied AI Researcher', 'AI Systems Engineer', 'Artificial Intelligence', 'Scientific Machine Learning', 'AI-Assisted Quantum Device Characterisation', 'Quantum Computing', 'Quantum Physics', 'Quantum Information Science', 'Open Quantum Systems', 'Non-Markovian Dynamics', 'Quantum Noise', 'Quantum Control', 'Quantum Error Mitigation', 'Process Tensors', 'Tensor Networks', 'Computational Physics', 'Computational Mathematics', 'Numerical Linear Algebra', 'Inverse Problems', 'System Identification', 'Uncertainty Quantification', 'Temporal Modelling', 'Optimisation', 'Data Science', 'Scientific Computing', 'Signal Processing', 'Dynamical Systems', 'Astrophysics', 'Cosmology', 'Complex Systems', 'Trustworthy AI', 'Document Intelligence', 'Semantic Retrieval', 'Computer Vision', 'Robotics', 'Reinforcement Learning', 'Author', 'Independent Publishing'],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_US', url: site.url, siteName: site.name,
    title: site.title, description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.title }],
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/og-image.png'] },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = { themeColor: '#0a0a0b', colorScheme: 'dark' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark bg-background"><body className="font-sans antialiased">{children}</body></html>
}

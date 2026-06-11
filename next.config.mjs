/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be hosted on Cloudflare Pages.
  output: 'export',
  trailingSlash: true,
  images: {
    // Required for static export (no runtime image optimisation).
    unoptimized: true,
  },
}

export default nextConfig

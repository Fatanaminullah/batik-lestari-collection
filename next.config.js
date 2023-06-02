/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `frame-ancestors 'none'`

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    WOOCOMMERCE_KEY: process.env.WOOCOMMERCE_KEY,
    WOOCOMMERCE_SECRET: process.env.WOOCOMMERCE_SECRET,
    WORDPRESS_URL: process.env.WORDPRESS_URL,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // {
          //   key: "Cache-Control",
          //   value: "public, max-age=31536000, immutable",
          // },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(self), microphone=(), geolocation=(self), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise the API will respond with 400 Bad Request.
        protocol: "https",
        hostname: "batik-lestari-collection.fatanondev.my.id",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig

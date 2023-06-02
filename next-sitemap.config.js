/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://batiklestaricollection.com/",
  generateRobotsTxt: true, // (optional)
  // ...other options
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: process.env.PRODUCTION === true ? [{ userAgent: '*', allow: '/' }] : [{ userAgent: '*', disallow: '/' }]
  }
}

module.exports = config

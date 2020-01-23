/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Uzoma Orji`,
    titleTemplate: "%s | Visual Artist & Creative Technologist",
    siteUrl: `https://uzomaorji.com`,
    description: `Portfolio website of visual artist and creative technologist Uzoma Orji`,
    image: './static/seo.jpg'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald', 'Inconsolata', 'Merriweather']
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Unique site id
        siteId: 'MTWLAMNY',
        // Domain whitelist
        whitelistHostnames: [
          'uzomaorji.com'
        ]
      }
    }
  ]
}

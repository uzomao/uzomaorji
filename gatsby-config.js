/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Chidumaga Uzoma Orji`,
    titleTemplate: "%s | Visual Artist & Creative Technologist",
    siteUrl: `https://uzomaorji.com`,
    description: `Portfolio website of visual artist and creative technologist Chidumaga Uzoma Orji`,
    image: '/seo.jpg'
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GARDEN_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GARDEN_CONTENTFUL_ACCESS_TOKEN,
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
      resolve: `@raae/gatsby-plugin-fathom`,
      options: {
        site: "HLBXGCIL",
      },
    },
  ]
}

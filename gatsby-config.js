/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Uzoma Orji | Visual Artist & Creative Technologist`,
    siteUrl: `https://uzomaorji.com`,
    description: `Portfolio website of visual artist and creative technologist Uzoma Orji`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald', 'Inconsolata', 'Merriweather']
        }
      }
    }
  ]
}

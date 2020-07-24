const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions
    const visualTemplate = path.resolve(`./src/templates/visual.js`)
    const techTemplate = path.resolve(`./src/templates/tech.js`)

    const visuals = await graphql(`
        query {
            allContentfulVisual {
                nodes {
                    slug
                    title
                }
            }
        }
    `)

    visuals.data.allContentfulVisual.nodes.forEach(( {slug} ) => {
        createPage({
            component: visualTemplate,
            path: `/visuals/${slug}`,
            context: {
                slug
            }
        })
    })

    const techProjs = await graphql(`
        query {
            allContentfulTech {
                nodes {
                    slug
                }
            }
        }
    `)

    techProjs.data.allContentfulTech.nodes.forEach(( {slug} ) => {
        createPage({
            component: techTemplate,
            path: `/tech/${slug}`,
            context: {
                slug
            }
        })
    })
}
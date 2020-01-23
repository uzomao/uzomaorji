const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions
    const visualTemplate = path.resolve(`./src/templates/visual.js`)

    const res = await graphql(`
        query {
            allContentfulVisual {
                nodes {
                    slug
                    title
                }
            }
        }
    `)

    res.data.allContentfulVisual.nodes.forEach(( {slug} ) => {
        createPage({
            component: visualTemplate,
            path: `/visuals/${slug}`,
            context: {
                slug
            }
        })
    })
}
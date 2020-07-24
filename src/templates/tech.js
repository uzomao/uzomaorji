import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import Img from 'gatsby-image'

export const data = graphql`
    query ($slug: String) {
        contentfulTech (slug: {
            eq: $slug
        }) {
            title
            description
            url
            dateCompleted(formatString: "MMMM YYYY")
            projectType
            tags
            image {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

const TechTemplate = (props) => {

    const {
        title, 
        description, 
        url,
        dateCompleted,
        projectType,
        tags,
        images
    } = props.data.contentfulTech

    return (
        <Layout noHeader={true} noFooter={true}>
            <h1>{title}</h1>
        </Layout>
    )

}

export default TechTemplate
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/layout'

import visualStyles from '../styles/visual.module.css'

import Img from 'gatsby-image'

export const data = graphql`
    query ($slug: String) {
        contentfulVisual (slug: {
            eq: $slug
        }) {
            title
            text {
                text
            }
            images {
                fluid (maxWidth: 500, maxHeight: 350, resizingBehavior: FILL) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

const VisualTemplate = (props) => {

    const {title, text, images} = props.data.contentfulVisual

    return (
        <Layout noFooter="true">
            <div className={visualStyles.visual}>
                <h1>{title}</h1>

                <section className={visualStyles.text}>
                    <p>{text.text}</p>
                    <p className={visualStyles.back} onClick={ () => navigate('/visuals') }>Back</p>
                </section>

                <section className={visualStyles.images}>
                    <ul>
                    {
                        images.map((image, index) =>
                            <li key={index}>
                                <Img fluid={image.fluid} alt={title} />
                            </li> 
                        )
                    }
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default VisualTemplate
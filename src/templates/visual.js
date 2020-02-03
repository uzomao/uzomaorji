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
                fluid {
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

                <section className={visualStyles.text} id={visualStyles.text}>
                    <p dangerouslySetInnerHTML={{__html: text.text}}>
                    </p>
                    <button onClick={ () => navigate('/visuals') }>Back</button>
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
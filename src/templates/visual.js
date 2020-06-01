import React, { useState } from 'react'
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

    const image = 'image'
    const description = 'description'

    const [ showImageOrDescription, setshowImageOrDescription ] = useState(image)
    const [ index, setIndex ] = useState(0)

    const imageCount = images.length

    const getActiveClass = (criteria) => {
        return showImageOrDescription === criteria ? visualStyles.active : '' 
    }

    return (
        <Layout noFooter={true} noHeader={true}>
            <div className={visualStyles.visual}>
                <h2>{title}</h2>
                <p className="filter-button-container">
                    <button className={`filter-button ${getActiveClass(image)}`} onClick={() => setshowImageOrDescription(image)}>Images</button> 
                    | 
                    <button className={`filter-button ${getActiveClass(description)}`}  onClick={() => setshowImageOrDescription(description)}>Description</button>
                </p>

                {
                    showImageOrDescription === image ?
                        <section className={visualStyles.images}>
                            <Img fluid={images[index].fluid} alt={title} />
                            <div className="filter-button-container">
                                { index > 0 && <button className="filter-button" onClick={() => setIndex(index-1)}>Prev</button> }
                                <div>
                                    <div className={visualStyles.outerCircle}>
                                        <div className={visualStyles.innerCircle}
                                        style={{
                                            width: `${(index+1)/imageCount*100}%`,
                                            height: `${(index+1)/imageCount*100}%`
                                        }}></div>
                                    </div>                             
                                </div>
                                { index < imageCount - 1 && <button className="filter-button" onClick={() => setIndex(index+1)}>Next</button> }
                            </div>
                        </section>
                        :
                        <section className={visualStyles.text} id={visualStyles.text}>
                            <p dangerouslySetInnerHTML={{__html: text.text}}></p>
                        </section>
                }
                
            </div>
        </Layout>
    )
}

export default VisualTemplate
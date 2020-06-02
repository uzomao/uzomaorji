import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
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

    const innerCircleDimensions = `${(index+1)/imageCount*100}%`

    return (
        <Layout noFooter={true} noHeader={true}>
            <div className={visualStyles.visual}>
                <header>
                    <Link to='/visuals'>Exit</Link>
                    <h2>{title}</h2>
                </header>
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
                                <span>
                                    <span className={visualStyles.outerCircle}>
                                        <span className={visualStyles.innerCircle}
                                        style={{
                                            width: innerCircleDimensions,
                                            height: innerCircleDimensions
                                        }}>
                                            {
                                                innerCircleDimensions === '100%' && <Link to='/visuals'>Back</Link>
                                            }
                                        </span>
                                    </span>                             
                                </span>
                                { index < imageCount - 1 && <button className="filter-button" onClick={() => setIndex(index+1)}>Next</button> }
                            </div>
                        </section>
                        :
                        <section className={visualStyles.text} id={visualStyles.text}>
                            <p dangerouslySetInnerHTML={{__html: text.text}}></p>
                            <Link to='/visuals'>Exit</Link>
                        </section>
                }
                
            </div>
        </Layout>
    )
}

export default VisualTemplate
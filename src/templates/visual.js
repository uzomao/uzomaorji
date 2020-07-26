import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import visualStyles from '../styles/visual.module.css'

import Img from 'gatsby-image'

import { FaChevronLeft, FaChevronRight, FaUndoAlt } from 'react-icons/fa'

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
                    <Link to='/visuals'>
                        <button className="button">Back to projects</button>
                    </Link>
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
                            <div className={visualStyles.buttonContainer}>
                                { index > 0 && <FaChevronLeft 
                                    onClick={() => setIndex(index-1)} /> 
                                }
                                <span>
                                    <span className={visualStyles.outerCircle}>
                                        <span className={visualStyles.innerCircle}
                                        style={{
                                            width: innerCircleDimensions,
                                            height: innerCircleDimensions
                                        }}>
                                            <span className={visualStyles.restartBtn}>
                                                {
                                                    innerCircleDimensions === '100%' && 
                                                        <FaUndoAlt onClick={() => setIndex(0)} 
                                                    />
                                                }
                                            </span>
                                        </span>
                                    </span>                             
                                </span>
                                { index < imageCount - 1 && <FaChevronRight onClick={() => setIndex(index+1)} /> }
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
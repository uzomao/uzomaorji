import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import visualStyles from '../styles/visual.module.css'

import Browser from '../components/browser'

import { FaChevronLeft, FaChevronRight, FaUndoAlt, FaExternalLinkAlt } from 'react-icons/fa'

import Img from 'gatsby-image'

export const data = graphql`
    query ($slug: String) {
        contentfulTech (slug: {
            eq: $slug
        }) {
            title
            detailedDescription {
                detailedDescription
            }
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
            showInBrowser
            exhibitions {
                name
                url
            }
            caseStudyUrl
        }
    }
`

const TechTemplate = (props) => {

    const {
        title,
        description,
        detailedDescription, 
        url,
        dateCompleted,
        projectType,
        tags,
        image,
        showInBrowser,
        exhibitions,
        caseStudyUrl
    } = props.data.contentfulTech

    const [ index, setIndex ] = useState(0)
    const imageCount = image.length

    const innerCircleDimensions = `${(index+1)/imageCount*100}%`

    const backBtn = <Link to='/portfolio/tech' state={{
                            currentProjectIndex: props.location.state ? 
                                props.location.state.currentProjectIndex : 0
                        }}>
                        <button className="button">Back to projects</button>
                    </Link>

    return (
        <Layout noHeader={true} noFooter={true}>
            <div className={`${visualStyles.visual} ${visualStyles.visualTech}`}>
                <header>
                    {backBtn}
                    <h2 style={{fontSize: '1.75rem'}}>{title}</h2>
                </header>

                <section className={visualStyles.images}>
                    
                    {
                        showInBrowser === false ?
                            <Img fluid={image[index].fluid} alt={title} />
                        :
                            <Browser 
                                projectImage={image[index].fluid}
                                projectAlt={description}
                                isLightTheme={true}
                                isTerminal={false}
                                includeOverlay={false}
                            />
                    }

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

                <section className={visualStyles.projectMeta}>
                    <div>
                        <p>{projectType}</p>
                        <p>{dateCompleted}</p>
                    </div>

                    <div>
                        <p style={{textTransform: 'lowercase'}}>
                            {
                                tags.map((tag, index) => <span key={index}>{`[${tag}]`}</span>)
                            }
                        </p>
                    </div>
                </section>

                <section className={`${visualStyles.text} ${visualStyles.techText}`} id={visualStyles.text}>
                    <p dangerouslySetInnerHTML={{__html: detailedDescription.detailedDescription}}></p>
                </section>

                {
                    exhibitions &&
                        <div className={visualStyles.techText} style={{marginBottom: '1em'}}>
                            <h3 style={{margin: '1em 0'}}>Exhibited at:</h3>
                            <ul>
                                {
                                    exhibitions.map(({name, url}, index) => 
                                        <li key={index} className={visualStyles.techFontSize}>
                                            <a href={url} target="_blank" rel="noopener noreferrer">
                                                {name}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                }

                {
                    url &&
                        <p className={visualStyles.url}>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {url.split('://')[1]} <FaExternalLinkAlt className="external-link-icon" />
                            </a>
                        </p>
                }
                {
                    caseStudyUrl &&
                        <p className={visualStyles.url}>
                            <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer">
                                Read case study <FaExternalLinkAlt className="external-link-icon" />
                            </a>
                        </p>
                }
            </div>
        </Layout>
    )

}

export default TechTemplate
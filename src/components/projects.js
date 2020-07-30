/**
 * 
 * There is a separate component for all projects - as opposed to just putting them in tech.js - so that they can be used
 * by both tech.js and terminal.js (respectively the non-interactive and interactive modes of viewing tech projects)
 */

import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Browser from '../components/browser'

import projectsStyles from '../styles/projects.module.css'
import browserStyles from '../styles/browser.module.css'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import Img from 'gatsby-image'

const Projects = (props) => {

    const projects = useStaticQuery(graphql`
        query {
            allContentfulTech (sort: {
                fields: dateCompleted
                order:DESC
              }){
                nodes {
                    title
                    description
                    url
                    terminalName
                    image {
                        fluid {
                            src
                        }
                    }
                    detailedDescription {
                        detailedDescription
                    }
                    dateCompleted(formatString: "MMMM YYYY")
                    projectType
                    tags
                    slug
                    exhibitions {
                        name
                    }
                    showInBrowser
                }
            }
        }
    `)

    const [ currentProjectIndex, setCurrentProjectIndex ] = useState(props.currentProjectIndex)
    const currentProjectCount = currentProjectIndex + 1
    const totalProjectCount = projects.allContentfulTech.nodes.length
    const currentProject = projects.allContentfulTech.nodes[currentProjectIndex]

    return (
        <div className={props.className} style={{display: 'flex'}}>
            <div className={projectsStyles.projectLeft}>
                <h2 className={projectsStyles.projectTitle}>{currentProject.title}</h2>
                <p className={projectsStyles.projectDescription}>{currentProject.description}</p>

                <Browser 
                    projectImage={currentProject.image[0].fluid}
                    projectAlt={currentProject.description}
                    isLightTheme={props.isLightTheme}
                    isTerminal={props.isTerminal}
                    includeOverlay={true}
                    projectSlug={currentProject.slug}
                    currentProjectIndex={currentProjectIndex}
                    showInBrowser={currentProject.showInBrowser}
                />
            </div>
            <div className={projectsStyles.projectRight}>
                <div>
                    <div className={projectsStyles.projectNavigation}>
                        { currentProjectCount !== 1 && 
                            <FaArrowAltCircleLeft 
                                onClick={
                                    () => currentProjectCount === totalProjectCount ? 
                                        setCurrentProjectIndex(0) 
                                        :
                                        setCurrentProjectIndex(currentProjectIndex - 1)
                                }
                            />  
                        }
                        { currentProjectCount !== totalProjectCount && 
                            <FaArrowAltCircleRight 
                                onClick={() => setCurrentProjectIndex(currentProjectIndex + 1) }
                            /> 
                        }
                    </div>
                    <p>{currentProjectCount} of {totalProjectCount}</p>
                </div>

                <p style={{fontSize: '21.5px', fontWeight: 'bold'}}>
                    {currentProject.dateCompleted}
                </p>

                <div>
                    <p>{currentProject.projectType}</p>
                    <p style={{textTransform: 'lowercase'}}>
                        {
                            currentProject.tags.map((tag, index) => <span key={index}>{`[${tag}]`}</span>)
                        }
                    </p>
                </div>

                <div>
                    <Link to={`/tech/${currentProject.slug}`} state={{
                        currentProjectIndex: currentProjectIndex
                    }}>
                        <button className='button' style={{width: '100%'}}>See Project</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects
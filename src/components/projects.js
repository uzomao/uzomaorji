/**
 * 
 * There is a separate component for all projects - as opposed to just putting them in tech.js - so that they can be used
 * by both tech.js and terminal.js (respectively the non-interactive and interactive modes of viewing tech projects)
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Browser from '../components/browser'

const Projects = (props) => {

    const projects = useStaticQuery(graphql`
        query {
            allContentfulTech {
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
                }
            }
        }
    `)

    const locationPathname = typeof window !== `undefined` ? window.location.pathname : ''

    const listOfProjects = projects.allContentfulTech.nodes.map((project, index) =>
        <li key={index}>
            <article onClick={() => props.toggleProject(index)}>
                <Browser projectImage={project.image[0].fluid.src} projectAlt={project.description} 
                height={props.imgHeight} isLightTheme={true} />
                {
                    locationPathname === '/tech' ?
                        <p>{project.description}</p>
                    :
                        <p>{project.terminalName}</p>
                }
            </article>
        </li>
    )

    return (
        <ul className={props.className}>
            {listOfProjects}
        </ul>
    )
}

export default Projects
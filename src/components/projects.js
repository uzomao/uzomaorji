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
                        fixed {
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

    const listOfProjects = projects.allContentfulTech.nodes.map((project) =>
        <li key={project.id}>
            <article onClick={() => props.clickAction(project.id)}>
                <Browser projectImage={project.image} projectAlt={project.description} 
                height={props.imgHeight} />
                {
                    window.location.pathname === '/tech' ?
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
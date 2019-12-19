import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

// import PropTypes from 'prop-types';

import techProjectStyles from '../styles/tech-project.module.css';

import Browser from './browser'

const TechProject = (props) => {

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

	const [project, setProject] = useState({})

	useEffect(() => {
		setProject(projects.allContentfulTech.nodes[props.projectId])
	}, [projects.allContentfulTech.nodes, props.projectId, project])

	const techProjectClassName = props.isTerminal ? techProjectStyles.tpTerminal : techProjectStyles.techProject
	
	return (
		<div className={techProjectClassName} style={{top: window.pageYOffset}}>
			<h1>
				{
					!props.isTerminal &&
						<span onClick={() => {props.toggleProject()}}>X</span>
				}
				{project.title}
			</h1>

			<div className={techProjectStyles.terminalInfo}>
				<article>
					<Browser projectImage={project.image} projectAlt={project.description} />
				</article>

					<p dangerouslySetInnerHTML={{__html: project.text}}>
					</p>
			</div>

			<div className={techProjectStyles.visitButton}>
				<a href={project.url} target='_blank' rel='noopener noreferrer'>
					<button>
						Visit this website
					</button>
				</a>
			</div>
		</div>
	);
}

export default TechProject

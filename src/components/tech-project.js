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

	const [ project, setProject ] = useState({})
	const [ imgSrc, setImgSrc ] = useState('')
	const [ detailedDescription, setDetailedDescription] = useState('')

	useEffect(() => {

		var currentProject = projects.allContentfulTech.nodes[props.projectId]
		setProject(currentProject)
		setImgSrc(currentProject.image[0].fluid.src)
		setDetailedDescription(currentProject.detailedDescription.detailedDescription)

	}, [projects.allContentfulTech.nodes, props.projectId, project])

	const techProjectClassName = props.isTerminal ? techProjectStyles.tpTerminal : techProjectStyles.techProject;

	//should re-enable for theme selection feature in future
	//const techProjectTheme = this.context.isLightTheme ? techProjectStyles.tp-light-theme : techProjectStyles.tp-dark-theme;

	let windowYOffset = typeof window !== undefined ? window.pageYOffset : 0
	
	return (
		<div className={`${techProjectClassName} ${techProjectStyles.tpLightTheme}`} style={{top: windowYOffset}}>
			<h1>
				{
					!props.isTerminal &&
						<span onClick={() => {props.toggleProject(undefined)}}>X</span>
				}
				{project.title}
			</h1>

			{/* <div className={techProjectStyles.terminalInfo}> */}
			<article>
				<Browser projectImage={imgSrc} projectAlt={project.description} isLightTheme={true} height="400px" />
			</article>

			<p dangerouslySetInnerHTML={{__html: detailedDescription}}>
			</p>
			{/* </div> */}

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

/**
 * 
 * This component is for individual tech projects
 */


import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import techProjectStyles from '../styles/tech-project.module.css';

import Browser from './browser'

const TechProject = (props) => {

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
                }
            }
        }
	`)

	const [ project, setProject ] = useState({})
	const [ imgSrc, setImgSrc ] = useState('')
	const [ detailedDescription, setDetailedDescription] = useState('')
	const [ imgHeight, setImgHeight ] = useState('400px')
	const [ isLightTheme, setIsLightTheme ] = useState(true)

	useEffect(() => {

		var currentProject = projects.allContentfulTech.nodes[props.projectId]
		setProject(currentProject)
		setImgSrc(currentProject.image[0].fluid.src)
		setDetailedDescription(currentProject.detailedDescription.detailedDescription)

		if(typeof window !== `undefined` && window.innerWidth < 900) {
			setImgHeight('200px')
		}

		if(props.isTerminal){
			setIsLightTheme(false)
		}

	}, [projects.allContentfulTech.nodes, props.projectId, project, props.isTerminal])

	const techProjectClassName = props.isTerminal ? 
		`${techProjectStyles.tpTerminal} ${techProjectStyles.tpDarkTheme}` 
		: techProjectStyles.techProject;

	//should re-enable for theme selection feature in future
	//const techProjectTheme = this.context.isLightTheme ? techProjectStyles.tp-light-theme : techProjectStyles.tp-dark-theme;

	let windowYOffset = typeof window !== `undefined` ? window.pageYOffset : 0
	
	return (
		<div className={techProjectClassName} style={{top: windowYOffset}}>
			<h1>
				{
					!props.isTerminal &&
						<span onClick={() => {props.toggleProject(undefined)}}>X</span>
				}
				{project.title}
			</h1>

			<div className={techProjectStyles.terminalInfo}>
				<article>
					<Browser projectImage={imgSrc} projectAlt={project.description} isLightTheme={isLightTheme} height={imgHeight} />
				</article>


				<div className={techProjectStyles.projectInfoRight} style={{height: imgHeight}}>
					<p dangerouslySetInnerHTML={{__html: detailedDescription}}>
					</p>

					<a href={project.url} target='_blank' rel='noopener noreferrer'>
						<button>
							Visit this website
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TechProject

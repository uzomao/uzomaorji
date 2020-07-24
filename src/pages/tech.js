import React, { useState, useEffect, useContext } from 'react'

import { Link, navigate } from 'gatsby'

import TechProject from '../components/tech-project'
import Projects from '../components/projects'
import Layout from '../components/layout'

import projectsStyles from '../styles/projects.module.css'
import techStyles from '../styles/tech.module.css';

import Context from '../../context'

const Tech = () => {

	const [ isProjectActive, setIsProjectActive ] = useState(false)
	const [ projectId, setProjectId ] = useState(undefined)

	const toggleProject = (projectId) => {
		setIsProjectActive(!isProjectActive)
		setProjectId(projectId)
	}

	const { isDesktop, isPortrait } = useContext(Context)

	useEffect(() => {
		!isPortrait && navigate('/terminal')
	}, [isDesktop, isPortrait])

	const enableInteractiveMode = isDesktop ? 
			<Link to='/terminal'><span className='button'>switch to interactive console</span></Link>
			:
			<span><br></br>{`<rotate for interactive console>`}</span>

	return (
		<Layout>
			<div className={techStyles.techProjects}>

				<p className={techStyles.formatText}>
					Tech Portfolio 
					{` `}
					{enableInteractiveMode}
				</p>

				<Projects className={projectsStyles.projects} 
				toggleProject={toggleProject} 
				isLightTheme={true} isTerminal={false}/>

				{
					isProjectActive && isDesktop &&
						<TechProject 
						projectId={projectId} 
						toggleProject={toggleProject} />
				}

			</div>
		</Layout>
	)
}

export default Tech

// import React, { useState, useEffect, useContext } from 'react'

// import { Link, navigate } from 'gatsby'

import React from 'react'
import { Link } from 'gatsby'

import Projects from '../components/projects'
import Layout from '../components/layout'

import projectsStyles from '../styles/projects.module.css'
import techStyles from '../styles/tech.module.css';

import Context from '../../context'

const Tech = (props) => {

	// const { isDesktop, isPortrait } = useContext(Context)

	// useEffect(() => {
	// 	!isPortrait && navigate('/terminal')
	// }, [isDesktop, isPortrait])

	// const enableInteractiveMode = isDesktop ? 
	// 		<Link to='/terminal'><span className='button'>switch to interactive console</span></Link>
	// 		:
	// 		<span><br></br>{`<rotate for interactive console>`}</span>

	return (
		<Layout>
			<div className={techStyles.techProjects}>

				<p className={techStyles.formatText}>
					Here's a selection of tech things I've made
					{/* {` `}
					{enableInteractiveMode} */}
				</p>

				<Projects className={projectsStyles.projects} 
					isLightTheme={true} 
					isTerminal={false}
					currentProjectIndex={ 
						props.location.state && props.location.state.currentProjectIndex ? props.location.state.currentProjectIndex : 0 }
				/>

			</div>
		</Layout>
	)
}

export default Tech

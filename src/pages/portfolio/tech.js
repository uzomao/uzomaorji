import React, { useState, useEffect, useContext } from 'react'

import { Link, navigate } from 'gatsby'

import Projects from '../../components/projects'
import Layout from '../../components/layout'

import projectsStyles from '../../styles/projects.module.css'
import techStyles from '../../styles/tech.module.css';

import Context from '../../../context'

const Tech = (props) => {

	const { isDesktop, isPortrait } = useContext(Context)

	const [ showFilterModal, setShowFilterModal ] = useState(false)

	useEffect(() => {
		!isPortrait && navigate('/terminal')
	}, [isDesktop, isPortrait])

	return (
		<Layout>
			<div className={techStyles.techProjects}>

				<p className={techStyles.formatText}>
					Here's a selection of tech things I've made <br/><button className='button techy-button' onClick={() => {setShowFilterModal(!showFilterModal)}}>filter project by type</button>
				</p>

				<Projects className={projectsStyles.projects} 
					isLightTheme={true} 
					isTerminal={false}
					currentProjectIndex={ 
						props.location.state && props.location.state.currentProjectIndex ? props.location.state.currentProjectIndex : 0 
					}
					showFilterModal={showFilterModal}
					setShowFilterModal={setShowFilterModal}
				/>

			</div>
		</Layout>
	)
}

export default Tech

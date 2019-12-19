import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import TechProject from '../components/tech-project'
import Projects from '../components/projects'

import projectsStyles from '../styles/projects.module.css'
import techStyles from '../styles/tech.module.css';

export default class tech extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	state = {
		toggleProject: false,
		projectId: undefined
	}

	toggleProject = (projectId=undefined) => {
		this.setState({
			toggleProject: !this.state.toggleProject,
			projectId: projectId
		})
	}

	render() {

		return (
			<div className={techStyles.techProjects}>

				<Header />

				<p className={techStyles.formatText}>a select few projects I've worked on recently:</p>

				<Projects className={projectsStyles.projects} clickAction={this.toggleProject} imgHeight="350px" />

				{
					this.state.toggleProject &&
						<TechProject 
						projectId={this.state.projectId} 
						toggleProject={this.toggleProject} />
				}

			</div>
		);
	}
}
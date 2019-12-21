import React from 'react'
import PropTypes from 'prop-types'

import TechProject from '../components/tech-project'
import Projects from '../components/projects'
import Layout from '../components/layout'

import projectsStyles from '../styles/projects.module.css'
import techStyles from '../styles/tech.module.css';

export default class tech extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	state = {
		isProjectActive: false,
		projectId: undefined
	}

	toggleProject = (projectId) => {
		this.setState({
			isProjectActive: !this.state.isProjectActive,
			projectId: projectId
		})
	}

	render() {

		return (

			<Layout>
				<div className={techStyles.techProjects}>

					<p className={techStyles.formatText}>a select few projects I've worked on recently:</p>

					<Projects className={projectsStyles.projects} toggleProject={this.toggleProject} imgHeight="350px" />

					{
						this.state.isProjectActive &&
							<TechProject 
							projectId={this.state.projectId} 
							toggleProject={this.toggleProject} />
					}

				</div>
			</Layout>
		);
	}
}

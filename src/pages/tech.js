import React from 'react'
import PropTypes from 'prop-types'

import { Link, navigate } from 'gatsby'

import TechProject from '../components/tech-project'
import Projects from '../components/projects'
import Layout from '../components/layout'

import projectsStyles from '../styles/projects.module.css'
import techStyles from '../styles/tech.module.css';

import Context from '../../context'

export default class tech extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	state = {
		isProjectActive: false,
		projectId: undefined,
		imgHeight: '350px',
		isDesktop: this.context.isDesktop
	}

	toggleProject = (projectId) => {
		this.setState({
			isProjectActive: !this.state.isProjectActive,
			projectId: projectId
		})
	}

	static contextType = Context

	componentDidMount(){
		if(!this.context.isDesktop){
			this.setState({
				imgHeight: '250px',
				isDesktop: false
			})
		}
	}

	componentDidUpdate(){
		if(!this.context.isPortrait){
			navigate('/terminal')
		}
	}

	render() {

		const enableInteractiveMode = this.state.isDesktop ? 
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
					toggleProject={this.toggleProject} 
					imgHeight={this.state.imgHeight} isLightTheme={true} isTerminal={false}/>

					{
						this.state.isProjectActive && this.state.isDesktop &&
							<TechProject 
							projectId={this.state.projectId} 
							toggleProject={this.toggleProject} />
					}

				</div>
			</Layout>
		);
	}
}

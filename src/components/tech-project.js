import React from 'react';
import PropTypes from 'prop-types';

import techProjectStyles from '../styles/tech-project.module.css';

import Browser from './browser'

export default class TechProject extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {
			project: {}
		}
	}

	componentDidMount() {
		this.setState({
			project: this.context.projects[this.props.projectId - 1],
		})
	}

	render() {
		const project = this.state.project;
		const techProjectClassName = this.props.isTerminal ? techProjectStyles.tpTerminal : techProjectStyles.techProject
		const techProjectTheme = this.context.isLightTheme ? techProjectStyles.tpLightTheme : techProjectStyles.tpDarkTheme

		return (
			<div className={`${techProjectClassName} ${techProjectTheme}`} style={{top: window.pageYOffset}}>
				<h1>
					{
						!this.props.isTerminal &&
							<span onClick={() => {this.props.toggleProject()}}>X</span>
					}
					{project.name}
				</h1>

				<div className={techProjectStyles.terminalInfo}>
					<article>
						<Browser projectImage={project.image} projectAlt={project.description} isLightTheme={this.context.isLightTheme}/>
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
}

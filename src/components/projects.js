/**
 * 
 * There is a separate component for all projects - as opposed to just putting them in tech.js - so that they can be used
 * by both tech.js and terminal.js (respectively the non-interactive and interactive modes of viewing tech projects)
 */

import React from 'react'

import Browser from '../components/browser'

export default class Projects extends React.Component {

    render(){
        const projects = this.context.projects.map((project) =>
			<li key={project.id}>
				<article onClick={() => this.props.clickAction(project.id)}>
					<Browser projectImage={project.image} projectAlt={project.description} 
					isLightTheme={this.context.isLightTheme} 
                    height={this.props.imgHeight} />
					{
                        window.location.pathname === '/tech' ?
                            <p>{project.description}</p>
                        :
                            <p>{project.terminalName}</p>
                    }
				</article>
			</li>
		);

        return(
            <ul className={this.props.className}>
                {projects}
            </ul>
        )
    }
}
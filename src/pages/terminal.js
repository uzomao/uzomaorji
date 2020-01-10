import React from 'react'

import terminalStyles from '../styles/terminal.module.css'

import Projects from '../components/projects'
import TechProject from '../components/tech-project'

export default class Terminal extends React.Component {

    state = {
        promptIndex: 0,
        projectIds: {
            'moneybrain': 0,
            'find your next read': 1,
            'games': 2,
            'ubuuru': 3, 
            'intimate show': 4, 
        },
        //TODO: figure out a more programmatic way of assigning project ids to terminal names
        projectId: 1,
        allProjectsAppended: false,
        singleProjectAppended: false
    }

    componentWillMount(){
        window.addEventListener('keypress', this.onKeyPress)
    }

    componentDidMount(){
        this._createAndInsertDiv()
        document.getElementById(`terminal-input-${this.state.promptIndex}`).focus()
    }

    componentWillUnmount(){
        window.removeEventListener('keypress', this.onKeyPress)
    }

    onKeyPress = (e) => {
        if(e.keyCode === 13){
            let promptIndex = this.state.promptIndex
            let inputValue = document.getElementById(`terminal-input-${promptIndex}`).value

            this.setState({
                promptIndex: promptIndex + 1
            })
            this._createAndInsertDiv(inputValue)
            document.getElementById(`terminal-input-${this.state.promptIndex}`).focus()
        }
    }

    _createAndInsertDiv = (inputValue='') => {
        let newDiv = document.createElement('div')

        let inputElement = document.createElement('input')
        inputElement.type = "text"
        inputElement.className = terminalStyles.terminalInput
        inputElement.id = `terminal-input-${this.state.promptIndex}`

        if(inputValue.includes('ls projects')){

            if(!this.state.allProjectsAppended){
                this._appendDiv(terminalStyles.allProjects, newDiv)
                this.setState({
                    allProjectsAppended: true
                })
            } else {
                var clone = document.getElementById(terminalStyles.allProjects).cloneNode(true)
                newDiv.appendChild(clone)
            }

        } else if(inputValue.includes('cd')){

            //get the input value excluding 'cd '
            let projectName = inputValue.substring(3)
            if(Object.keys(this.state.projectIds).includes(projectName)){
                this.setState({
                    projectId: this.state.projectIds[projectName]
                })
            }

            this._appendDiv(terminalStyles.singleProject, newDiv)
        }

        newDiv.appendChild(inputElement)

        let terminal = document.getElementById(terminalStyles.terminal)
        terminal.appendChild(newDiv)
    }

    _appendDiv = (childDiv, parentDiv) => {
        let childDivElement = document.getElementById(childDiv)
        parentDiv.appendChild(childDivElement)
        childDivElement.style.display = 'block'
    }

    render(){

        const commandList = <ul>
            <li>Type <code>ls projects</code> to view all projects</li>
            <li>Type <code>cd project_name</code> to learn more about a project e.g <code>cd games</code></li>
            <li>Type <code>exit</code> to exit the terminal</li>
            <li>Type <code>help</code> to bring up this list of commands again</li>
            <li>Press <code>Enter</code> or <code>Return</code> after typing each command</li>
        </ul>

        return (

            <div className={terminalStyles.terminal} id={terminalStyles.terminal}>

                <p>Welcome to Uzoma's terminal</p>
                <p>These are the commands you can use:</p>

                {commandList}

                <div id={terminalStyles.allProjects}>
                    <Projects className={terminalStyles.terminalProject} imgHeight="150px" />
                </div>

                <div id={terminalStyles.singleProject}>
                    <TechProject projectId={this.state.projectId} isTerminal={true} />
                </div>
                
            </div>
        )
    }
}
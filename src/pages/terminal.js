import React from 'react'
import { navigate } from 'gatsby'

import terminalStyles from '../styles/terminal.module.css'

import Projects from '../components/projects'
import TechProject from '../components/tech-project'
import SEO from '../components/seo'

export default class Terminal extends React.Component {

    state = {
        promptIndex: 0,
        projectId: 1,
        allProjectsAppended: false,
        singleProjectAppended: false,
        projImgHeight: '150px',
        projectIds: {
            'moneybrain': 0,
            'ubuuru': 1,
            'concert': 2,
            'games': 3,
            'books': 4
        }
        //TODO: ASSIGN THIS PROGRAMMATICALLY
    }

    componentDidMount(){
        this._createAndInsertDiv()
        if(typeof window !== `undefined`){
            window.addEventListener('keypress', this.onKeyPress)
            document.body.style.background = '#1e272e'
            document.getElementById(`terminal-input-${this.state.promptIndex}`).focus()

            if(window.innerWidth < 900){
                this.setState({
                    projImgHeight: '75px'
                })
            }
        }
    }

    componentWillUnmount(){
        if(typeof window !== `undefined`){
            window.removeEventListener('keypress', this.onKeyPress)
            document.body.style.background = '#f7f1e3'
        }
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
                let clone = document.getElementById(terminalStyles.allProjects).cloneNode(true)
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
        } else if(inputValue.includes('help')){

            //get the list of commands (commandList) and append to the new div
            let clone = document.getElementsByTagName('ul')[0].cloneNode(true)
            newDiv.appendChild(clone)
        } else if(inputValue.includes('exit')){
            navigate('/tech')
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
            <li>> type <code>ls projects</code> to view all projects</li>
            <li>> type <code>cd project_name</code> to learn more about a project e.g <code>cd games</code></li>
            <li>> type <code>exit</code> to exit the terminal (goes to non-interactive tech portfolio)</li>
            <li>> type <code>help</code> to bring up this list of commands again</li>
            <br></br>
            <li>> press <code>Enter</code> or <code>Return</code> after typing each command</li>
        </ul>

        return (
            
            
            <div className={terminalStyles.terminal} id={terminalStyles.terminal}>
                <SEO />

                <p>***** uzoma's terminal *****</p>
                <p>these are the commands you can use:</p>

                {commandList}

                <div id={terminalStyles.allProjects}>
                    <Projects className={terminalStyles.allTerminalProjects} isLightTheme={false} imgHeight={this.state.projImgHeight} isTerminal={true} />
                </div>

                <div id={terminalStyles.singleProject}>
                    <TechProject projectId={this.state.projectId} isTerminal={true} />
                </div>
                
            </div>
        )
    }
}
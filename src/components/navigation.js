import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'gatsby'

import navigationStyles from '../styles/navigation.module.css'

export default class Navigation extends React.Component {

    state = {
        isOpen: false
    }

    toggleState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){

        const iconStyles = {width: '40px', height: '40px'}

        const locationPathname = typeof window !== undefined ? window.location.pathname : ''

        return (
            <React.Fragment>
                {!this.state.isOpen ? 
                    <span className={navigationStyles.navigationMenuBtn}>
                            <FaBars style={iconStyles} onClick={() => this.toggleState()} />
                    </span>
                    :
                    <div className={navigationStyles.navigationMenu}>
                        <span className={navigationStyles.navigationCloseBtn}>
                            <FaTimes style={iconStyles} onClick={() => this.toggleState()} /> 
                        </span>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Selection Page
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            {
                                locationPathname === '/visuals' ?
                                    <li>
                                        <Link to='/tech'>
                                            Tech
                                        </Link>
                                    </li>
                                    :
                                    <li>
                                        <Link to='/visuals'>
                                            Visuals
                                        </Link>
                                    </li>
                            }
                            <li>
                                <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                                    Email Me
                                </a>
                            </li>
                            <li>
                            <a href="http://instagram.com/uzomaorji_" target="_blank" rel="noopener noreferrer">
                                Instagram
                                </a> 
                            </li>
                        </ul>
                    </div>
                }
            </React.Fragment>
        )
    }
}
import React from 'react'
import { FaBars, FaTimes, FaRegEnvelope, FaInstagram } from 'react-icons/fa'

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

        const locationPathname = typeof window !== `undefined` ? window.location.pathname : ''

        const navigationMenu = <ul>
            <li><Link to='/about'>About</Link>
            </li>
            {
                locationPathname === '/visuals' ?
                    <li><Link to='/tech'>Tech</Link>
                    </li>
                    :
                    <li><Link to='/visuals'>Visuals</Link>
                    </li>
            }
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/mailing">Join mailing list</Link></li>
            
            <span className={navigationStyles.communicationLinks}>
                <li>
                    <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaRegEnvelope />
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com/uzomaorji_" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </span>
        </ul>

        return (
            <React.Fragment>
                { typeof window !== `undefined` && window.innerWidth < 900 ?
                    <React.Fragment>
                        { !this.state.isOpen ? 
                            <span className={navigationStyles.navigationMenuBtn}>
                                <FaBars style={iconStyles} onClick={() => this.toggleState()} />
                            </span>
                            :
                            <div className={navigationStyles.navigationMenu}>
                                <span className={navigationStyles.navigationCloseBtn}>
                                    <FaTimes style={iconStyles} onClick={() => this.toggleState()} /> 
                                </span>
                                
                                {navigationMenu}

                            </div>
                        }
                    </React.Fragment>
                    :
                    <div className={navigationStyles.navigationMenuDesktop}>
                        {navigationMenu}
                    </div>
                }
            </React.Fragment>
        )
    }
}
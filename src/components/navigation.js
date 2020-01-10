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
            <Link to='/about'><li>About</li></Link>
            {
                locationPathname === '/visuals' ?
                    <Link to='/tech'>
                        <li>Tech</li>
                    </Link>
                    :
                    <Link to='/visuals'>
                        <li>Visuals</li>
                    </Link>
            }
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/mailing"><li>Join Mailing List</li></Link>
            
            <span className={navigationStyles.communicationLinks}>
                <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li><FaRegEnvelope /></li>
                </a>
                <a href="http://instagram.com/uzomaorji_" target="_blank" rel="noopener noreferrer">
                    <li><FaInstagram /></li>
                </a>
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
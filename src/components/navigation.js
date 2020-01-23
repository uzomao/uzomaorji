import React from 'react'
import { FaBars, FaTimes, FaRegEnvelope, FaInstagram } from 'react-icons/fa'

import { Link } from 'gatsby'

import navigationStyles from '../styles/navigation.module.css'

import JoinMailingList from './join-mailing-list'

export default class Navigation extends React.Component {

    state = {
        isOpen: false,
        isMailingList: false
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    closeMailingListModal = () => {
        this.setState({
            isMailingList: false
        })
    }

    render(){

        const iconStyles = {width: '40px', height: '40px'}

        const navigationMenu = <ul>
            <Link to='/about' activeClassName={navigationStyles.active}><li>About</li></Link>

            <Link to='/visuals' activeClassName={navigationStyles.active}><li>Visuals</li></Link>
            
            <Link to='/tech' activeClassName={navigationStyles.active}><li>Tech</li></Link>

            {/* <Link to="/blog" activeClassName={navigationStyles.active}><li>Blog</li></Link> */}

            <li onClick={() => {this.setState({ isMailingList: true})}}
            className={navigationStyles.mailingList}
            >
                Join Mailing List
            </li>
            
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
                                <FaBars style={iconStyles} onClick={() => this.toggleIsOpen()} />
                            </span>
                            :
                            <div className={navigationStyles.navigationMenu}>
                                <span className={navigationStyles.navigationCloseBtn}>
                                    <FaTimes style={iconStyles} onClick={() => this.toggleIsOpen()} /> 
                                </span>
                                
                                {navigationMenu}

                            </div>
                        }
                    </React.Fragment>
                    :
                    <div className={navigationStyles.navigationMenuDesktop}>
                        {navigationMenu}

                        {
                            this.state.isMailingList &&
                                <JoinMailingList closeModal={this.closeMailingListModal} />
                        }
                    </div>
                }
            </React.Fragment>
        )
    }
}
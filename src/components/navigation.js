import React from 'react'
import { FaBars, FaTimes, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'

import { Link } from 'gatsby'

import navigationStyles from '../styles/navigation.module.css'

import JoinMailingList from './join-mailing-list'

import Ticker from './ticker'

import Context from '../../context'

export default class Navigation extends React.Component {

    state = {
        isOpen: false,
        isMailingList: false,
        showTicker: true
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

    openMailingListModal = () => {
        this.setState({
            isMailingList: true
        })
    }

    hideTicker = () => {
        this.setState({
            showTicker: false
        })
    }

    static contextType = Context

    render(){

        const { isDesktop, isPortrait } = this.context

        const iconStyles = {width: '40px', height: '40px'}

        const navigationMenu = <ul>
            <Link to='/about' activeClassName={navigationStyles.active}><li>About</li></Link>

            <Link to='/visuals' activeClassName={navigationStyles.active}><li>Visuals</li></Link>
            
            {
                !isDesktop && !isPortrait ?
                    <Link to='/terminal' activeClassName={navigationStyles.active}><li>Terminal</li></Link>
                    :
                    <Link to='/tech' activeClassName={navigationStyles.active}><li>Tech</li></Link>
            }

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
                <a href="https://www.are.na/chidumaga-uzoma-orji" target="_blank" rel="noopener noreferrer" style={{fontSize: '18px'}}>
                    <li><FaStarOfLife /><FaStarOfLife /></li>
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
                        {
                            this.state.showTicker &&
                                <Ticker 
                                    tickerText={'Become a loving friend today, click here to subscribe to my mailing list for juicy creative updates'} 
                                    openMailingListModal={this.openMailingListModal}
                                    isMailingList={this.state.isMailingList}
                                    hideTicker={this.hideTicker}
                                />
                        }
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
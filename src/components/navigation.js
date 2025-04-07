import React from 'react'
import { FaBars, FaTimes, FaRegEnvelope, FaStarOfLife, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa'

import { Link } from 'gatsby'

import navigationStyles from '../styles/navigation.module.css'

import JoinMailingList from './join-mailing-list'

import Ticker from './ticker'

import Context from '../../context'

export default class Navigation extends React.Component {

    state = {
        isOpen: false,
        isMailingList: false,
        showTicker: true,
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
        
        const currentPathname = typeof(window) !== `undefined` ? window.location.pathname : ''
        // Only show the portfolio sub-menu after the visitor has engaged with the portfolio selection page
        const visitorHasSelectedPortfolio = typeof(sessionStorage) !== `undefined` ? 
                                        sessionStorage.getItem('hasVisitorSelectedPortfolio') :
                                        false

        const setPortfolioLinksClassName = () => {
            if(currentPathname.includes('/portfolio')){
                return navigationStyles.displayPortfolioLinks
            } else if(visitorHasSelectedPortfolio){
                return navigationStyles.enableHoverEffect
            } else {
                return ''
            }
        }

        const { isDesktop, isPortrait } = this.context

        const iconStyles = {width: '40px', height: '40px'}

        const navigationMenu = <ul>
            <li>
                <Link to='/about' activeClassName={navigationStyles.active}>
                    About
                </Link>
            </li>

            <li id={navigationStyles.portfolio}>
                <Link to='/portfolio' 
                    activeClassName={navigationStyles.active}
                >
                    Portfolio
                </Link>
                <ul className={setPortfolioLinksClassName()}>
                    <li>
                        <Link to='/portfolio/visuals' activeClassName={navigationStyles.active}>
                            Visual
                        </Link>
                    </li>
                    <li>
                        <Link to='/portfolio/tech' activeClassName={navigationStyles.active}>
                            Tech
                        </Link>
                    </li>  
                </ul>
                {/* {
                    currentPathname.includes('portfolio') &&
                        <ul>
                            <li>
                                <Link to='/portfolio/visuals' activeClassName={navigationStyles.active}><li>Visual</li></Link>
                                <Link to='/portfolio/tech' activeClassName={navigationStyles.active}><li>Tech</li></Link>
                            </li>
                        </ul>
                } */}
            </li>

            {/* <Link to="/blog" activeClassName={navigationStyles.active}><li>Blog</li></Link> */}

            <li onClick={() => {this.setState({ isMailingList: true})}}
                className={navigationStyles.mailingList}
            >
                Subscribe
            </li>

            <li><a href='https://uzomas.garden' target='_blank' rel='noopener noreferrer'><span role="img" aria-label='sunflower emoji'>🌻</span> Garden <span role="img" aria-label='sunflower emoji'>🌻</span></a></li>
            
            <span className={navigationStyles.communicationLinks}>
                <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li><FaRegEnvelope /></li>
                </a>
                <a href="https://instagram.com/uzzzoma" target="_blank" rel="noopener noreferrer">
                    <li><FaInstagram /></li>
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
import React from 'react'
import Img from 'gatsby-image'

import { Link } from 'gatsby'

import browserStyles from '../styles/browser.module.css'

const Browser = ( { projectImage, projectAlt, isLightTheme, includeOverlay, projectSlug, 
    currentProjectIndex, isTerminal, showInBrowser } ) => {

    const themeClass = isLightTheme ? browserStyles.lightTheme : browserStyles.darkTheme
    const headerWidth = isTerminal ? {width: '100%'} : {width: '40%'}

    const isBrowserDisplay = showInBrowser !== false
    // I'm using the browser with some modifications to display non-browser based projects

    return (
        <div className={`${browserStyles.browser} ${themeClass}`}>
            <div className={browserStyles.browserHeader}>
                {
                    isBrowserDisplay &&
                        <ul className={browserStyles.ui} style={headerWidth}>
                            <li className={browserStyles.close}></li>
                            <li className={browserStyles.min}></li>
                            <li className={browserStyles.max}></li>
                        </ul>
                }
            </div>
            <div className={browserStyles.browserWindow}>
                <Img fluid={projectImage} alt={projectAlt} 
                    className={!isBrowserDisplay ? `${browserStyles.projectImage} ${browserStyles.projectImageNoBrowser}` 
                                                        : browserStyles.projectImage}
                />
                {
                    includeOverlay &&
                        <Link to={`/tech/${projectSlug}`} state={{currentProjectIndex: currentProjectIndex}}>
                            <div className={!isBrowserDisplay ? `${browserStyles.overlay} ${browserStyles.overlayNoBrowser}` 
                                                            : browserStyles.overlay}>
                                <p className={browserStyles.overlayText}>SEE PROJECT</p>
                            </div>
                        </Link>
                    }
            </div>
        </div>
    )
}

export default Browser
import React from 'react'
// import Img from 'gatsby-image'

import browserStyles from '../styles/browser.module.css'

const Browser = ( { projectImage, projectAlt, isLightTheme, height, isTerminal } ) => {

    const themeClass = isLightTheme ? browserStyles.lightTheme : browserStyles.darkTheme
    const headerWidth = isTerminal ? {width: '100%'} : {width: '40%'}

    return (
        <div className={`${browserStyles.browser} ${themeClass}`}>
            <div className={browserStyles.browserHeader}>
                <ul className={browserStyles.ui} style={headerWidth}>
                    <li className={browserStyles.close}></li>
                    <li className={browserStyles.min}></li>
                    <li className={browserStyles.max}></li>
                </ul>
            </div>
            <div className={browserStyles.browserWindow} style={{height: height}}>
                <img src={projectImage} alt={projectAlt} className={browserStyles.projectImage} style={{height: height}} />
            </div>
        </div>
    )
}

export default Browser
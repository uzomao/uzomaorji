import React from 'react'
// import Img from 'gatsby-image'

import browserStyles from '../styles/browser.module.css'

const Browser = ( { projectImage, projectAlt, isLightTheme, height } ) => {

    const themeClass = isLightTheme ? browserStyles.lightTheme : browserStyles.darkTheme
    console.log(projectImage)

    return (
        <div className={`${browserStyles.browser} ${themeClass}`}>
            <div className={browserStyles.browserHeader}>
                <ul className={browserStyles.ui}>
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
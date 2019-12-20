import React from 'react'

import Layout from '../components/layout'

import visualStyles from '../styles/visuals.module.css'

//using the same style format as the tech page. could have made
//a component that both stages can borrow from but welppp

const Visuals = () => {

    return (

        <Layout>
            <div>

                <div className={visualStyles.slides}>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnHDJp7TQkqzW79p5d4g_sRAmoEOlkjk4ygyE5AveRc3N6qaqkmL95gCtR4vGQU2Nb9VhhNKKs0IFv/embed?start=false&loop=false&delayms=3000" 
                    frameBorder="0" 
                    width="960" 
                    height="569" 
                    allowFullScreen={true} 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true">
                    </iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Visuals
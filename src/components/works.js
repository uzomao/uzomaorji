import React from 'react'

import Img from 'gatsby-image'

import workStyles from '../styles/work.module.css'

const Works = ( { works } ) => {

    return (
        <ul className={workStyles.works}>
            {
                works.map((work, index) => 
                    <li key={index}>
                        <Img fluid={work.images[0].fluid} alt='Uzoma Orji visual' />
                        <p>{work.title}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default Works
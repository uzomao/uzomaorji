import React from 'react'

import workStyles from '../styles/work.module.css'

const Works = ( { works } ) => {

    return (
        <ul className={workStyles.works}>
            {
                works.map((work, index) => 
                    <li key={index}>
                        <img src={work.images[0].fluid.src} alt='Uzoma Orji visual' />
                        <p>{work.title}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default Works
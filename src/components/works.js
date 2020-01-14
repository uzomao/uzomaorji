import React from 'react'
import { Link } from 'gatsby'

import Img from 'gatsby-image'

import workStyles from '../styles/work.module.css'

const Works = ( { works } ) => {

    return (
        <ul className={workStyles.works}>
            {
                works.map((work, index) => 
                    <Link key={index} to={`/visuals/${work.slug}`}>
                        <li>
                            <Img fluid={work.images[0].fluid} alt='Uzoma Orji visual' />
                            <p>{work.title}</p>
                        </li>
                    </Link>
                )
            }
        </ul>
    )
}

export default Works
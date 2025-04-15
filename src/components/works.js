import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Img from 'gatsby-image'

import workStyles from '../styles/work.module.css'

const Works = ( { works } ) => {

    const [width, setWidth] = useState('')
    const maxWorkLength = 3

    useEffect (() => {
        if(typeof window !== `undefined` && window.innerWidth >= 768) {
            works.length > maxWorkLength && setWidth('175px')
        } else {
            works.length > maxWorkLength && setWidth('350px')
        }
    }, [works.length])

    return (
        <ul className={workStyles.works}>
            {
                works.map((work, index) => 
                    <Link key={index} to={`/portfolio/visuals/${work.slug}`}>
                        <li style={{width: width}}>
                            <Img fluid={work.images[0].fluid} alt='Chidumaga Uzoma Orji visual' />
                        </li>
                        <p className={workStyles.workTitle}>{work.title}</p>
                    </Link>
                )
            }
        </ul>
    )
}

export default Works
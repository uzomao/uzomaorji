import React from 'react'
import { Link } from 'gatsby'

import mirror1 from '../images/mirror1.png';
import mirror2 from '../images/mirror2.png';
import mirror3 from '../images/mirror3.png';
import mirror4 from '../images/mirror4.png';

import Header from '../header/header'

import '../tech/tech.css'
//using the same style format as the tech page. could have made
//a component that both stages can borrow from but welppp

const Visuals = () => {

    const mirrors = [
        {name: 'self-reflection', image: mirror1, category: 'self'},
        {name: 'cultural reflection', image: mirror2, category: 'culture'},
        {name: 'reflection on nationhood', image: mirror3, category: 'nation'},
        {name: 'reflecting on what could be', image: mirror4, category: 'future'}
    ]
        
    const mirrorProjects = mirrors.map((mirror, index) => 
        <Link to={{
            pathname: `/visuals/${mirror.category}`,
            state: {categoryName: mirror.category} 
            }}
        key={index} className="project-link">
            <li style={{margin: 'unset', maxWidth: '100%'}}>
                <article>
                    <img src={mirror.image} alt="Uzoma visual portfolio" className='project-image' />
                    <p>{mirror.name}</p>
                </article>
            </li>
        </Link>
    )

    return (
        <React.Fragment>
            <Header title="Uzoma's Hall of Mirrors" />
            
            <div className="tech-projects">
                <ul className="projects">
                    {mirrorProjects}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Visuals
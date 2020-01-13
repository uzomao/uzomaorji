import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import background from '../images/visuals-bg.jpg'

import visualStyles from '../styles/visuals.module.css'

const Visuals = () => {

    const filterByYear = 'year'
    const filterByTheme = 'theme'
    const [ filterBy, setFilterBy] = useState(filterByYear)

    const data = useStaticQuery(graphql`
        query {
            allContentfulVisual {
                nodes {
                    year
                    category
                }
            }
        }
    `)

    const years = []
    const themes = []

    data.allContentfulVisual.nodes.forEach(node => {
        if(!years.includes(node.year)){
            years.push(node.year)
        }
        if(!themes.includes(node.category)){
            themes.push(node.category)
        }
    })

    const yearsList = years.sort().map((year, index) => 
        <li key={index}>
            {year}
        </li>
    )

    const themesList = themes.sort().map((theme, index) => 
        <li key={index}>
            {theme}
        </li>
    )

    const getActiveClass = (filterCriteria) => {
        return filterBy === filterCriteria ? visualStyles.active : '' 
    }

    return (

        <Layout noFooter="true">
            <div>

                <p className={visualStyles.backdropText}>
                    Filter By: 
                    <span onClick={() => setFilterBy(filterByYear)} className={`${visualStyles.filter} ${getActiveClass(filterByYear)}`}>Year</span>
                    |
                    <span onClick={() => setFilterBy(filterByTheme)} className={`${visualStyles.filter} ${getActiveClass(filterByTheme)}`}>Theme</span>
                </p>

                <img src={background} className={visualStyles.backdrop} alt="Gallery backdrop" />

                <ul className={visualStyles.workList}>
                    {
                        filterBy === filterByYear ?
                            yearsList
                        :
                            <React.Fragment>
                                <p style={{marginBottom: '.5em'}}>Reflections on:</p>
                                {themesList}
                            </React.Fragment>
                    }
                </ul>

            </div>
        </Layout>
    )
}

export default Visuals

/**
 * query {
  allContentfulVisual (filter:{
    year :{
      eq : "2019"
    } 
  }){
    nodes {
      title
    }
  }
}
 */
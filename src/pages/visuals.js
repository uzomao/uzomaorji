import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Works from '../components/works'

import background from '../images/visuals-bg.jpg'

import visualStyles from '../styles/visuals.module.css'

const Visuals = () => {

    const filterByYear = 'year'
    const filterByTheme = 'theme'

    const [ filterBy, setFilterBy] = useState(filterByYear)
    const [isOptionClicked, setOptionClicked] = useState(false)
    const [filterValue, setFilterValue] = useState('')

    const data = useStaticQuery(graphql`
        query {
            allContentfulVisual {
                nodes {
                    year
                    category
                    title
                    text {
                        text
                    }
                    images {
                        fluid (maxWidth: 500, maxHeight: 350, resizingBehavior: FILL) {
                            ...GatsbyContentfulFluid
                        }
                    }
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
        <li key={index} onClick={() => {
            setOptionClicked(true)
            setFilterValue(year)
        }}>
            {year}
        </li>
    )

    const themesList = themes.sort().map((theme, index) => 
        <li key={index} onClick={() => {
            setOptionClicked(true)
            setFilterValue(theme)
        }}>
            {theme}
        </li>
    )

    const getActiveClass = (filterCriteria) => {
        return filterBy === filterCriteria ? visualStyles.active : '' 
    }

    const works = filterBy === filterByYear ? 
        data.allContentfulVisual.nodes.filter(node => node.year === filterValue) 
        : 
        data.allContentfulVisual.nodes.filter(node => node.category === filterValue)

    return (

        <Layout noFooter="true">
            <div>

                <img src={background} className={visualStyles.backdrop} alt="Gallery backdrop" />

                {
                    !isOptionClicked ? 
                        <div>
                            <p className={visualStyles.backdropText}>
                                Filter By: 
                                <span onClick={() => setFilterBy(filterByYear)} className={`${visualStyles.filter} ${getActiveClass(filterByYear)}`}>Year</span>
                                |
                                <span onClick={() => setFilterBy(filterByTheme)} className={`${visualStyles.filter} ${getActiveClass(filterByTheme)}`}>Theme</span>
                            </p>

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
                        :
                        <div>
                            <div className={visualStyles.worksHeader}>
                                <p>
                                    <span
                                    className={visualStyles.backToGalleryMenu} 
                                    onClick={() => setOptionClicked(false)}>
                                        Back to Gallery Menu
                                    </span>
                                    {filterBy}: {filterValue}
                                </p>

                                <p>
                                    
                                </p>
                            </div>

                            <Works works={works} />
                        </div>
                }

            </div>
        </Layout>
    )
}

export default Visuals
import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../../components/layout'
import Works from '../../../components/works'
import RotateNotice from '../../../components/rotate-notice'

import Context from '../../../../context'

import background from '../../../images/visuals-bg-3.jpg'

import visualStyles from '../../../styles/visuals.module.css'

const Visuals = () => {

    const filterByYear = 'year'
    const filterByTheme = 'theme'

    const { data, set, isDesktop, isPortrait } = useContext(Context)
    const { filterBy, isOptionClicked, filterValue } = data
    
    const query = useStaticQuery(graphql`
        query {
            allContentfulVisual {
                nodes {
                    year
                    category
                    title
                    slug
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

    query.allContentfulVisual.nodes.forEach(node => {
        if(!years.includes(node.year)){
            years.push(node.year)
        }
        if(!themes.includes(node.category)){
            themes.push(node.category)
        }
    })

    const yearsList = years.sort().map((year, index) => 
        <li key={index} onClick={() => set({ isOptionClicked: true, filterValue: year})}>
            {year}
        </li>
    )

    const themesList = themes.sort().map((theme, index) => 
        <li key={index} onClick={() => set({ isOptionClicked: true, filterValue: theme})}>
            {theme}
        </li>
    )

    const getActiveClass = (filterCriteria) => {
        return filterBy === filterCriteria ? visualStyles.active : '' 
    }

    const works = filterBy === filterByYear ? 
        query.allContentfulVisual.nodes.filter(node => node.year === filterValue) 
        : 
        query.allContentfulVisual.nodes.filter(node => node.category === filterValue)

        console.log(isOptionClicked);
        
    
    return (
        <Layout noFooter="true">
            {
                !isDesktop && !isPortrait ?
                    <RotateNotice />
                    :
                    <div>
                        <img src={background} className={`${visualStyles.backdrop} ${isOptionClicked ? visualStyles.hideBackdropOnMobile : visualStyles.showBackdropOnMobile}` } alt="Gallery backdrop" />
                        {
                            !isOptionClicked ? 
                                <div>
                                    <p className={visualStyles.backdropText}>
                                        Filter By: 
                                        <span onClick={() => { set({filterBy: filterByYear})}} className={`${visualStyles.filter} ${getActiveClass(filterByYear)}`}>Year</span>
                                        |
                                        <span onClick={() => set({filterBy: filterByTheme})} className={`${visualStyles.filter} ${getActiveClass(filterByTheme)}`}>Theme</span>
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
                                            <button
                                            onClick={() => set({isOptionClicked: false})}
                                            >
                                                <span role="img" aria-label="go back emoji">👈🏾</span>
                                                {` `}
                                                Back
                                            </button>
                                            <span>{`${filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}: ${filterValue}`}</span>
                                        </p>

                                        <p>

                                        </p>
                                    </div>

                                    <Works works={works} />
                                </div>
                        }
                    </div>
            }
        </Layout>
    )
}

export default Visuals
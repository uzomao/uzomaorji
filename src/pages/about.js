import React, { useState } from 'react'

import aboutStyles from '../styles/about.module.css'

import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

import { FaExternalLinkAlt } from 'react-icons/fa'

import artTech from '../images/art_tech.png'

const About = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulExhibition(sort: {
                fields: date
                order: DESC
              }) {
                nodes {
                    name
                    url
                    date(formatString:"YYYY")
                    workExhibited
                }
            }

            allContentfulResidenciesAndFellowships{
                nodes {
                    title
                    project
                    startDate(formatString:"MMMM YYYY")
                    endDate(formatString:"MMMM YYYY")
                    url
                }
            }

            allContentfulPress{
                nodes {
                    publicationTitle
                    articleTitle
                    url
                }
            }
            
            allContentfulAboutPage{
                nodes {
                    seriousVersion {
                        seriousVersion
                    }
                    partyVersion {
                        partyVersion
                    }
                    seeMore {
                        seeMore
                    }
                }
            }
        }
    `)

    const [ isPartyVersion, setIsPartyVersion ] = useState(false)

    const toggleText = isPartyVersion ?  'see the version i submit in applications' : 'see the version I say at parties'

    const exhibitions = data.allContentfulExhibition.nodes
    const residenciesAndFellowships = data.allContentfulResidenciesAndFellowships.nodes
    const press = data.allContentfulPress.nodes

    const aboutPage = data.allContentfulAboutPage.nodes[0]

    const [ seeMore, setSeeMore ] = useState(false)

    return (
        <Layout>
            <main>

                <section className={aboutStyles.aboutSection}>

                    <div className={aboutStyles.aboutText}>

                        <div className={aboutStyles.formCircles}>
                            <img src={artTech} className={aboutStyles.formCircle} alt="uzoma logo, illustrated image of uzoma wearing goggles with cherry blossoms and stars on them" />
                        </div>
                        
                        <div dangerouslySetInnerHTML={{__html: isPartyVersion ? aboutPage.partyVersion.partyVersion : aboutPage.seriousVersion.seriousVersion}} className={aboutStyles.leftAdjustSection} />

                        { 
                            !isPartyVersion && !seeMore &&
                                <p onClick={() => setSeeMore(true)} className={`${aboutStyles.leftAdjust} ${aboutStyles.seeMoreToggle}`}>Read More...</p>
                        }

                        { seeMore && 
                            <>
                                <div dangerouslySetInnerHTML={{__html: aboutPage.seeMore.seeMore}} className={aboutStyles.leftAdjustSection} />
                                <p onClick={() => setSeeMore(false)} className={`${aboutStyles.leftAdjust} ${aboutStyles.seeMoreToggle}`}>Read Less...</p>
                            </>
                        }

                        <button onClick={() => setIsPartyVersion(!isPartyVersion)} className={aboutStyles.toggleBtn}>
                            { toggleText }
                        </button>
                        
                    </div>
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Exhibitions</h2>

                    {
                        exhibitions.map(({name, date, url, workExhibited}, index) => 
                            <p key={index}>
                                {date}
                                <span> - </span>
                                {name}
                                <br></br>
                                <span className={aboutStyles.exhibitionDescription}>
                                    <a href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {workExhibited}{` `}<FaExternalLinkAlt className='external-link-icon' />
                                    </a>
                                </span>
                            </p>
                        )

                    }
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Residencies and Fellowships</h2>

                    {/* automate the following: */}
                    {
                        residenciesAndFellowships.map(({title, startDate, endDate, url, project}, index) => 
                            <p key={index}>
                                <span style={
                                    {textTransform: 'uppercase', color: '#333', fontSize: '18px'}
                                }>
                                    {startDate} - {endDate}
                                </span>
                                <br></br>
                                {title}
                                <br></br>
                                <span className={aboutStyles.exhibitionDescription}>
                                    <a href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project}{` `}<FaExternalLinkAlt className='external-link-icon' />
                                    </a>
                                </span>
                            </p>
                        )

                    }
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Speaking Engagements & Press</h2>

                    {
                        press.map(({publicationTitle, articleTitle, url}, index) => 
                            <p key={index}>
                                {publicationTitle}
                                <span> - </span>
                                <a href={url}>
                                    {articleTitle} <FaExternalLinkAlt className='external-link-icon' />
                                </a>
                            </p>
                        )
                    }
                </section>
                <section className={aboutStyles.aboutText}>
                    <h2>Skills and Interests</h2>
                    
                    <p>
                        🤔 Creative Strategy ~ 🎨 Interaction Design ~ 👨🏾‍💻 Web Development
                        ~ 👨🏾‍💻 Web Design ~ 🎨 UI/UX Design ~ 🗣️ Public Speaking ~ 👾 Digital Marketing
                    </p>

                </section>

                <section className={aboutStyles.aboutText} style={{marginBottom: '3em'}}>
                    <p>
                        <a href="https://uzomas.garden" target="_blank" rel="noopener noreferrer">
                            Garden 🌻
                        </a>
                        <span>, </span>
                        <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email
                        </a>
                        <span>, </span>
                        <a href="https://linkedin.com/in/uzomacorji" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <span>, </span>
                        <a href="https://www.instagram.com/uzzzoma" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <span>, </span>
                        <a href="https://thegardendispatch.substack.com" target="_blank" rel="noopener noreferrer">
                            Substack
                        </a>
                        <span>, </span>
                        <a href="https://www.are.na/chidumaga-uzoma-orji" target="_blank" rel="noopener noreferrer">
                            Are.na
                        </a>
                    </p>
                </section>

            </main>
        </Layout>
    )
}

export default About
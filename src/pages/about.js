import React, { useState } from 'react'

import aboutStyles from '../styles/about.module.css'

import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

import { FaExternalLinkAlt } from 'react-icons/fa'

const About = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulExhibition(sort: {
                fields: date
                order: ASC
              }) {
                nodes {
                    name
                    url
                    date(formatString:"YYYY")
                    workExhibited
                }
            }
        }
    `)

    const [ isPartyVersion, setIsPartyVersion ] = useState(false)

    const toggleText = isPartyVersion ?  'see the version i submit in applications' : 'see the version I say at parties'

    const exhibitions = data.allContentfulExhibition.nodes

    return (
        <Layout>
            <main>

                <section className={aboutStyles.aboutSection}>

                    <div className={aboutStyles.aboutText}>

                        <div className={aboutStyles.formCircles}>
                            <div className={aboutStyles.formCircle} style={{background: '#87c1e9'}}></div>
                            <div className={aboutStyles.formCircle} style={{background: '#ffcccc'}}></div>
                        </div>

                        {
                            !isPartyVersion ?
                                <>
                                    <p>
                                        Uzoma Chidumaga Orji is a creative technologist and visual artist from Owerri, Nigeria.
                                    </p>
                                    <p>
                                        As an artist he observes and then creates representations of society and of history; 
                                        visual metaphors that unpack his millennial Igbo Nigerian cultural context and 
                                        explore post-colonial crises of identity.
                                    </p>
                                    <p>
                                        As a technologist he is interested in how the digital can be used to access 
                                        ancestral truths in the present day.
                                    </p>
                                    <p>
                                        He lives, works and has his being in Abuja, Nigeria.
                                    </p>
                                </>
                                :
                                <>
                                    <p>
                                        [someone i've just met]: <span className={aboutStyles.newFriend}>so what do you do?</span>
                                    </p>
                                    <p>
                                        [me]: *sips drink in panic* umm, i'm an artist
                                    </p>
                                    <p className={aboutStyles.newFriend}>
                                        what kind of artist?
                                    </p>
                                    <p>
                                        well I do like these conceptual photoshoots that explore themes i'm interested in. i also make websites
                                    </p>
                                    <p className={aboutStyles.newFriend}>
                                        oh for real?
                                    </p>
                                    <p>
                                        yeah. and apps and games. i'm very interested in interactive tech and design. like tech that's really fun and engaging.
                                    </p>
                                    <p className={aboutStyles.newFriend}>
                                        sounds cool man.
                                    </p>
                                    <p>
                                        yeah, it's fun. there's other stuff but, yeah. how about you?
                                    </p>
                                    <p className={aboutStyles.newFriend}>
                                        I'm a cancer researcher.
                                    </p>
                                    <p>
                                        <span role="img" aria-label="mindblown emoji">🤯</span>
                                    </p>
                                </>
                        }

                        <p>
                            <button onClick={() => setIsPartyVersion(!isPartyVersion)} className={aboutStyles.toggleBtn}>
                                { toggleText }
                            </button>
                        </p>
                    </div>
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Exhibitions</h2>

                    {/* automate the following: */}
                    {
                        exhibitions.map(({name, date, url, workExhibited}, index) => 
                            <p key={index}>
                                {date}
                                <span> - </span>
                                {name}
                                <br>
                                </br>
                                <span className={aboutStyles.exhibitionDescription}>
                                    {workExhibited}{` `}
                                    <a href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt className={aboutStyles.externalLinkIcon} />
                                    </a>
                                </span>
                            </p>
                        )

                    }
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Press</h2>

                    <p>
                        A'naala Blog
                        <span> - </span>
                        <a href="https://www.anaalablog.com/home/uzoma-orji-swimming-in-the-divide-pt-1">
                            Uzoma Orji: Swimming in the Divide (pt. 1)
                        </a>
                    </p>
                </section>

                <section className={aboutStyles.aboutText} style={{marginBottom: '3em'}}>
                    <p>
                        <a href="http://instagram.com/uzomaorji_" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <span>, </span>
                        <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email
                        </a>
                    </p>
                </section>

            </main>
        </Layout>
    )
}

export default About
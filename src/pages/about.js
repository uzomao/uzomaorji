import React, { useState } from 'react'

import aboutStyles from '../styles/about.module.css'

import Layout from '../components/layout'

const About = () => {

    const [ isPartyVersion, setIsPartyVersion ] = useState(false)

    const toggleText = isPartyVersion ?  'see the version i submit in applications' : 'see the version I say at parties'

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
                                        Uzoma Orji is a creative technologist and visual artist from Owerri, Nigeria.
                                    </p>
                                    <p>
                                        As a technologist he seeks to design engaging human-centred digital experiences that bring the arts and 
                                        tech into the same conversation.
                                    </p>
                                    <p>
                                        As an artist he observes and then creates representations of society and of history; visual metaphors that explain
                                        his millennial Igbo Nigerian cultural context and the cultural environment he hopes to one day live in.
                                    </p>

                                    <p>
                                        The essence of his practice is indeed identity, particularly as pertains to self, culture, and nationality. 
                                        His work uses his notions of his identity as a point of exit to interrogate who we are, 
                                        how we have come to be and who we aspire to become. 
                                    </p>

                                    <p>
                                        He lives and works in Abuja, Nigeria.
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
                    <p>
                        2018
                        <span> - </span>
                        <a href='https://opendialogueexhibition.com/Uzoma-Orji' 
                        target='_blank'
                        rel='noopener noreferrer' >
                            CSM Open Dialogue: Artists + Designers of Afro-Carribean Descent
                        </a>
                        <br>
                        </br>
                        <span className={aboutStyles.exhibitionDescription}>YOU ARE THE SOUL OF A NATION</span>
                    </p>
                    <p>
                        2019
                        <span> - </span>
                        <a href='https://www.lagosphotofestival.com/exhibit/the-baptism-of-an-igbo-man' 
                        target='_blank'
                        rel='noopener noreferrer'>
                            Lagos Photo Festival
                        </a>
                        <br>
                        </br>
                        <span className={aboutStyles.exhibitionDescription}>The Baptism of an Igbo Man</span>
                    </p>
                    <p>
                        2019
                        <span> - </span>
                        <a href='https://www.instagram.com/p/B44y4E_FFxx/' 
                        target='_blank'
                        rel='noopener noreferrer'>
                            Naija Tech Creatives/Abuja Art Week
                        </a>
                        <br>
                        </br>
                        <span className={aboutStyles.exhibitionDescription}>The Baptism of an Igbo Man Immersive VR Experience</span>
                    </p>
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
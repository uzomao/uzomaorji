import React from 'react'

import aboutStyles from '../styles/about.module.css'

import Layout from '../components/layout'

const About = () => {

    return (
        <Layout>
            <main>

                <section className={aboutStyles.aboutSection}>

                    <div className={aboutStyles.aboutText}>

                        <div className={aboutStyles.formCircles}>
                            <div className={aboutStyles.formCircle} style={{background: '#87c1e9'}}></div>
                            <div className={aboutStyles.formCircle} style={{background: '#ffcccc'}}></div>
                        </div>

                        <p>
                            Uzoma Orji is a creative technologist and visual artist from Owerri, Nigeria.
                        </p>
                        <p>
                            As a technologist he seeks to design engaging human-centred digital experiences that bring the arts and 
                            tech into the same conversation.
                        </p>
                        <p>
                            As an artist he observes and then creates representations of society and of history; visual metaphors that explain
                            his millenial Igbo Nigerian cultural context and the cultural environment he hopes to one day live in.
                        </p>

                        <p>
                            The essence of his practice is indeed identity, particularly as pertains to self, culture, and nationality. 
                            His work uses his notions of his identity as a point of exit to interrogate who we are, 
                            how we have come to be and who we aspire to become. 
                        </p>

                        <p>
                            He lives and works in Abuja, Nigeria.
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
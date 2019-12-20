import React from 'react'

import aboutStyles from '../styles/about.module.css'

import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <div>

                <section className={aboutStyles.aboutSection}>
                    <div className={aboutStyles.aboutText}>
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
                    </div>
                </section>

                <section className={aboutStyles.aboutText}>
                    <h2>Exhibitions</h2>

                    <p>2018 - CSM Open Dialogue: Artists + Designers of Afro-Carribean Descent</p>
                    <p>2019 - Lagos Photo Festival</p>
                    <p>2019 - Abuja Art Week</p>
                </section>

                <section className={aboutStyles.aboutText}>
                    <p>
                        <a href="mailto:chidumaga@gmail.com" target="_blank" rel="noopener noreferrer">
                            chidumaga@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="http://instagram.com/uzomaorji_" target="_blank" rel="noopener noreferrer">
                            @uzomaorji_
                        </a>
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default About
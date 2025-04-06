import React from 'react'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

import inhibitions from '../images/inhibitions3.jpg'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Index = () => {

    const marqueeText = 'Updates from the Uziverse'

    const data = useStaticQuery(graphql`
        query {
            allContentfulUpdate {
                nodes {
                    title
                    date
                    body {
                        raw
                    }
                    tag
                    slug
                    coverImage {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    `)

    const updates = data.allContentfulUpdate.nodes

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <img
                        src={inhibitions}
                        alt='Image of Uzoma walking to a trophy against a blue background, a hand reaches for him'
                        className={styles.banner}
                    />
                </div>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        <h2 className={`${styles.headerText} main-header-text`}>{marqueeText}</h2>
                        <h2 className={`${styles.headerText} main-header-text`}>{marqueeText}</h2>
                        <h2 className={`${styles.headerText} main-header-text`}>{marqueeText}</h2>
                        <h2 className={`${styles.headerText} main-header-text`}>{marqueeText}</h2>
                    </div>
                </div>
                <div className={styles.updates}>
                    {
                        updates &&
                            updates.map(({ slug, title, coverImage }) => 
                                <div key={slug} className={styles.update}>
                                    <Img fluid={coverImage.fluid} alt={`Image of ${title}`} />
                                    <p className={styles.updateTitle}>{title}</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Index
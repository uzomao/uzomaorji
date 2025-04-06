import Link from 'gatsby-link'
import React from 'react'
import Layout from '../components/layout'

import visualStyles from '../styles/visual.module.css'

import Img from 'gatsby-image'

import { FaExternalLinkAlt } from 'react-icons/fa'

export const data = graphql`
    query ($slug: String) {
        contentfulUpdate (slug: {
            eq: $slug
        }) {
            title
            date(formatString:"MMMM YYYY")
            body {
                raw
            }
            tag
            coverImage {
                fixed(width: 500, height: 500, quality: 90) {
                    ...GatsbyContentfulFixed
                }
            }
            link
        }
    }
`

const UpdateTemplate = (props) => {

    const {
        title,
        date,
        body,
        tag,
        coverImage,
        link
    } = props.data.contentfulUpdate

    const backBtn = <Link to='/'>
                        <button className="button">Back Home</button>
                    </Link>

    return (
        <Layout noHeader={true} noFooter={true}>
            <div className={`${visualStyles.visual} ${visualStyles.visualTech}`}>
                <header>
                    {backBtn}
                    <h2 style={{fontSize: '1.75rem'}}>{title}</h2>
                </header>

                <section className={`${visualStyles.images} ${visualStyles.fixedImage}`}>
                    <Img fixed={coverImage.fixed} alt={title} style={{borderRadius: '20px'}} />
                </section>

                <br />

                <section className={visualStyles.projectMeta}>
                    <div>
                        <p style={{textAlign: 'center', width: '100%'}}>{date}</p>
                    </div>

                    <div>
                        <p style={{textTransform: 'lowercase', width: '100%', textAlign: 'center',}}>
                            {
                                tag.map((tag, index) => <span key={index}>{`[${tag}]`}</span>)
                            }
                        </p>
                    </div>
                </section>

                {/* <section className={`${visualStyles.text} ${visualStyles.techText}`} id={visualStyles.text}>
                    <p dangerouslySetInnerHTML={{__html: detailedDescription.detailedDescription}}></p>
                </section> */}

                {
                    link &&
                        <p className={visualStyles.url}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {link.split('://')[1]} <FaExternalLinkAlt className="external-link-icon" />
                            </a>
                        </p>
                }
            </div>

        </Layout>
    )
}

export default UpdateTemplate
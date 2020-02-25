import React, { useEffect, useContext } from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/layout'

import visualStyles from '../styles/visual.module.css'

import Context from '../../context'

import Img from 'gatsby-image'

export const data = graphql`
    query ($slug: String) {
        contentfulVisual (slug: {
            eq: $slug
        }) {
            title
            text {
                text
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

const VisualTemplate = (props) => {

    const {title, text, images} = props.data.contentfulVisual

    const { isDesktop } = useContext(Context)

    let counter = 0;

    const onImageScroll = () => {
        let textSection = document.getElementById(visualStyles.text)
        let textTitle = document.getElementById(visualStyles.textTitle)

        if(window.pageYOffset < 150){
            textSection.style.top = '30%'
            textTitle.style.display = 'none'
            counter = 0
        } else if(counter === 0){
            textSection.style.top = 0
            textTitle.style.display = 'block'
            counter += 1
        }
    }

    useEffect(() => {
        if(isDesktop){
            document.body.onscroll = onImageScroll
        }
    }, [isDesktop])

    useEffect(() => {
        return () => {
          document.body.onscroll = null
        };
      }, []);

    return (
        <Layout noFooter="true">
            <div className={visualStyles.visual}>
                <h1>{title}</h1>

                <section className={visualStyles.text} id={visualStyles.text}>
                    <h1 id={visualStyles.textTitle}>{title}</h1>
                    <p dangerouslySetInnerHTML={{__html: text.text}}>
                    </p>
                    <button onClick={ () => navigate('/visuals') }>Back</button>
                </section>

                <section className={visualStyles.images}>
                    <ul>
                    {
                        images.map((image, index) =>
                            <li key={index}>
                                <Img fluid={image.fluid} alt={title} />
                            </li> 
                        )
                    }
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default VisualTemplate
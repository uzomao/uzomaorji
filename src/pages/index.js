import React from "react"
import { navigate } from "gatsby"

import '../styles/index.css'
import indexStyles from '../styles/index.module.css'

import uzomas from '../images/uzomas.png'
import background from '../images/background.png'

import Layout from '../components/layout'

const Index = (props) => {

    const navigateTo = (route) => {

        document.getElementById(indexStyles.uzomasHeader).style.animation = 'unset';

        let choice = route === '/tech' ? 'the techie' : 'the artist'

        let pElement = document.createElement('h1')
        pElement.className = indexStyles.userChoice
        pElement.innerHTML = `You chose ${choice}`

        document.getElementById(indexStyles.choiceText).appendChild(pElement)

        setTimeout(function() {
			navigate(route)
		}, 2500);
    }

    return (

        <Layout noHeader='true'>
            <div>
                <h1 className={indexStyles.uzomasHeader} id={indexStyles.uzomasHeader}>Choose  an  Uzoma</h1>
                <img src={background} alt="background" width="100%" style={{maxHeight: '100vh'}} />
                <img src={uzomas} className={indexStyles.uzomas} alt="pictures of uzoma" useMap="#image-map" />

                <div id={indexStyles.choiceText}>
                </div>

                <map name="image-map">
                    <area alt="the techie" onClick={() => navigateTo('/tech')} coords="130,94,157,94,164,120,183,153,192,190,191,229,191,245,201,277,191,281,191,305,196,325,197,372,211,404,194,410,155,286,165,389,136,406,124,404,145,373,133,321,127,288,109,279,110,217,107,160,122,102" shape="poly" />
                    <area alt="the artist" onClick={() => navigateTo('/visuals')} coords="560,249,544,201,556,148,580,139,574,106,580,91,602,88,617,116,612,137,637,157,641,211,626,228,624,300,615,378,609,383,618,400,601,403,589,386,590,369,596,324,589,279,577,326,567,384,558,384,559,399,538,411,524,410,541,378,546,307" shape="poly" />
                </map>

            </div>
        </Layout>
    )

}

export default Index
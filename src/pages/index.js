import React from "react"
import { navigate } from "gatsby"

import '../styles/index.css'
import indexStyles from '../styles/index.module.css'

import background from '../images/uzomaorji-banner.jpg'
import mobileBackground from '../images/mobile-banner.jpg'

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

                { typeof window !== `undefined` && window.innerWidth > 900 ? 
                    <img src={background} className={indexStyles.uzomas} alt="pictures of uzoma" useMap="#image-map" />
                    :
                    <img src={mobileBackground} className={indexStyles.uzomas} alt="pictures of uzoma" useMap="#image-map-mobile" />
                }

                <div id={indexStyles.choiceText}>
                </div>

                <map name="image-map">
                    <area alt="the techie" onClick={() => navigateTo('/tech')} coords="951,176,975,190,992,200,1010,231,1033,251,1053,278,1056,309,1022,319,1009,353,1015,434,1031,621,1026,644,1029,670,1002,673,994,627,983,584,964,469,958,522,958,552,962,611,957,619,963,644,936,656,909,656,926,601,916,524,911,496,911,412,906,395,918,365,918,321,891,326,868,320,874,284,892,249,906,225" shape="poly" />
                    <area alt="the artist" onClick={() => navigateTo('/visuals')} coords="436,163,461,190,468,222,465,249,500,273,503,344,506,363,488,377,484,396,484,431,479,500,473,535,467,600,466,623,456,628,468,650,465,664,444,662,426,641,424,612,432,531,424,477,408,537,392,627,386,636,375,630,378,651,356,665,337,675,320,663,329,644,346,624,350,568,362,482,376,417,372,409,358,366,351,344,369,272,374,257,403,243,401,215,405,178" shape="poly" />
                </map>

                <map name="image-map-mobile">
                    <area alt="the techie" onClick={() => navigateTo('/tech')} coords="464,85,479,95,489,102,505,123,520,149,498,154,497,206,506,301,499,308,504,324,490,328,484,302,480,269,473,230,467,268,471,300,471,311,455,322,446,320,452,299,446,259,444,192,451,156,429,157,424,147,435,118,448,102,459,97" shape="poly" />
                    <area alt="the artist" onClick={() => navigateTo('/visuals')} coords="211,84,229,106,227,122,243,136,248,174,238,191,230,300,230,321,218,327,207,309,213,257,209,230,199,268,192,307,186,308,187,318,165,329,156,329,172,310,174,261,186,201,174,170,181,125,200,116,197,92,204,86" shape="poly" />
                </map>

            </div>

        </Layout>
    )

}

export default Index
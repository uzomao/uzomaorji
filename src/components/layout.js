import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './header'
import SEO from './seo'

const Layout = (props) => {
    return(
        <React.Fragment>
            <SEO />
            { !props.noHeader &&
                <Header />
            }
            {props.children}
        </React.Fragment>
    )
}

export default Layout
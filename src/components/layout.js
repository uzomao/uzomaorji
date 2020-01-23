import React from 'react'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const Layout = (props) => {

    return(
        <React.Fragment>
            <SEO />
            { !props.noHeader &&
                <Header />
            }
            
            {props.children}
            
            { !props.noFooter &&
                <Footer />
            }
        </React.Fragment>
    )
}

export default Layout
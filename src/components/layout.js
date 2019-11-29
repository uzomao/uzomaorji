import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './header'

const Layout = (props) => {
    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Uzoma Orji | Visual Artist & Creative Technologist</title>
                <meta name="description" content="Website of visual artist and creative technologist Uzoma Orji" />
                <meta name="keywords" content="Uzoma, Orji, Uzoma Orji, Chidumaga, Visual Artist, 
                Artist, Designer, Technologist, Creative, Nigeria, Africa" />
                <meta name="author" content="Uzoma Orji" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            { !props.noHeader &&
                <Header />
            }
            {props.children}
        </React.Fragment>
    )
}

export default Layout
import React, { useEffect, useContext } from 'react'

import { Link, navigate } from 'gatsby'

import Context from '../../context'

const Terminal = () => {

    const { isDesktop, isPortrait } = useContext(Context)

    useEffect(() => {
		isPortrait && navigate('/tech')
	}, [isPortrait])

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <p style={{
                width: '50%', margin: '2em auto', textAlign: 'justify'
            }}>This page used to be something really exciting. I'm currently making it even <i>excitinger</i> <span role='img' aria-label='man technologist'>👨🏾‍💻</span></p>
            {
                !isDesktop ?
                    <p>Please rotate your phone to go back</p>
                    :
                    <Link to='/tech'>
                        <button className="button">Please click this to go back</button>
                    </Link>
            }
        </div>
    )
}

export default Terminal

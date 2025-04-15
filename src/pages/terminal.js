import React, { useEffect, useContext } from 'react'

import { Link, navigate } from 'gatsby'

import Context from '../../context'

const Terminal = () => {

    const { isDesktop, isPortrait } = useContext(Context)

    useEffect(() => {
		!isDesktop && isPortrait && navigate('/portfolio/tech')
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
            {
                !isDesktop ?
                    <p>{`Rotate your phone again (it's a game)`}</p>
                    :
                    <Link to='/portfolio/tech'>
                        <button className="button">Please check back later</button>
                    </Link>
            }
        </div>
    )
}

export default Terminal

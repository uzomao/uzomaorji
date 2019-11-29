import React from 'react'
import {Link} from 'gatsby'

import headerStyles from '../styles/header.module.css'

// import Navigation from '../navigation/navigation'

const Header = ({ isLightTheme }) => {
	const headerThemeClass = isLightTheme ? 'light-theme' : 'dark-theme'

	return (
		<div className={headerStyles.headerBlock}>
			<Link to='/'><h2 id={headerStyles.header} onMouseOver={() => 
				{document.getElementById(headerStyles.header).innerHTML = 'creative technologist/visual artist'}
			} onMouseOut={() => 
				{document.getElementById(headerStyles.header).innerHTML = 'UO'}
			} className={headerThemeClass}>UO</h2>
			</Link>

			{/* <Navigation /> */}
		</div>
	)
}

export default Header;
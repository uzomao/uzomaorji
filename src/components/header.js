import React from 'react'
import {Link} from 'gatsby'

import headerStyles from '../styles/header.module.css'

import Navigation from './navigation'

const Header = ({ isLightTheme }) => {
	const headerThemeClass = isLightTheme ? 'light-theme' : 'dark-theme'

	return (
		<div className={headerStyles.headerBlock}>
			<h2>
				<Link to='/'
					id={headerStyles.header}
					onMouseOver={() => {document.getElementById(headerStyles.header).innerHTML = 'creative technologist/visual artist'}}
					onFocus={ () => void 0 }
					onMouseOut={() => {document.getElementById(headerStyles.header).innerHTML = 'uzoma chidumaga orji'}}
					onBlur={ () => void 0 } 
					className={headerThemeClass}>
						uzoma chidumaga orji
				</Link>
			</h2>

			<Navigation />
		</div>
	)
}

export default Header;
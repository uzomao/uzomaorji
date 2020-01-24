import React from 'react'

import rotateNoticeStyles from '../styles/rotate-notice.module.css'

const RotateNotice = () => {

    return (
        <div id={rotateNoticeStyles.rotateNotice} className={rotateNoticeStyles.rotateNotice}>
            <h2>
                Rotate your screen
                {` `}
                <span role='img' aria-label='rotate-screen'>🔄</span>
            </h2>
        </div>
    )
}

export default RotateNotice
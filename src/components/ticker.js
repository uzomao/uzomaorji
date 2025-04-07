import React from 'react'
import tickerStyles from '../styles/ticker.module.css'

import { FaTimesCircle } from 'react-icons/fa'

// Shout out to https://codepen.io/lewismcarey/pen/GJZVoG for this

const Ticker = ({ tickerText, openMailingListModal, isMailingList, hideTicker }) => {

    const tickerClass = isMailingList ? `${tickerStyles.ticker} ${tickerStyles.tickerAnimationPaused}` : tickerStyles.ticker
    
    return (
        <div className={tickerStyles.tickerWrap}>
            <div className={tickerClass} onClick={() => openMailingListModal()}>
                {tickerText}
            </div>

            <FaTimesCircle className={tickerStyles.closeTicker} onClick={() => hideTicker()} />
        </div>
    )
}

export default Ticker

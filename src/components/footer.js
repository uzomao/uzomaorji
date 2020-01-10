import React from 'react'

import footerStyles from '../styles/footer.module.css'

const Footer = () => {

    return (
        <main className={footerStyles.footer}>
            <section>
                <p>Uzoma Orji (c) 2019</p>
            </section>

            <section>
                <p>
                    Join my mailing list:
                    <input type="email" className={footerStyles.mailingList} placeholder="fineboys@andgirls.com" />
                    <button className={footerStyles.mailMe}>Join</button>
                </p>
            </section>
        </main>
    )
}

export default Footer
import React from 'react'

import footerStyles from '../styles/footer.module.css'

const Footer = () => {

    return (
        <main className={footerStyles.footer}>
            <section>
                <p>
                    <span>
                        &copy; Uzoma Orji {new Date().getFullYear()}
                    </span>
                    
                    <span>
                        Join my mailing list:
                        <input type="email" className={footerStyles.mailingList} placeholder="fineboys@andgirls.com" />
                        <button className={footerStyles.mailMe}>Join</button>
                    </span>
                </p>
            </section>
        </main>
    )
}

export default Footer
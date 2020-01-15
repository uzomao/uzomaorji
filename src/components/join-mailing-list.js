import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaTimes } from 'react-icons/fa'

import mailingListStyles from '../styles/join-mailing-list.module.css'

const JoinMailingList = ( { closeModal }) => {

    const [ mailchimpResult, setMailchimpResult ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ listFields, setListFields ] = useState({})

    const _handleSubmit = async (e) => {
        e.preventDefault();

        setEmail(document.getElementById(mailingListStyles.email)).value()
        let fname = document.getElementById(mailingListStyles.listFields).value()
        setListFields({FNAME: fname})

        const result = await addToMailchimp(email, listFields)
        console.log(result)
        console.log(e)

        setMailchimpResult(result)

        console.log(mailchimpResult)
    }

    return (
        <div className={mailingListStyles.formDiv}>

            <div className={mailingListStyles.formHeader}>
                <h2>Become a loving friend today*</h2>
                <span><FaTimes style={{fontSize: '40px', cursor: 'pointer'}} onClick={() => closeModal()} /></span>
            </div>

            <div className={mailingListStyles.formCircles}>
                <div className={mailingListStyles.formCircle} style={{background: '#87c1e9'}}></div>
                <div className={mailingListStyles.formCircle} style={{background: '#ffcccc'}}></div>
            </div>

            <span className={mailingListStyles.formContent}>
                <form onSubmit={(e) => _handleSubmit(e)}>
                    <div className={mailingListStyles.formGroup}>
                        <label>
                            <h3>Your first name</h3>
                        </label>
                        <input type="text" name="name" id={mailingListStyles.name} />
                    </div>

                    <div className={mailingListStyles.formGroup}>
                        <label>
                            <h3>Your email address**</h3>
                        </label>
                        <input type="text" name="email" id={mailingListStyles.email} required={true} />
                    </div>

                    <p className={mailingListStyles.caveat}>*if you would like to engage, like, on a deeper level</p>
                    <p className={mailingListStyles.caveat}>**required</p>

                    <div className={mailingListStyles.formGroup}>
                        <button className={mailingListStyles.formSubmit}>Submit</button>
                    </div>
                </form>
            </span>
        </div>
    )

}

export default JoinMailingList
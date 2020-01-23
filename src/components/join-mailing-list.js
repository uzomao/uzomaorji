import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaTimes } from 'react-icons/fa'

import mailingListStyles from '../styles/join-mailing-list.module.css'

const JoinMailingList = ( { closeModal }) => {

    const [ mailchimpResult, setMailchimpResult ] = useState('')

    const mailingListNameID = 'mailing-list-form-name'
    const mailingListEmailID = 'mailing-list-form-email'

    const _handleSubmit = async (e) => {
        e.preventDefault();

        let email = document.getElementById(mailingListEmailID).value
        let fname = document.getElementById(mailingListNameID).value

        const result = await addToMailchimp(email, {FNAME: fname})
        setMailchimpResult(result)
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
                {
                    mailchimpResult === '' ? 
                
                        <form onSubmit={(e) => _handleSubmit(e)}>
                            <div className={mailingListStyles.formGroup}>
                                <label>
                                    <h3>Your first name</h3>
                                </label>
                                <input type="text" name="name" id={mailingListNameID} />
                            </div>

                            <div className={mailingListStyles.formGroup}>
                                <label>
                                    <h3>Your email address**</h3>
                                </label>
                                <input type="text" name="email" id={mailingListEmailID} required={true} />
                            </div>

                            <p className={mailingListStyles.caveat}>*if you would like to engage, like, on a deeper level</p>
                            <p className={mailingListStyles.caveat}>**required</p>

                            <div className={mailingListStyles.formGroup}>
                                <button className={mailingListStyles.formSubmit}>Submit</button>
                            </div>
                        </form>
                    :
                        <div className={mailingListStyles.result}>
                            <h2>{mailchimpResult.result}!</h2>
                            <p>{mailchimpResult.msg}</p>

                            <button className={mailingListStyles.formSubmit}>Alright</button>
                        </div>
                        

                }
            </span>
        </div>
    )

}

export default JoinMailingList
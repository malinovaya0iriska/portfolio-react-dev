import React from 'react';
import styleContainer from "../common/styles/containerStyle.module.scss";
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h3 className={styles.title}>Get in Touch</h3>
                <form className={styles.contactsForm}>
                    <input type={'text'} placeholder={'Your name'}/>
                    <input type={'text'} placeholder={'Your mail/phone number'}/>
                    <textarea placeholder={'Type your message here'}>
                    </textarea>
                    <button>Send</button>
                </form>

            </div>
        </div>
    );
};


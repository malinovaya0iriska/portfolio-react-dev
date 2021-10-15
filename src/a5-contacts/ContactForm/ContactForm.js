import React from 'react';
import styles from './ContactForm.module.scss'
import Fade from 'react-reveal/Fade';

export const ContactForm = () => {
    return (
        <Fade left>
        <form action={'post'} className={styles.contactsForm}>
            <div className={styles.formRow}>
                <input type={'text'} id={'name'} required/>
                <label htmlFor={'name'}>Your name</label>
            </div>
            <div className={styles.formRow}>
                <input type={'text'} id={'email'} required/>
                <label htmlFor={'email'}>Your Email</label>
            </div>
            <div className={styles.formRow}>
                <textarea rows={1} id={'text'} required/>
                <label htmlFor={'text'}>Enter message</label>
            </div>
            <button>Send</button>
        </form>
        </Fade>
    );
};


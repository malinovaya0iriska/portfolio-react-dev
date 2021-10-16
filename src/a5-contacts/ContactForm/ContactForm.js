import React from 'react';
import styles from './ContactForm.module.scss'
import Fade from 'react-reveal/Fade';
import {Button} from "../../common/components/Button/Button";

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
                  {/*  <div contentEditable={true} className={styles.test}>  </div>*/}
                    <label htmlFor={'text'}>Enter message</label>
                </div>
                <Button text={'Send'}/>
            </form>
        </Fade>
    );
};


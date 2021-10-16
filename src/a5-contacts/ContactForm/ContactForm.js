import React, {useState} from 'react';
import styles from './ContactForm.module.scss'
import Fade from 'react-reveal/Fade';
import {Button} from "../../common/components/Button/Button";

export const ContactForm = () => {

    /*editable textarea*/

    let [row, setRows] = useState(1)
    let [length, setLength] = useState(0)
    const OnChangeHandler = (e) => {
        let height = 35
        if (+e.currentTarget.scrollHeight > height * row) {
            setRows(++row)
            if (length === 0) {
                setLength(e.currentTarget.value.length)
            }
        } else if (e.currentTarget.value.length < length * (row - 1)) {
            setRows(--row)
        }
    }

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
                    <textarea rows={row} id={'text'} onChange={OnChangeHandler} required/>
                    <label htmlFor={'text'}>Enter message</label>
                </div>
                <Button text={'Send'}/>
            </form>
        </Fade>
    );
};


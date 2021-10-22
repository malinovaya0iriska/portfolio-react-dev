import React, {useState} from 'react';
import styles from './ContactForm.module.scss'
import Fade from 'react-reveal/Fade';
import {Button} from "../../common/components/Button/Button";
import emailjs from 'emailjs-com';


export const ContactForm = () => {

    const successText = 'Thank you, the message has been sent successfully! I will contact you at the soonest possible time'
    const errorText = 'Sorry, something is wrong. I can\'t receive you message. Try another way to contact me'

    const [message, setMessage] = useState(null)

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gzzm14l', 'template_portfolio', e.currentTarget, 'user_aB4qvm6bmCN8SLth74twQ')
            .then((result) => {
                console.log(result.text)
                setMessage(successText)
            }, (error) => {
                console.log(error.text)
                setMessage(errorText)
            });
        e.currentTarget.reset()
    }

    return (
        <Fade left>
            <form onSubmit={sendEmail} className={styles.contactsForm}>
                <div className={styles.formRow}>
                    <input type={'text'} name={'name'} required/>
                    <label htmlFor={'name'}>Your name</label>
                </div>
                <div className={styles.formRow}>
                    <input type={'text'} name={'email'} required/>
                    <label htmlFor={'email'}>Your Email</label>
                </div>
                <div className={styles.formRow}>
                    <textarea rows={row} id={'text'} onChange={OnChangeHandler} name={'message'} required/>
                    <label htmlFor={'text'}>Enter message</label>
                </div>
                <Button type={'submit'} text={'Send'}/>
                {message && <div className={styles.helperText}><p>{message}</p></div>}
            </form>
        </Fade>
    );
}



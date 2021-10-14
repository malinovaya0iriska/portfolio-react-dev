import React from 'react';
import styles from './Contacts.module.scss'
import {ContactForm} from "./ContactForm/ContactForm";

export const Contacts = () => {
    return (
        <section className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <h3 className={styles.title}>Get in Touch</h3>
                <p>Fill the form - it's easy! I'm open for your business suggestions:
                </p>
                <ContactForm/>
            </div>
        </section>
    );
};


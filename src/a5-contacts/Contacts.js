import React from 'react';
import styles from './Contacts.module.scss'
import {ContactForm} from "./ContactForm/ContactForm";
import {Title} from '../common/components/Title/Title'

export const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contact'}>
            <div className={styles.contactsContainer}>
                <Title text={'Get in Touch'}/>
                <p>Fill the form - it's easy! I'm open for your business suggestions:
                </p>
                <ContactForm/>
            </div>
        </section>
    );
};


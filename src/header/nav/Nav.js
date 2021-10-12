import React from 'react';
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href={""}>Home</a>
            <a href={""}>Skills</a>
            <a href={""}>Projects</a>
            <a href={""}>Contact</a>
        </div>
    );
};


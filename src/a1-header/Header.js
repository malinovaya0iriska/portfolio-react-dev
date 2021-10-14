import React from 'react';
import {Nav} from "./nav/Nav";
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
            <Nav/>
        </div>
        </header>
    );
};


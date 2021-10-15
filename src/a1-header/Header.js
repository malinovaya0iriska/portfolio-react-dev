import React from 'react';
import {Nav} from "./nav/Nav";
import styles from './Header.module.scss'
import {CgMenuRight} from "react-icons/all";

export const Header = () => {
    return (
        <>
            <button type={'button'} className={styles.mobileNav}>
                <CgMenuRight/>
            </button>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Nav/>
                </div>
            </header>
        </>
    );
}


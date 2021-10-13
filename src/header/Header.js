import React from 'react';
import {Nav} from "./nav/Nav";
import styleContainer from "../common/styles/containerStyle.module.scss";
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
            <Nav/>
        </div>
        </header>
    );
};


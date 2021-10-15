import React, {useState} from 'react';
import {Nav} from "./nav/Nav";
import styles from './Header.module.scss'
import {CgMenuRight} from "react-icons/all";

export const Header = () => {
    const [menu, setMenu] = useState(false)
    const onClickHandler = () => {
        setMenu(!menu)
    }
    return (
        <>
            <button onClick={onClickHandler} type={'button'} className={styles.mobileNav}>
                <CgMenuRight/>
            </button>

            <header className={styles.header}
            >
                <div className={styles.headerContainer}>
                    <Nav menu={menu}/>
                </div>
            </header>

        </>
    );
}


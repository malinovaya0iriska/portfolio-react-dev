import React, {useState} from 'react';
import {Nav} from "./nav/Nav";
import styles from './Header.module.scss'
import {BurgerNav} from "./burgerNav/BurgerNav";
import {AiOutlineClose, CgMenuRight} from "react-icons/all";

export const Header = () => {
    const [menu, setMenu] = useState(false)
    const onClickHandler = () => {
        setMenu(!menu)
    }
    const headerClass = `${styles.header} ${menu ? styles.mobileHeader : ''}`
    return (
        <>
            <button onClick={onClickHandler} type={'button'} className={styles.mobileNavBtn}>
                {menu ? <AiOutlineClose/> : <CgMenuRight/>}
            </button>
            <header className={headerClass}>
                <div className={styles.headerContainer}>
                    <Nav/>
                    <BurgerNav onClick={onClickHandler}/>
                </div>
            </header>
        </>
    );
}


import React from 'react';
import {Nav} from "./nav/Nav";
import styles from './Header.module.scss'
import {BurgerNav} from "./burgerNav/BurgerNav";
import {AiOutlineClose, CgMenuRight} from "react-icons/all";

export const Header = ({menu, setMenu}) => {
    
    const onClickHandler = () => {
        setMenu(!menu)
    }
    const headerClass = `${styles.header} ${menu ? styles.mobileHeader : ''}`
    return (
        <>
            <button onClick={onClickHandler} name={'menu'} type={'button'} className={styles.mobileNavBtn}>
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


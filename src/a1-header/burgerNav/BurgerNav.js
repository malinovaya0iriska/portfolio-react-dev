import React from 'react';
import styles from './BurgerNav.module.scss'
import {
    AiOutlineHome,
    BiCodeBlock,
    BiEnvelope,
    BsGithub,
    FaLinkedinIn,
    GrGooglePlus,
    RiBookReadLine,
    SiCodewars,
    BiUser
} from "react-icons/all";
import profileImg from './../../assets/img/profile-img.jpg'
import {Link} from "react-scroll";

export const BurgerNav = ({onClick}) => {

    return (
        <div className={styles.burgerNav}>
            <div className={styles.profile}>
                <img src={profileImg} alt={''} className={styles.profileImg}/>
                <h1>Ira Marts</h1>
                <div className={styles.socialLinks}>
                    <a href={'https://www.instagram.com/iriskamalinka/'} target="_blank" rel="noreferrer">
                        <SiCodewars/><span>Codewars</span>
                    </a>
                    <a href={'mailto:martsulevich.irina@gmail.com'}>
                        <GrGooglePlus/><span>Gmail</span>
                    </a>
                    <a href={'https://www.linkedin.com/in/irina-martsulevich-342073217/'} target="_blank"
                       rel="noreferrer">
                        <FaLinkedinIn/><span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/malinovaya0iriska" target="_blank" rel="noreferrer">
                        <BsGithub/><span>Github</span>
                    </a>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link activeClass={styles.active}
                              to={'home'}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={700}
                              onClick={onClick}
                        >
                            <AiOutlineHome/>Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={styles.active}
                              to={'about'}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={700}
                              onClick={onClick}
                        ><BiUser/>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={styles.active}
                              to={'skills'}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={700}
                              onClick={onClick}
                        >
                            <BiCodeBlock/>Skills
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={styles.active}
                              to={'projects'}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={700}
                              onClick={onClick}
                        >
                            <RiBookReadLine/>Projects
                        </Link>
                    </li>
                    {/*<li><a href={'#video'}><BiVideo/>Video</a></li>*/}
                    <li>
                        <Link activeClass={styles.active}
                              to={'contact'}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={700}
                              onClick={onClick}
                        >
                            <BiEnvelope/>Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


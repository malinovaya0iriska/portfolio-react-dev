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
    SiCodewars
} from "react-icons/all";
import profileImg from './../../assets/img/profile-img.jpg'
import {Link} from "react-scroll";

export const BurgerNav = () => {

    return (
        <div className={styles.burgerNav}>
                <div className={styles.profile}>
                    <img src={profileImg} alt={''} className={styles.profileImg}/>
                    <h1>Ira Marts</h1>
                    <div className={styles.socialLinks}>
                        <a href={'https://www.instagram.com/iriskamalinka/'} target="_blank" rel="noreferrer">
                            <SiCodewars/>
                        </a>
                        <a href={'mailto:martsulevich.irina@gmail.com'}>
                            <GrGooglePlus/>
                        </a>
                        <a href={'https://www.linkedin.com/in/irina-martsulevich-342073217/'} target="_blank"
                           rel="noreferrer">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://github.com/malinovaya0iriska" target="_blank" rel="noreferrer">
                            <BsGithub/>
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
                                  duration={500}
                            >
                                <AiOutlineHome/>Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass={styles.active}
                                  to={'skills'}
                                  spy={true}
                                  smooth={true}
                                  offset={-80}
                                  duration={500}
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
                                  duration={500}
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
                                  duration={500}
                            >
                                <BiEnvelope/>Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}


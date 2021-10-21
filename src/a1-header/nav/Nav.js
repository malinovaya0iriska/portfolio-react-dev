import React from 'react';
import styles from './Nav.module.scss'
import {AiOutlineHome, BiCodeBlock, BiEnvelope, RiBookReadLine, BiUser} from "react-icons/all";
import {Link} from "react-scroll";

export const Nav = () => {
    return (
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
                          to={'about'}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
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
    )
}


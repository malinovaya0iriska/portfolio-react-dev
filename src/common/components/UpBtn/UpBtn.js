import styles from './UpBtn.module.scss'
import {Link} from "react-scroll";
import {SiApacherocketmq} from "react-icons/all";
import React from "react";

export const UpBtn = ({isVisible}) => {

    return (<>
            {isVisible && <Link className={styles.backUp}
                                to={"home"}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
            > <SiApacherocketmq/>
            </Link>}
        </>
    )
}
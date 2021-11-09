import React from 'react';
import styles from './Project.module.scss'
import {Button} from "../../common/components/Button/Button";

export const Project = ({title, demo, description, img, github}) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon} style={{backgroundImage: `url(${img})`}}>
                <div className={styles.overLay}>
                    <div className={styles.description}>
                        <h3 className={styles.title}>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <a href={github} className={styles.previewBtn} target="_blank"
                       rel="noreferrer"><Button text={'Code'}/></a>
                    <a href={demo} className={styles.previewBtn} target="_blank"
                       rel="noreferrer"><Button text={'Demo'}/></a>
                </div>
            </div>
        </div>
    );
};




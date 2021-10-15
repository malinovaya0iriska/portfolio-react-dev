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
                    <Button text={'Code'}><a href={github} className={styles.previewBtn} target="_blank"
                                             rel="noreferrer"> </a></Button>
                    <Button text={'Demo'}><a href={demo} className={styles.previewBtn} target="_blank"
                                             rel="noreferrer"> </a></Button>
                </div>
            </div>
        </div>
    );
};




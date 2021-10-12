import React from 'react';
import styles from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon}>
                <button className={styles.previewBtn}>Preview</button>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>
        {props.description}
    </span>

        </div>
    );
};

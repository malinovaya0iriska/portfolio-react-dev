import React from 'react';
import styleContainer from '../common/styles/containerStyle.module.scss'
import styles from './Main.module.scss'


export const Main = () => {
    return (
        <section className={styles.mainBlock} id={'#home'}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.greeting}>
                    <h2>Ira Marts</h2>
                    <p>I am <span className="typed"
                                  data-typed-items="Frontend-Developer, Freelancer, React-Dev">
                         Frontend-Developer
                    </span>
                    </p>
                </div>
            </div>
        </section>
    );
};


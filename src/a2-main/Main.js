import React from 'react';
import styles from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect';

export const Main = () => {
    return (
        <section className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.greeting}>
                    <h2>Ira Marts</h2>
                    <div className={styles.message}>I am <span>
                        <ReactTypingEffect
                            text={['Frontend-Developer', 'React-Developer', 'Freelancer']}
                            speed={200}
                            eraseSpeed={200}
                            eraseDelay={400}
                            typingDelay={250}
                        />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};


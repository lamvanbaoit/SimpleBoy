import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Container.module.css';
import CV3 from '../../img/CV1.png';
import CV1 from '../../img/CV5.png';
import CV2 from '../../img/CV2.png';
import { withTranslation } from "react-i18next";

function Container(props) {
    const { t } = props
    return (
        <>
            <div className="grid wide" >
                <div className="row">
                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.intern')}</span></div>
                        </div>
                        <Link className={styles.image} to="/resume"><img src={CV1} alt="resume" /></Link>
                    </div>

                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.engineer')}</span></div>
                        </div>
                        <Link className={styles.image} to="/resumenew"><img src={CV2} alt="resume" /></Link>
                    </div>
                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.economy')}</span></div>
                        </div>
                        <Link className={styles.image} to="/resumenew"><img src={CV3} alt="resume" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation('common')(Container);
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Container2.module.css'
import LT from '../../img/Letter1.png'
import LT1 from '../../img/Letter3.png'
import LT2 from '../../img/Letter4.png'
import { withTranslation } from "react-i18next";

function Container2(props) {
    const { t } = props
    return (
        <div className={styles.container}>
            <div className="grid wide" >
                <div className="row">
                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.funtional')}</span></div>
                        </div>
                        <Link className={styles.image} to="/letter"><img src={LT} alt="resume" /></Link>
                    </div>

                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.modern')}</span></div>
                        </div>
                        <Link className={styles.image} to="/letter"><img src={LT1} alt="resume" /></Link>
                    </div>
                    <div className="col l-4 c-12">
                        <div className={styles.template}>
                            <div className={styles.caption}><span>{t('welcome.simple')}</span></div>
                        </div>
                        <Link className={styles.image} to="/letter"><img src={LT2} alt="resume" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default withTranslation('common')(Container2);
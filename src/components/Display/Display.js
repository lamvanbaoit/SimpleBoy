import React from 'react';
import styles from './Display.module.css'
import { withTranslation } from "react-i18next";

function Display({ handleResumeCheck, handleLetterCheck, ...props }) {
    const { t } = props

    return (
        <div className={styles.display} >
            <h2>
                {t('welcome.title1')}
            </h2>
            <div className={styles.display__title}>
                {t('welcome.title2')}
                <b> MyCVBook </b>
                {t('welcome.title3')}
            </div>

            <div className={styles.display__button} style={{ position: 'relative' }}>
                <button className={styles.display__resume} onClick={() => handleResumeCheck()}>
                    {/* Resumes */}
                    {t('welcome.cv1')}
                    <p>
                        {/* Student / Intermediate */}
                        {t('welcome.cv2')}
                    </p>
                </button>
                <button className={styles.display__cover} onClick={() => handleLetterCheck()} >
                    {/* Cover Letters */}
                    {t('welcome.cl1')}
                    <p>
                        {t('welcome.cl2')}
                        {/* All levels of experience */}
                    </p>
                </button>
                <div className={styles.pickatemplate}>{t('welcome.tpl')}</div>
            </div>

        </div>
    );
}

export default withTranslation('common')(Display);
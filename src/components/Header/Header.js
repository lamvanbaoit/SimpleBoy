import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../img/logo.png';
import { useTranslation, withTranslation } from "react-i18next";


function Header(props) {
    const { t } = props
    const { i18n } = useTranslation('common');

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.header__logo}>
                <img src={Logo} alt="logo" />

            </Link>
            <div className={styles.header__author}>

                <span>
                    {t('welcome.author', { framework: 'Bảo Lâm - Thịnh Nguyễn' })}
                </span>
            </div>


            <div className={styles.header__language}>
                <button className={styles.header__vn} onClick={() => i18n.changeLanguage('vn')}>
                    VN
                </button>
                <button className={styles.header__en} onClick={() => i18n.changeLanguage('en')}>
                    EN
                </button>
            </div>
        </div>
    );
}

export default withTranslation('common')(Header);
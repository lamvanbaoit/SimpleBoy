import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Logo from '../../img/logo.png';

function Footer() {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.header__logo}>
                <img src={Logo} alt="logo" />
                {/* <span>Corona Two</span> */}
            </Link>
        </div>
    );
}

export default Footer;
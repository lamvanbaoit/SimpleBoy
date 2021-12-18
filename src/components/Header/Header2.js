
import React from 'react'
import styles from './Header2.module.css'
import profile from '../../img/bao.jpg'
import savetime from '../../img/save_time.svg'
import manageresumes from '../../img/manage_resumes.svg'
import getresults from '../../img/get_results.svg'
import grabattention from '../../img/grab_attention.svg'
import backgroundlaptop from '../../img/backgroundlaptop.png'
import { useTranslation, withTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


import idtek from '../../img/idtek.png'
import nus from '../../img/nus.png'
import tdtu from '../../img/tdtu.png'

const Header2 = (props) => {
    const { t } = props
    const { i18n } = useTranslation('common');
    return (
        <>
            {/* <!----hero Section start----> */}
            <div className={styles.hero}>
                <nav>

                    <h2 className={styles.logo}>Simple Boy</h2>
                    {/* <h2 className={styles.logo}><Link className={styles.Link1} to="/">Simple <span>Boy</span></Link></h2> */}
                    <ul>

                        <li><Link className={styles.Link1} to="/"> {t('home.a1')} </Link></li>
                        <li>{t('home.about')}</li>
                        <li>{t('home.service')}</li>
                        <li><Link className={styles.Link1} to="/resumenew">{t('home.a2')}</Link></li>
                        <li><Link className={styles.Link1} to="/letter">{t('home.a3')}</Link></li>
                    </ul>
                    <div className={styles.header__language}>
                        <button className={styles.header__vn} onClick={() => i18n.changeLanguage('vn')}>
                            VN
                        </button>
                        <button className={styles.header__en} onClick={() => i18n.changeLanguage('en')}>
                            EN
                        </button>
                    </div>
                </nav>

                <div className={styles.content}>
                    <h4>{t('home.a4')}</h4>
                    <h1>Simple <span>Boy</span></h1>
                    <h3>{t('home.a5')}</h3>
                    <h3>{t('home.a6')}</h3>
                    <button type="button"><Link className={styles.Link1} to="/resumenew">{t('home.a7')}</Link></button>
                </div>

                <div className={styles.images}>
                    <img src={backgroundlaptop} alt="shape" className={styles.shape} />
                </div>
            </div>


            {/* // <!----About section start----> */}
            <section className={styles.about}>
                <div className={styles.main}>
                    <img src={profile} alt="Profile" />
                    <div className={styles.abouttext}>
                        <h2>{t('home.a8')}</h2>
                        <h5>{t('home.a9')}</h5>
                        <p>{t('home.a10')}</p>
                        <button type="button">{t('home.a11')}</button>
                    </div>
                </div>
            </section>


            {/* service */}
            <div className={styles.service}>
                <div className={styles.title}>
                    <h2>{t('home.a12')}</h2>
                </div>
                <section className={styles.stepbystepbuildcv}>
                    <h2>{t('home.a13')}</h2>

                    <section className={styles.steps}>
                        <section className={styles.step}>
                            <section className={styles.iconwrapper}>
                                <span>1</span>
                            </section>
                            <section className={styles.text}>{t('home.a14')}</section>
                        </section>

                        <section className={styles.step}>
                            <section className={styles.iconwrapper}>
                                <span>2</span>
                            </section>
                            <section className={styles.text}>
                                {t('home.a15')}
                            </section>
                        </section>

                        <section className={styles.step}>
                            <section className={styles.iconwrapper}>
                                <span>3</span>
                            </section>
                            <section className={styles.text}>
                                {t('home.a16')}
                            </section>
                        </section>
                    </section>
                </section>
            </div>


            <div className={styles.service}>
                <section className={styles.effortlesslyblock}>
                    <h2>{t('home.a17')}</h2>

                    <section className={styles.items}>
                        <section className={styles.item}>
                            <img
                                className={styles.img}
                                src={savetime}
                                alt="Save time"
                            />
                            <h5>{t('home.a18')}</h5>
                            <p>
                                {t('home.a19')}
                            </p>
                        </section>

                        <section className={styles.item}>
                            <img
                                className={styles.img}
                                src={manageresumes}
                                alt="Save time"
                            />
                            <h5>{t('home.a20')}</h5>
                            <p>
                                {t('home.a21')}
                            </p>
                        </section>

                        <section className={styles.item}>
                            <img
                                className={styles.img}
                                src={getresults}
                                alt="Save time"
                            />
                            <h5>{t('home.a22')}</h5>
                            <p>
                                {t('home.a23')}
                            </p>
                        </section>

                        <section className={styles.item}>
                            <img
                                className={styles.img}
                                src={grabattention}
                                alt="Save time"
                            />
                            <h5>{t('home.a24')}</h5>
                            <p>
                                {t('home.a25')}
                            </p>
                        </section>
                    </section>
                </section>
            </div>

            <footer>
                <div className={styles.footer2}>
                    <div className={styles.footer11}>{t('home.a26')}</div>
                    <div className={styles.footer11}>{t('home.a27')}</div>

                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={idtek} alt="" /></td>
                            <td><img src={nus} alt="" /></td>
                            <td><img src={tdtu} alt="" /></td>
                            <td><img src={tdtu} alt="" /></td>
                            <td><img src={tdtu} alt="" /></td>
                        </tr>

                    </tbody>
                </table>
                <div className={styles.footer1}>{t('home.a28')}</div>
            </footer>
        </>

    )
}

export default withTranslation('common')(Header2)


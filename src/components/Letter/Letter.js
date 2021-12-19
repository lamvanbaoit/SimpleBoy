import React, { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print'
import styles from './Letter.module.css';
import Text from "../svgs/Text";
import Resume from "../Resume3";
import { withTranslation } from "react-i18next";
import { FiPlusCircle, FiTrash2, FiDownload, FiHome } from "react-icons/fi";
import { Link } from 'react-router-dom';



function Letter({ ...props }) {
    // Print
    const { t } = props

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        documentTitle: 'MyCVBook',
        content: () => componentRef.current,
    });

    const preset = [
        { background: '#88E0EF' },
        { background: '#98DDCA' },
        { background: '#D5ECC2' },
        { background: '#FFD384' },
    ]

    const [color, setColor] = useState({
        background: '#88E0EF',
    });

    const changeColorScheme = (item) => {
        setColor({ background: item.background });
    };



    return (
        <div {...props} style={{ position: 'relative' }}>

            {/* <Resume
                color={color}
                preset={preset}
                changeColorScheme={changeColorScheme}
                handlePrint={handlePrint}
            />
 */}

            <div className={styles.content}>
                <div className={styles.content1}>






                    <Link to="/" style={{ paddingLeft: 25 }}>
                        <FiHome style={{ color: '000' }} size={28} />
                    </Link>

                    <div className={styles.content3}>
                        <ul className='sub-menu' tabIndex={1}>
                            <FiDownload onClick={handlePrint} size={28} />
                            {preset.map((item, key) => (
                                <li
                                    key={key}
                                    className='btn'
                                    onClick={() => changeColorScheme(item)}
                                    style={{ backgroundColor: `${item.background}` }}
                                    data-label={key}
                                >
                                </li>
                            ))}
                        </ul>

                    </div>




                </div>
                <div ref={componentRef} className={styles.container}>
                    <div className={styles.headerBox} style={{ backgroundColor: `${color.background}` }}>
                        <div className={styles.headerBox1}>
                            <div className={styles.info}>
                                <div className={styles.name}><Text placeholder={t('cv.name')} /></div>
                                <div className={styles.apply}><Text placeholder={t('cv.job')} /></div>
                            </div>
                        </div>
                        <div className={styles.headerBox2}>
                            <div className={styles.infogeneral}>
                                <Text className={styles.hover} placeholder={t('cv.phone')} />
                            </div>
                            <div className={styles.infogeneral}>
                                <Text className={styles.hover} placeholder={t('cv.email')} />
                            </div>
                            <div className={styles.infogeneral}>
                                <Text className={styles.hover} placeholder={t('cv.address')} />
                            </div>

                        </div>
                    </div>
                    <div className={styles.aaa}>
                        <div className={styles.context} >
                            <Text className={styles.hover} >
                                {t('lt.kg')}
                            </Text>
                            <Text className={styles.hover} >
                                {t('lt.vt')}
                            </Text>
                            <Text className={styles.hover} >
                                {t('lt.tt')}
                            </Text>
                            <Text className={styles.hover} >
                                {t('lt.đt')}
                            </Text>
                            <Text className={styles.hover} >
                                {t('lt.ng')}
                            </Text>
                        </div>
                        <div className={styles.context} >
                            <Text className={styles.hover}>
                                {t('lt.nd')}
                            </Text>
                            <br></br>
                            <Text className={styles.hover} >
                                {t('lt.nd1')}
                            </Text>
                            <br></br>
                            <Text className={styles.hover} >
                                {t('lt.nd2')}
                            </Text>
                            <br></br>
                            <Text className={styles.hover} >
                                {t('lt.nd3')}
                            </Text>
                            <br></br>
                            <Text className={styles.hover} >
                                {t('lt.nd4')}
                            </Text>
                            <br></br>
                            <Text className={styles.hover} >
                                {t('lt.nd5')}
                            </Text>
                            <Text className={styles.hover} >

                            </Text>
                            <Text className={styles.hover} >
                                {t('lt.nd6')}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.content1}>
                </div>
            </div>
        </div>
    );
}

export default withTranslation('common')(Letter)

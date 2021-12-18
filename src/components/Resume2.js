import React, { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print'
import styles from './Resume2.module.css';
import ProfileImage from "./svgs/ProfileImage";
import Text from "./svgs/Text";
import Text2 from "./svgs/Text2";
// import TextSpan from "./svgs/TextSpan";
import introduction from '../img/introduction.png';
import experienceicon from '../img/experience.png';
import educationicon from '../img/education.png';
import certificatesicon from '../img/certificates.png';
import awardsicon from '../img/awards.png';
import skillsicon from '../img/skills.png';
import Resume from "./Resume";
import { withTranslation } from "react-i18next";
import Navbar from "./Navbar";



function Resume2({ ...props }) {
    // Print
    const { t } = props
    const [del, setDel] = useState(false)

    const handDel = () => {
        setDel(!del);
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        documentTitle: 'MyCVBook',
        content: () => componentRef.current,
    });

    // -------------------------------------------------

    const [counter, setCounter] = useState(1)
    const [counter1, setCounter1] = useState(1)
    const [counter2, setCounter2] = useState(1)
    const [counter3, setCounter3] = useState(1)
    const [counter4, setCounter4] = useState(1)
    const [counter5, setCounter5] = useState(1)
    const Counter = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const Counter1 = () => {
        if (counter1 > 0) {
            setCounter1(counter1 - 1)
        }
    }
    const Counter2 = () => {
        if (counter2 > 0) {
            setCounter2(counter2 - 1)
        }
    }
    const Counter3 = () => {
        if (counter3 > 0) {
            setCounter3(counter3 - 1)
        }
    }
    const Counter4 = () => {
        if (counter4 > 0) {
            setCounter4(counter4 - 1)
        }
    }
    const Counter5 = () => {
        if (counter5 > 0) {
            setCounter5(counter5 - 1)
        }
    }

    // -------------------------------------------------
    const [experience, setExperience] = useState(1)
    const [experienceCounter, setExperienceCounter] = useState(1)
    const [education, setEducation] = useState(1)
    const [certificate, setCertificate] = useState(1)
    const [awards, setAward] = useState(1)
    const [skills, setSkill] = useState(1)

    const handleAddExperience = () => {
        setExperienceCounter(experienceCounter + 1)
    }
    const handleAddExperience1 = () => {
        if (experienceCounter > 1) {
            setExperienceCounter(experienceCounter - 1)
        }
    }

    const handleAddExper = () => {
        setExperience(experience + 1)
    }
    const handleAddExper1 = () => {
        if (experience > 1) {
            setExperience(experience - 1)
        }
    }

    const handleAddEducation = () => {
        setEducation(education + 1)
    }
    const handleAddEducation1 = () => {
        if (education > 1) {
            setEducation(education - 1)
        }
    }

    const handleAddCerticate = () => {
        setCertificate(certificate + 1)
    }
    const handleAddCerticate1 = () => {
        if (certificate > 1) {
            setCertificate(certificate - 1)
        }
    }

    const handleAddAward = () => {
        setAward(awards + 1)
    }
    const handleAddAward1 = () => {
        if (awards > 1) {
            setAward(awards - 1)
        }
    }

    const handleAddSkill = () => {
        setSkill(skills + 1)
    }
    const handleAddSkill1 = () => {
        if (skills > 1) {
            setSkill(skills - 1)
        }
    }

    // -------------------------------------------------

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

    // ---------------------------------------------------
    const [exp, setExp] = useState(true)
    const [pro, setPro] = useState(true)
    const [edu, setEdu] = useState(true)
    const [cer, setCer] = useState(true)
    const [aw, setAw] = useState(true)
    const [sk, setSk] = useState(true)

    const handExp = () => {
        setExp(!exp);
    }

    const handPro = () => {
        setPro(!pro);
    }

    const handEdu = () => {
        setEdu(!edu);
    }

    const handCer = () => {
        setCer(!cer);
    }

    const handAw = () => {
        setAw(!aw);
    }

    const handSk = () => {
        setSk(!sk);
    }

    // ---------------------------------------------------


    return (
        <div {...props} style={{ position: 'relative' }}>

            <Resume
                color={color}
                preset={preset}
                changeColorScheme={changeColorScheme}
                handlePrint={handlePrint}
                handDel={handDel}
            />

            <Navbar
                handEdu={handEdu}
                handCer={handCer}
                handAw={handAw}
                handSk={handSk}
                handPro={handPro}
                handExp={handExp}
            />

            <div className={styles.content}>
                <div className={styles.content1}>
                </div>
                <div ref={componentRef} className={styles.container}>
                    {/* Thông tin cá nhân */}
                    <div className={styles.headerBox} style={{ backgroundColor: `${color.background}` }}>
                        <div className={styles.headerBox1}>
                            <ProfileImage></ProfileImage>
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
                            <div className={styles.infogeneral}>
                                <Text className={styles.hover} placeholder={t('cv.web')} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.aaa}>
                        {/* SUMMARY */}
                        <div className={styles.context}>
                            <div className={styles.introduction}>
                                <img className={styles.introductionicon} src={introduction} alt="introduction" />
                                <div className={styles.introductiontext}>
                                    {/* {t('cv.sum')} */}
                                    <Text2 className={styles.hover} placeholder={t('cv.sum')} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.context} >
                            <Text className={styles.hover} placeholder={t('cv.sum1')} />

                        </div>

                        {
                            exp &&
                            <div>
                                {/* WORK EXPERIENCE */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={experienceicon} alt="work experience" />
                                        <div className={styles.introductiontext}>

                                            <Text2 className={styles.hover} placeholder={t('cv.work')} />
                                        </div>
                                        {
                                            del &&
                                            (
                                                <>
                                                    <div>
                                                        <button className={styles.addbtn} onClick={handleAddExper}>+</button>
                                                        <button className={styles.addbtn1} onClick={handleAddExper1}>-</button>
                                                    </div>
                                                </>
                                            )

                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    {new Array(experience).fill(1).map((_, idx) => (
                                        <div key={idx}>
                                            <table border={0}>
                                                <tbody>
                                                    <tr >
                                                        <th rowSpan={2}><Text style={{ fontWeight: '700' }} className={styles.hover} placeholder={t('cv.work1')} /></th>


                                                        <td type="text">
                                                            <Text style={{ fontWeight: '700' }} className={styles.hover} placeholder={t('cv.work3')} />
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        {/* <th>bao</th> */}
                                                        <td type="text">
                                                            <Text className={styles.hover} placeholder={t('cv.work2')} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }


                        {
                            pro &&
                            <div>
                                {/* PROJECTS */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={experienceicon} alt="experience" />
                                        <div className={styles.introductiontext}>
                                            <Text2 className={styles.hover} placeholder={t('cv.pro')} />

                                        </div>
                                        {
                                            del &&
                                            <div>
                                                <button className={styles.addbtn} onClick={handleAddExperience}>+</button>
                                                <button className={styles.addbtn1} onClick={handleAddExperience1}>-</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    {new Array(experienceCounter).fill(1).map((_, idx) => (
                                        <div key={idx}>
                                            <table border={0}>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            {/* <TextSpan style={{ fontWeight: '700' }} className={styles.hover} placeholder={t('cv.pro1')} />
                                                            ( <span><TextSpan className={styles.hover} placeholder={t('cv.pro2')} /></span> - <span><TextSpan className={styles.hover} placeholder={t('cv.pro3')} /></span> ) */}
                                                            <Text style={{ fontWeight: '700' }} className={styles.hover} placeholder={t('cv.pro31')} />
                                                        </td>
                                                    </tr>

                                                    {new Array(counter).fill(1).map((_, idx) => (
                                                        <tr key={idx}>
                                                            <th>{t('cv.pro4')}</th>
                                                            <td type="text" style={{ position: 'relative' }}>
                                                                <Text className={styles.hover} placeholder={t('cv.pro5')} />

                                                                {
                                                                    del &&
                                                                    <button className={styles.addbtn2} onClick={Counter}>-</button>
                                                                }
                                                            </td>
                                                        </tr>

                                                    ))}

                                                    {new Array(counter1).fill(1).map((_, idx) => (
                                                        <>
                                                            <tr key={idx}>
                                                                <th>{t('cv.pro6')}</th>
                                                                <td type="text" style={{ position: 'relative' }}>
                                                                    <Text className={styles.hover} placeholder={t('cv.pro7')} />
                                                                    {
                                                                        del &&
                                                                        <button className={styles.addbtn2} onClick={Counter1}>-</button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>

                                                    ))}

                                                    {new Array(counter2).fill(1).map((_, idx) => (
                                                        <>
                                                            <tr key={idx}>
                                                                <th>{t('cv.pro8')}</th>
                                                                <td type="text" style={{ position: 'relative' }}>
                                                                    <Text className={styles.hover} placeholder={t('cv.pro9')} />
                                                                    {
                                                                        del &&
                                                                        <button className={styles.addbtn2} onClick={Counter2}>-</button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>

                                                    ))}


                                                    {new Array(counter3).fill(1).map((_, idx) => (
                                                        <>
                                                            <tr key={idx}>
                                                                <th>{t('cv.pro10')}</th>
                                                                <td type="text" style={{ position: 'relative' }}>
                                                                    <Text className={styles.hover} placeholder={t('cv.pro11')} />
                                                                    {
                                                                        del &&
                                                                        <button className={styles.addbtn2} onClick={Counter3}>-</button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>

                                                    ))}

                                                    {new Array(counter4).fill(1).map((_, idx) => (
                                                        <>
                                                            <tr key={idx}>
                                                                <th>{t('cv.pro12')}</th>
                                                                <td type="text" style={{ position: 'relative' }}>
                                                                    <Text className={styles.hover} placeholder={t('cv.pro13')} />
                                                                    {
                                                                        del &&
                                                                        <button className={styles.addbtn2} onClick={Counter4}>-</button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>

                                                    ))}

                                                    {new Array(counter5).fill(1).map((_, idx) => (
                                                        <>
                                                            <tr key={idx}>
                                                                <th>{t('cv.pro14')}</th>
                                                                <td type="text" style={{ position: 'relative' }}>
                                                                    <Text className={styles.hover} placeholder={t('cv.pro15')} />
                                                                    {
                                                                        del &&
                                                                        <button className={styles.addbtn2} onClick={Counter5}>-</button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>

                                                    ))}



                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {
                            edu &&
                            <div>
                                {/* EDUCATION */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={educationicon} alt="education" />
                                        <div className={styles.introductiontext}>
                                            <Text2 className={styles.hover} placeholder={t('cv.edu')} />

                                        </div>
                                        {
                                            del &&
                                            <div>
                                                <button className={styles.addbtn} onClick={handleAddEducation}>+</button>
                                                <button className={styles.addbtn1} onClick={handleAddEducation1}>-</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    {new Array(education).fill(1).map((_, idx) => (
                                        <div key={idx}>
                                            <table border={0}>
                                                <tbody>
                                                    <tr>
                                                        <th rowSpan={3}>
                                                            {/* <span><TextSpan className={styles.hover} placeholder={t('cv.edu1')} /></span> - <span><TextSpan className={styles.hover} placeholder={t('cv.edu2')} /></span> */}
                                                            <Text className={styles.hover} placeholder={t('cv.edu21')} />
                                                        </th>
                                                        <td type="text">
                                                            <Text style={{ fontWeight: '700' }} className={styles.hover} placeholder={t('cv.edu3')} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td type="text">
                                                            <Text className={styles.hover} placeholder={t('cv.edu4')} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td type="text">
                                                            <Text className={styles.hover} placeholder={t('cv.edu5')} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {
                            cer &&
                            <div>
                                {/* CERTIFICATIONS */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={certificatesicon} alt="certificates" />
                                        <div className={styles.introductiontext}>
                                            <Text2 className={styles.hover} placeholder={t('cv.cer')} />

                                        </div>
                                        {
                                            del &&
                                            <div>
                                                <button className={styles.addbtn} onClick={handleAddCerticate}>+</button>
                                                <button className={styles.addbtn1} onClick={handleAddCerticate1}>-</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    {new Array(certificate).fill(1).map((_, idx) => (
                                        <div key={idx}>
                                            <table border={0}>
                                                <tbody>
                                                    <tr>
                                                        <th><Text className={styles.hover} placeholder={t('cv.cer1')} /></th>
                                                        <td type="text"><Text className={styles.hover} placeholder={t('cv.cer2')} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {
                            aw &&
                            <div>
                                {/* HONORS OR AWARDS */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={awardsicon} alt="awards" />
                                        <div className={styles.introductiontext}>
                                            <Text2 className={styles.hover} placeholder={t('cv.aw')} />

                                        </div>
                                        {
                                            del &&
                                            <div>
                                                <button className={styles.addbtn} onClick={handleAddAward}>+</button>
                                                <button className={styles.addbtn1} onClick={handleAddAward1}>-</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    {new Array(awards).fill(1).map((_, idx) => (
                                        <div key={idx}>
                                            <table border={0}>
                                                <tbody>
                                                    <tr>
                                                        <th><Text className={styles.hover} placeholder={t('cv.aw1')} /></th>
                                                        <td type="text"><Text className={styles.hover} placeholder={t('cv.aw2')} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {
                            sk &&
                            <div>
                                {/* SKILLS */}
                                <div className={styles.context}>
                                    <div className={styles.introduction}>
                                        <img className={styles.introductionicon} src={skillsicon} alt="skills" />
                                        <div className={styles.introductiontext}>
                                            <Text2 className={styles.hover} placeholder={t('cv.sk')} />

                                        </div>
                                        {
                                            del &&
                                            <div>
                                                <button className={styles.addbtn} onClick={handleAddSkill}>+</button>
                                                <button className={styles.addbtn1} onClick={handleAddSkill1}>-</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.table}>
                                    <div>
                                        <table border={0}>
                                            <tbody>
                                                <tr>
                                                    <td >
                                                        {new Array(skills).fill(1).map((_, idx) => (
                                                            <Text key={idx} className={styles.hover} placeholder={t('cv.sk1')} />
                                                        ))}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className={styles.content1}>
                </div>
            </div>

        </div>
    );
}

export default withTranslation('common')(Resume2)

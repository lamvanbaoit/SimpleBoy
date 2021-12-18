import React from 'react'
import video1 from '../../videos/CV.mp4'
import styles from './Slider.module.css'

function Slider() {
    return (
        <div className={styles.slider}>
            <video muted autoPlay={true} loop>
                <source src={video1} typ="video/mp4" />
                <source src={video1} type="video/ogg" />
            </video>
            <div className={styles.sliderContainer}>
                <h1>We are Web Developers</h1>
                <p className={styles.desc}>
                    We just love to develop websites and while doing that we need some
                    coffee
                </p>
                <div className={styles.cta}>Contact Us</div>
            </div>
        </div>
    )
}

export default Slider

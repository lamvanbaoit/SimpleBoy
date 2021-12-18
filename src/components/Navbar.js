import React from 'react'
import styled from 'styled-components'
import { withTranslation } from "react-i18next";


const Navbar = ({ handEdu, handCer, handAw, handSk, handPro, handExp, ...props }) => {
    const { t } = props

    return (
        <Wrapper>
            <h2>
                {t('nav.sec')}
            </h2>
            <button className='btn' onClick={handExp}>
                {t('nav.exp')}
            </button>
            <button className='btn' onClick={handPro}>
                {t('nav.pro')}
            </button>
            <button className='btn' onClick={handEdu}>
                {t('nav.edu')}
            </button>
            <button className='btn' onClick={handCer}>
                {t('nav.cer')}
            </button>
            <button className='btn' onClick={handAw}>
                {t('nav.aw')}
            </button>
            <button className='btn' onClick={handSk}>
                {t('nav.sk')}
            </button>

        </Wrapper>
    )
}

export default withTranslation('common')(Navbar)


const Wrapper = styled.header`
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    position: absolute;
    top: 470px;
    right: -31px;
    transform: translate(-50%, -50%);
    // transition: transform 0.4s ease-in-out;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    // font-weight: 400;
    color: #fff;
    
    h2 {
        font-family: "Quicksand", sans-serif;
    }

    .btn {
        background-color: #fff;
        // box-shadow:0 0 .2px .2px #fff;
        display: block;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: 0;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Quicksand", sans-serif;


    }

    .btn:active {
        // color: #fff;
        background-color: #e6e6e6;
    } 
`
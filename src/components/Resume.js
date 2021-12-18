import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'

const Resume = ({ handlePrint, color, preset, changeColorScheme, handDel }) => {

    return (
        <Wrapper>
            <button className='btn' onClick={handlePrint}>
                <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M47.06,61.56a1.59,1.59,0,0,1-1.18-.51L30.68,45.88a1.67,1.67,0,0,1-.51-1.19,1.64,1.64,0,0,1,.51-1.18L33.05,41a1.63,1.63,0,0,1,2.37,0l6.3,6.3a1.12,1.12,0,0,0,1.91-.79V22.69A1.73,1.73,0,0,1,45.32,21h3.37a2,2,0,0,1,1.8,1.68v24a1.12,1.12,0,0,0,.7,1,1.11,1.11,0,0,0,1.22-.24l6.3-6.3a1.63,1.63,0,0,1,1.18-.5,1.65,1.65,0,0,1,1.18.5l2.35,2.37a1.63,1.63,0,0,1,0,2.37L48.24,61.05A1.6,1.6,0,0,1,47.06,61.56Zm5,6.65A15.84,15.84,0,0,0,54.14,75H24.5A4.49,4.49,0,0,1,20,70.5V55.27a1.73,1.73,0,0,1,1.69-1.68h3.39a1.72,1.72,0,0,1,1.68,1.68V66.53a1.72,1.72,0,0,0,1.68,1.68ZM56,67A12,12,0,1,1,68,79,12,12,0,0,1,56,67Zm19.52-2.81-8.07,8.08a1.46,1.46,0,0,1-2.15,0l-3.9-3.91a.69.69,0,0,1,0-1.07l1.07-1.08a.71.71,0,0,1,1.08,0L66.37,69l6.93-6.93a.7.7,0,0,1,1.08,0l1.07,1.08A.66.66,0,0,1,75.52,64.19Z" fill-rule="evenodd" /></svg>
            </button>
            <div >
                <Dropdown
                    icon1={
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" >
                            <path d="M79.4,39.1C76.5,27.2,64,20,50.2,20C33.5,20,20,33.4,20,50s13.5,30,30.3,30c23.2,0,21.4-11.8,14-16.4
                                c-4.4-2.8-6.8-9.1-2.4-13.6C70,41.6,83.1,55,79.4,39.1z M33.7,60c-3.5,0-6.3-2.8-6.3-6.2s2.8-6.2,6.3-6.2c3.5,0,6.2,2.8,6.2,6.2
                                S37.2,60,33.7,60z M35,36.2c0-3.5,2.8-6.2,6.2-6.2c3.5,0,6.2,2.8,6.2,6.2s-2.8,6.2-6.2,6.2C37.7,42.5,35,39.8,35,36.2z M48.7,72.5
                                c-3.5,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2c3.5,0,6.2,2.8,6.2,6.2S52.2,72.5,48.7,72.5z M60,40c-3.5,0-6.2-2.8-6.2-6.2
                                s2.8-6.2,6.2-6.2c3.5,0,6.2,2.8,6.2,6.2S63.5,40,60,40z"/>
                        </svg>
                    }
                    color={color}
                    preset={preset}
                    changeColorScheme={changeColorScheme}
                />
            </div>
            <button className='btn' onClick={handDel}>
                <svg width="100px" height="100px" viewBox="0 0 100 100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M20,33.34A13.43,13.43,0,0,1,33,19.91H66.56a13.45,13.45,0,0,1,0,26.89H33A13.44,13.44,0,0,1,20,33.34Zm13.44,7.53a7.53,7.53,0,1,0-7.52-7.53A7.58,7.58,0,0,0,33.44,40.87ZM20,66.46A13.44,13.44,0,0,1,33,53H66.56a13.45,13.45,0,0,1,0,26.89H33A13.43,13.43,0,0,1,20,66.46ZM67.06,57v0H32.94v0a9.53,9.53,0,0,0,0,19v0H67.06v0a9.53,9.53,0,0,0,0-19ZM66.56,73a6.53,6.53,0,1,1,6.52-6.52A6.58,6.58,0,0,1,66.56,73Z" /></svg>
            </button>
        </Wrapper>
    )
}

export default Resume


const Wrapper = styled.header`
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    position: absolute;
    top: 248px;
    left: 130px;
    transform: translate(-50%, -50%);
    // transition: transform 0.4s ease-in-out;
    align-content: center;
    justify-content: center;
    align-items: center;

    .btn {
        background-color: #fff;
        // box-shadow:0 0 .2px .2px #fff;
        display: block;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: 0;
        font-size: 2.4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn:active {
        background-color: #e6e6e6;
    }   
`
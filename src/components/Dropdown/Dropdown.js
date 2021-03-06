import React from 'react'
import styled from 'styled-components'

const Dropdown = ({ icon1, preset, changeColorScheme }) => {
    return (
        <Wrapper>
            <button className='color btn'>{icon1}</button>
            <ul className='sub-menu' tabIndex={1}>
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
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    font-size: 1.3rem;
    color: #fff;
    pointer-events: all;

    :focus-within .sub-menu {
        opacity: 1;
        visibility: initial;
        transform: translate(-50%, -50%);
    }

    .sub-menu {
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        width: 37rem;
        left: calc(100% + 22rem);
        top: 50%;

        padding: 1rem;
        border-radius: 1rem;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity, transform 0.3s ease;
        opacity: 1;
        visibility: hidden;
        transform: translate(-150%, -50%);

        @media (max-width: 50rem) {
            left: 50%;
            top: calc(100% + 22rem);
            transform: translate(-50%, -150%);
            flex-direction: column;
            width: auto;
        }
    }

    .sub-menu li {
        border-radius: 50%;
        margin: 0 1rem;
        transform-origin: top left;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        color: #fff;
        justify-content: center;

        @media (max-width: 50rem) {
            margin: 1rem 0;
        }
        :hover {
            opacity: 0.9;
        }
    }
`

export default Dropdown

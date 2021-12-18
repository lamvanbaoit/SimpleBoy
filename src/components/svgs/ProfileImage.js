import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

import SvgCamera from './Camera'

function ProfileImage({ ...props }) {
    // console.log({ ...props });
    const [selectedFile, setSelectedFile] = useState('')
    const [preview, setPreview] = useState('')

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }
    return (
        <Wrapper {...props}>
            <input
                type='file'
                id='user-image'
                className='user-image'
                onChange={onSelectFile}
                name='user-image'
                value=''
            />
            <label htmlFor='user-image'>
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${preview ? preview : ''})`,
                    }}
                ></div>
                <div
                    className='image-hover'
                    style={{ opacity: `${!preview ? 1 : ''}` }}
                >
                    <SvgCamera />
                    {('Select Picture')}
                </div>
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    height: 110px;
    width: 110px;
    background-color: #808080;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #333;
    position: relative;

    .image-hover {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: rgba(999, 999, 999, 0.8);
        transition: all 0.2s ease-ease-in-out;
        pointer-events: none;
    }

    :hover .image-hover {
        opacity: 1;
        color: #fff;
    }

    :hover .image {
        opacity: 0.8;
    }

    .user-image {
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
    }

    .image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        transition: opacity 0.3s ease-in;
        transition: background-color 0.3s ease-in;
        cursor: pointer;
    }

`

export default memo(ProfileImage)

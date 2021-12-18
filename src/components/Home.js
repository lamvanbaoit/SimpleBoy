import React, { useState } from 'react';
import Container from './Container/Container';
import Container2 from './Container/Container2';
import Display from './Display/Display';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Home() {
    const [check, setCheck] = useState(true);

    const handleResumeCheck = () => {
        setCheck(true);
    }

    const handleLetterCheck = () => {
        setCheck(false);
    }

    return (
        <>
            <Header />
            {/* <Header2 /> */}
            <Display handleResumeCheck={handleResumeCheck} handleLetterCheck={handleLetterCheck} />
            {
                check ? <Container /> : <Container2 />
            }
            <Footer />
        </>
    );
}

export default Home;
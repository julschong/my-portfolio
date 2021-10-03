import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero/index';
import About from './components/About/index';
import Project from './components/Project/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

import './App.scss';
import { useRef, useEffect, useState } from 'react';

function App() {
    const heroRef = useRef();
    const projectRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    return (
        <div className="app">
            <Hero ref={heroRef} aboutRef={aboutRef} />
            <HeaderNav
                heroRef={heroRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
                projectRef={projectRef}
            />
            <About ref={aboutRef} />
            <Project ref={projectRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
}

export default App;

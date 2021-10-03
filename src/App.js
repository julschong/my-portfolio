import HeaderNav from './sections/HeaderNav';
import Hero from './sections/Hero/index';
import About from './sections/About/index';
import Project from './sections/Project/index';
import Contact from './sections/Contact/index';
import Footer from './sections/Footer/index';

import './App.scss';
import { useRef } from 'react';

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

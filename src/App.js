import HeaderNav from './sections/HeaderNav';
import Hero from './sections/Hero/index';
import About from './sections/About/index';
import Project from './sections/Project/index';
import Contact from './sections/Contact/index';
import Footer from './sections/Footer/index';

import './App.scss';
import { useEffect, useRef, useState } from 'react';

function App() {
    const heroRef = useRef();
    const projectRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    const scrollTimer = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    function disablePointerEvent() {
        document.body.classList.add('disable-hover');

        if (scrollTimer.current !== null) {
            clearTimeout(scrollTimer.current);
        }
        scrollTimer.current = setTimeout(function () {
            document.body.classList.remove('disable-hover');
        }, 250);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        window.addEventListener('scroll', disablePointerEvent);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
            window.removeEventListener('scroll', handleWindowSizeChange);
        };
    }, []);

    let isMobile = width <= 768;

    return (
        <div className="app">
            <Hero ref={heroRef} aboutRef={aboutRef} />
            <HeaderNav
                heroRef={heroRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
                projectRef={projectRef}
            />
            <About ref={aboutRef} isMobile={isMobile} />
            <Project ref={projectRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
}

export default App;

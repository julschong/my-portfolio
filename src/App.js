import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero/index';
import About from './components/About/index';
import Project from './components/Project/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

import './App.scss';
import { useRef } from 'react';

function App() {
    const aboutRef = useRef();
    return (
        <div className="app">
            <Hero aboutRef={aboutRef} />
            <HeaderNav />
            <About ref={aboutRef} />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

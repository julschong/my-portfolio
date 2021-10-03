import { useRef, useState, useEffect } from 'react';
import './HeaderNav.scss';

const HeaderNav = (props) => {
    const navRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });
    }, []);

    if (navRef.current && scrollY > navRef.current.offsetTop) {
        return (
            <>
                <div className="nav-space-holder" ref={navRef}></div>
                <nav
                    className="nav"
                    style={{
                        position: 'fixed'
                    }}
                >
                    <ul>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#my-work">PROJECT</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }

    return (
        <nav className="nav" ref={navRef}>
            <ul>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#my-work">PROJECT</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;

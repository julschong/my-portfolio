import { useRef, useState, useEffect, forwardRef } from 'react';
import './HeaderNav.scss';

const HeaderNav = forwardRef(
    ({ heroRef, aboutRef, projectRef, contactRef }, ref) => {
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
                                <button
                                    onClick={() => {
                                        heroRef.current.scrollIntoView();
                                    }}
                                >
                                    HOME
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        aboutRef.current.scrollIntoView();
                                    }}
                                >
                                    ABOUT
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        projectRef.current.scrollIntoView();
                                    }}
                                >
                                    PROJECT
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        contactRef.current.scrollIntoView();
                                    }}
                                >
                                    CONTACT
                                </button>
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
                        <button
                            onClick={() => {
                                heroRef.current.scrollIntoView();
                            }}
                        >
                            HOME
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                aboutRef.current.scrollIntoView();
                            }}
                        >
                            ABOUT
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                projectRef.current.scrollIntoView();
                            }}
                        >
                            PROJECT
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                contactRef.current.scrollIntoView();
                            }}
                        >
                            CONTACT
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
);

export default HeaderNav;

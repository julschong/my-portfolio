import { useRef, useState, useEffect, forwardRef } from 'react';
import './HeaderNav.scss';

const HeaderNav = forwardRef((props, ref) => {
    const { heroRef, aboutRef, projectRef, contactRef } = props;

    const navRef = useRef();
    const [pageYOffset, setPageYOffset] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPageYOffset(window.pageYOffset);
        });
    }, []);

    return (
        <nav className="nav" ref={navRef}>
            <NavList
                heroRef={heroRef}
                aboutRef={aboutRef}
                projectRef={projectRef}
                contactRef={contactRef}
                scrollY={pageYOffset}
            />
        </nav>
    );
});

const NavList = (props) => {
    const { heroRef, aboutRef, projectRef, contactRef, scrollY } = props;

    const [offsetTopArray, setOffsetTopArray] = useState([]);
    useEffect(() => {
        setOffsetTopArray([
            heroRef.current.offsetTop - 5,
            aboutRef.current.offsetTop - 5,
            projectRef.current.offsetTop - 5,
            contactRef.current.offsetTop - 5
        ]);
    }, [aboutRef, contactRef, projectRef, heroRef]);

    return (
        <ul>
            <li>
                <button
                    onClick={() => {
                        heroRef.current.scrollIntoView();
                    }}
                    style={{
                        textDecoration:
                            scrollY >= offsetTopArray[0] &&
                            scrollY < offsetTopArray[1]
                                ? 'underline'
                                : 'none'
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
                    style={{
                        textDecoration:
                            scrollY >= offsetTopArray[1] &&
                            scrollY < offsetTopArray[2]
                                ? 'underline'
                                : 'none'
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
                    style={{
                        textDecoration:
                            scrollY >= offsetTopArray[2] &&
                            scrollY < offsetTopArray[3]
                                ? 'underline'
                                : 'none'
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
                    style={{
                        textDecoration:
                            scrollY >= offsetTopArray[3] ? 'underline' : 'none'
                    }}
                >
                    CONTACT
                </button>
            </li>
        </ul>
    );
};

export default HeaderNav;

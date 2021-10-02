import { useEffect, useState } from 'react';
import './HeaderNav.scss';

const HeaderNav = () => {
    // const [scrollPosition, setScrollPostion] = useState();

    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => {
    //         console.log(e);
    //     });
    // }, []);

    return (
        <nav className="nav">
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

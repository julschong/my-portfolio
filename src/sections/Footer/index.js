import './Footer.scss';

import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineMail,
    AiFillPhone
} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="find-me-on-group">
                <a
                    href="https://github.com/julschong"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub size={40} />
                </a>
                <a
                    href="https://www.linkedin.com/in/julschong7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillLinkedin size={40} />
                </a>
                <a
                    href="mailto:7julius.lee@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineMail size={40} />
                </a>
                <a href="tel:5626069973" target="_blank" rel="noreferrer">
                    <AiFillPhone size={40} />
                </a>
            </div>
            <p>Julius Lee ©2021</p>
        </footer>
    );
};

export default Footer;

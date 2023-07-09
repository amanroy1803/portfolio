import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aman</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#" className="footer__link"></a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/aman-kumar-roy-4489b1200/" className="home__social-icon" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/amanroy1803" className="home__social-icon" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    {/* <a href="https://github.com/amanroy1803" className="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a> */}
                </div>

                <span className="footer__copy">&#169; Aaman Roy. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer
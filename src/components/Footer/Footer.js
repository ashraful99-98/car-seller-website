import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../image/images.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <footer class="container p-5">
                <div class="grid row row-cols-2 row-cols-md-4 g-2">
                    <div class="g-col-6">
                        <div className="footer-Part">
                            <img width="100px" src={logo1} alt="" />
                            <h5>Get In Touch</h5>
                            <div className="d-flex">
                                <p><FontAwesomeIcon icon={faPhone} /></p> <p className="ml-2"></p>
                                <p>01721-3+35+</p>
                            </div>
                            <div className="d-flex">
                                <p><FontAwesomeIcon icon={faEnvelope} /> </p> <p className="ml-2"></p>
                                <p>interestingconceot@gmail.com</p>
                            </div>
                            <div className="d-flex">
                                <p><FontAwesomeIcon icon={faHouseUser} /></p> <p className="ml-2">
                                    145,3ed floor,Houseing State</p>
                            </div>
                            <p><small>© 2021 IC All right reserved</small></p>
                        </div>
                    </div>
                    <div class="g-col-1 pl-3">
                        <div>
                            <h6>ABOUT</h6>
                            <p>Question</p>
                            <p>Contact Us</p>
                            <p>Help Center</p>
                            <p>Site Map</p>
                        </div>
                    </div>
                    <div class="g-col-2">
                        <div className="footer-Part">
                            <h6>HELP & GUIDE</h6>
                            <p>Term Of Use</p>
                            <p>Privacy Policy</p>
                            <p>Like & Share</p>
                        </div>
                    </div>
                    <div class="g-col-3">
                        <div className="footer-Part">
                            <h6>NEWSLETTER</h6>
                            <p><small>Don’t miss out thousands of great deals & promotions.</small></p>
                            <input type="text" placeholder="review here..." />
                            <button className="card-btn mt-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
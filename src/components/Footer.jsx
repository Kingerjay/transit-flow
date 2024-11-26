import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from '../assets/Transitflow-logo.png'
import phoneIcon from '../assets/Phone-icon.svg'
import emailIcon from '../assets/Mail-icon.svg'

function Footer() {
  return (
    <div className ='footer'>

        {/* Footer Top */}
        <div className="footer-top">

            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>

        </div>
        {/* End of Footer Top */}

        {/* Footer Flex */}
        <div className="footer-flex">

            {/* Footer Contact */}
            <div className="footer-contact">
                
                <img src={logo} alt="" />

                {/* Footer contact content */}
                <div className='footer-contact-content'>
                <p className='footer-contact-text'>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>

                            {/* Email  Div */}
                    <div className="email-div">
                    {/* email svg div */}
                    <div className="email-logo">
                        <img src={emailIcon} alt="" />
                    </div>

                    {/* email svg text */}
                    <div className="email-text">
                        <p>Email</p>
                        <p>contact@logistics.com</p>
                    </div>
                    </div>
                    {/* End of email div */}

                    {/* phone  Div */}
                    <div className="phone-div">
                    {/* phone svg div */}
                    <div className="phone-logo">
                        <img src={phoneIcon} alt="" />
                    </div>

                    {/* phone svg text */}
                    <div className="phone-text">
                        <p>Call Us </p>
                        <p>(00) 112 365 489</p>
                    </div>
                    </div>
                    {/* End of phone div */}
                    </div>
                    {/* End of Footer contact content */}


            </div>
            {/* End of Footer Contact */}

            {/* Footer Pages */}
            <div className="footer-pages">

                <p className='footer-header'>Pages</p>

                {/* Pages Content List */}
                
                <ul>
                    <li>About US</li>
                    <li>Our Team</li>
                    <li>Our Project</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                
                {/* End of Pages Content List */}

            </div>
            {/* End of Footer Pages */}

            {/* Footer Utility */}
            <div className="footer-utility">

                <p className='footer-header'>Pages</p>

                {/* Utility Content List */}
                <ul>
                    <li>Style Guide</li>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>Protected</li>
                    <li>Not found</li>
                </ul>
                {/* End of Utility Content List */}


            </div>
            {/* End of Footer utility */}

            {/* Footer Subscribe */}
            <div className="footer-sub">
                <p className='footer-header'>Subscribe</p>

                {/* subscribe input */}
                <div className="sub-section">
                    <input type="text" placeholder='Email here*'/>

                    {/* Sub Flex */}
                    <div className="sub-flex">

                        {/* footer button */}
                        <button>Send Now</button>
                        {/* end of footer button */}

                        {/* Footer Socials */}
                        <div className="footer-socials">
                            <a href=""><FaLinkedinIn /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaFacebook /></a>
                        </div>
                        {/* End of Footer Socials */}

                    </div>
                    {/* end of Sub Flex */}

                </div>
                {/* End of subscribe input */}

            </div>
            {/* End of Footer Subscribes */}

        </div>
        {/* End of Footer Flex */}

        {/* Footer Bottom */}
        <div className="footer-bottom">

            {/* Bottom flex */}
            <div className="bottom-flex">
                <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>

                <ul className='bottom-list'>
                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                    <li>Password</li>
                </ul>

            </div>
            {/* End of Bottom flex */}

        </div>
        {/* End of Footer Bottom */}

    </div>
  )
}

export default Footer
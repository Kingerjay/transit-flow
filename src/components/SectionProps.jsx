import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SectionProps({img, subText, heroHeader, heroText, heroButton, heroBtnImg }) {
  return (
    <div className='hero-section' style={{ backgroundImage: `url(${img})` }}>

    {/* End of Hero Nav Container */}
    <div className="hero-nav-container">
    {/* Hero Navigation */}
    <div className="hero-nav">

        {/* hero nav left */}
        <div className="hero-nav-left">
            <ul>
                <li className='border-right'><a href="">Home</a></li>
                <li className='border-right'><a href="">About</a></li>
                <li className='border-right'><a href="">Pages<MdOutlineKeyboardArrowDown /></a></li>
                <li className='border-right'><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        {/* end of hero nav left */}

        {/* hero nav right */}
        <div className="hero-nav-right">

            {/* hero social icons */}
            <div className="hero-social-icons">
                <a href=""><FaInstagram /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaLinkedinIn /></a>    
            </div>
            {/* End of hero social icons */}

            {/* Hero Request Quote */}
            <div className="hero-request">
                <p>Request Quote</p>
            </div>
            {/* End of Hero Request Quote */}

        </div>
        {/* end of hero nav right */}

    </div>
    {/* End of Hero Navigation */}
    </div>
    {/* End of Hero Nav Container */}


    {/* Hero Bottom */}
    <div className="hero-bottom">
    {/* Hero Content */}
    <div className="hero-content">
        <p className='hero-subtext'>{subText}</p>
        <p className='hero-header'>{heroHeader}</p>
        <p className='hero-text'>{heroText}</p>
        <p className='hero-button' style={{ backgroundImage: `url(${heroBtnImg})` }}><a href="">{heroButton}</a></p>   
    </div>
    {/* End of Hero Content */}
    </div>
    {/* End of Hero Bottom */}


    </div>
  )
}

export default SectionProps
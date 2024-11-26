import React from 'react'
import logo from '../assets/Transitflow-logo.png'
import timeIcon from '../assets/Time-icon.svg'
import phoneIcon from '../assets/Phone-icon.svg'
import emailIcon from '../assets/Mail-icon.svg'

function Navbar() {
  return (
    <nav>

    <div className='nav-bar'>

      {/* logo Div */}
      <div className='logo'>
        <img src={logo} alt="" />
      </div>

      {/* Right Nav */}
      <div className="right-nav">

        {/* Time  Div */}
        <div className="time-div">
          {/* time svg div */}
          <div className="time-logo">
            <img src={timeIcon} alt="" />
          </div>

          {/* time svg text */}
          <div className="time-text">
            <p>Mon - Sat 9.00 - 18.00</p>
            <p>Sunday Closed</p>
          </div>
        </div>
        {/* End of time div */}

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
      {/* End of Right Nav */}

    </div>

    </nav>
  )
}

export default Navbar
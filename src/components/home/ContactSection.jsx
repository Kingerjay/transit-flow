import React from 'react'
import timeIcon from '/src/assets/Time-icon.svg'
import phoneIcon from '/src/assets/Phone-icon.svg'
import emailIcon from '/src/assets/Mail-icon.svg'
import img1 from '/src/assets/contact-img1.png'
import img2 from '/src/assets/contact-img2.png'
import img3 from '/src/assets/contact-img3.png'
import img4 from '/src/assets/contact-img4.png'

function ContactSection() {
  return (
    <div className='contact-section'>

        {/* Contact Flex */}
        <div className="contact-flex">
            
            {/* Contact flex  1 */}
            <div className="contact-flex1">
                <p className='contact-subtext'>Contact</p>
                <p className='contact-header'>Get in touch with us</p>
                <p className='contact-us'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>

                {/* Contact Details */}
      <div className="contact-details">

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
      {/* End of Contact Details */}



            </div>
            {/* End of Contact flex  1 */}


            {/* Contact flex  2 */}
            <div className="contact-flex2">

                <form action="">

                    {/* Name and Email text */}
                    <div className="name-and-email">
                        <input type="text" placeholder="Your Name*" className='input-text'/>
                        <input type="text" placeholder="Email*" className='input-text'/>
                    </div>
                    {/* End of Name and Email text */}

                    {/* Number and City text */}
                    <div className="number-and-city">
                        <input type="text" placeholder="Phone Number*" className='input-text'/>
                        <input type="text" placeholder="City*" className='input-text'/>
                    </div>
                    {/* End of Name and Email text */}

                    {/* Message text */}
                    <div className="message">
                        <input type="text" placeholder="Your Message*"  className='messagebox'/>
                    </div>
                    {/* End of Message text */}

                    <button className='input-button'>Submit Message</button>

                </form>

            </div>
            {/* End of Contact flex  2 */}

        </div>
        {/* End of Contact Flex */}

        {/* Contact Images */}
        <div className="contact-images">
            <img src={img1}alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        {/* Ennd of Contact Images */}

    </div>
  )
}

export default ContactSection
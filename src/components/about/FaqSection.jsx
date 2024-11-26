import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import img1 from '/src/assets/faq-img.png'
import phoneIcon from '/src/assets/Phone-icon.svg'

function FaqSection() {
  return (
    <div className='faq-section'>

        {/* Faq Flex */}
        <div className="faq-flex">

            {/* Flex 1 */}
            <div className="faq-flex1">

                {/* Faq Header */}
                <div className="faq-header">
                    <p className='faq-subtext'>FAQ</p>
                    <p className='faq-head'>Frequently Asked Questions</p>
                </div>
                {/* End of Faq Header */}

                {/* Faq Content */}
                <div className="faq-content">

                    {/* Content 1 */}
                    <div className="faq-content1">
                        <div>
                        <p className='faq-text'>How can I pay for your logistics services?</p>
                        <p className='faq-text2'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
                        </div>

                        <a href=""><IoIosArrowDown /></a>
                    </div>
                    {/* End of Content 1 */}

                    {/* Content 1 */}
                    <div className="faq-content1">
                        <p className='faq-text'>What payment methods are supported?</p>

                        <a href=""><RiArrowRightSLine /></a>
                    </div>
                    {/* End of Content 1 */}

                    {/* Content 1 */}
                    <div className="faq-content1">
                        <p className='faq-text'>What options for logistics plans are available?</p>

                        <a href=""><RiArrowRightSLine /></a>
                    </div>
                    {/* End of Content 1 */}

                    {/* Content 1 */}
                    <div className="faq-content1">
                        <p className='faq-text'>Can i specify a delivery date when ordering?</p>

                        <a href=""><RiArrowRightSLine /></a>
                    </div>
                    {/* End of Content 1 */}

                </div>
                {/* End of Faq Content */}

            </div>
            {/* End of Flex 1 */}


            {/* Flex 2 */}
            <div className="faq-flex2">
                <img src={img1} alt="" />

                {/* Talk */}
                <div className="talk">
                    <p className='talk-subtext'>Let’s Talk</p>
                    <p className='talk-head'>You need any help? get free consultation</p>

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

                    {/* Faq Button */}
                    <button>Contact us</button>
                    {/* End of Faq Button */}
                                
                </div>
                {/* End of Talk */}

            </div>
            {/* End of Flex 2 */}

        </div>
        {/* End of Faq Flex */}

    </div>
  )
}

export default FaqSection
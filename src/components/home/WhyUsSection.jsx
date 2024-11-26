import React from 'react'
import img from '/src/assets/why-us-img.jpg'
import img2 from '/src/assets/why-us-flex-img.jpg'
import img3 from '/src/assets/why-us-img2.png'
import icon1 from '/src/assets/delivery-icon.svg'
import icon2 from '/src/assets/optimized-icon.svg'
import icon3 from '/src/assets/counter-icon.svg'

function WhyUsSection() {
  return (

    <div className='why-us-section'>

        {/* Why us Image */}
        <div className="why-us-image">
            <img src={img} alt="" />
        </div>
        {/* End of Why us Image */}

        {/* Why us Container */}
        <div className="why-us-con">

            {/* Why us Flex */}
            <div className="why-us-flex">

                {/* why us flex 1 */}
                <div className="why-us-flex1">
                    <p className='why-us-subtext'>Why Us</p>
                    <p className='why-us-header'>We provide full range global logistics solution</p>
                    <p className='why-us-text'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                    <p className='why-us-text'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                    {/* Why us Content */}
                    <div className="why-us-content">

                        {/* content 1 */}
                        <div className="why-us-content1">
                            <img src={icon1} alt="" />
                            <p className='why-us-content-text'>Delivery on Time</p>
                        </div>
                        {/* end of content 1 */}

                        {/* content 2 */}
                        <div className="why-us-content2">
                            <img src={icon2} alt="" />
                            <p className='why-us-content-text'>Optimized Travel Cost</p>
                        </div>
                        {/* end of content 2 */}

                    </div>
                    {/* End of Why us Content */}
                </div>
                {/* End of why us flex 1 */}

                {/* why us flex 2 */}
                <div className="why-us-flex2">
                    <img src={img2} alt="" />

                    {/* Why us image 2 */}
            <div className="why-us-img2">
                <img src={img3} alt="" />
            </div>
            {/* End of Why us image 2 */}
                </div>
                {/* End of why us flex 2 */}

            </div>
            {/* End of Why us Flex */}


            {/* Why us Counter */}
            <div className="why-us-counter">

                {/* left Counter */}
                <div className="left-counter">
                    <p className='counter-text1'>1294</p>
                    <img src={icon3} alt="" />
                    <p className='counter-text2'>Delivered Packages</p>
                </div>
                {/* End of  left Counter */}

                {/* Right Counter */}
                <div className="right-counter">
                    <p className='counter-text1'>3594</p>
                    <img src={icon3} alt="" />
                    <p className='counter-text2'>Satisfied Clients</p>
                </div>
                {/* End of  Right Counter */}

            </div>
            {/* End of Why us Counter */}

        </div>
        {/* End of Why us Container */}

    </div>


  )
}

export default WhyUsSection
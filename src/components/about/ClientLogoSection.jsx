import React from 'react'
import img1 from '/src/assets/contact-img1.png'
import img2 from '/src/assets/about-img2.png'
import img3 from '/src/assets/about-img3.png'
import img4 from '/src/assets/about-img4.png'

function ClientLogoSection() {
  return (
    <div className='client-section'>

        {/* Client Flex */}
        <div className="client-flex">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        {/* End of Client Flex */}

    </div>
  )
}

export default ClientLogoSection
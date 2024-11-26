import React from 'react'
import seaIcon from '/src/assets/sea-icon.svg'
import warehouseIcon from '/src/assets/warehouse-icon.svg'
import airIcon from '/src/assets/air-icon.svg'
import localIcon from '/src/assets/local-icon.svg'
import projectIcon from '/src/assets/project-icon.svg'
import customerIcon from '/src/assets/customer-icon.svg'

function ServicesSection() {
  return (
    <div className='service-section'>

        {/* Service COntainer */}
        <div className="service-con">


            {/* Service header */}
            <div className="service-header">
                <p className='service-subtext'>What We Do</p>
                <p className='service-head'>Our Logistics Services</p>
            </div>
            {/* ENd of Service header */}

            {/* Service Grid */}
            <div className="service-grid">

                {/* Grid 1 */}
                <div className="service-grid1">
                    <img src={seaIcon} alt="" />
                    <p className='service-grid-text1'>Sea Transport Services</p>
                    <p className='service-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 1 */}

                {/* Grid 2 */}
                <div className="service-grid1">
                    <img src={warehouseIcon} alt="" />
                    <p className='service-grid-text1'>Warehousing Services</p>
                    <p className='service-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 2 */}

                {/* Grid 3 */}
                <div className="service-grid1">
                    <img src={airIcon} alt="" />
                    <p className='service-grid-text1'>Air Fright Services</p>
                    <p className='servicprojectIcone-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 3 */}

                {/* Grid 4 */}
                <div className="service-grid1">
                    <img src={projectIcon} alt="" />
                    <p className='service-grid-text1'>Project & Exhibition</p>
                    <p className='service-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 4 */}

                {/* Grid 5 */}
                <div className="service-grid1">
                    <img src={localIcon} alt="" />
                    <p className='service-grid-text1'>Local Shipping Services</p>
                    <p className='service-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 5 */}

                {/* Grid 6 */}
                <div className="service-grid1">
                    <img src={customerIcon} alt="" />
                    <p className='service-grid-text1'>Customer Clearance</p>
                    <p className='service-grid-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
                {/* End of Grid 6 */}

            </div>
            {/* End of Service Grid */}

            {/* Service Button */}
            <div className="service-button">
                <button>More Works</button>
            </div>
            {/* End of Service Button */}

        </div>
        {/* End of Service COntainer */}

    </div>
  )
}

export default ServicesSection
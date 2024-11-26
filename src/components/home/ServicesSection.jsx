import React from 'react'
import seaIcon from '/src/assets/sea-icon.svg'
import warehouseIcon from '/src/assets/warehouse-icon.svg'
import airIcon from '/src/assets/air-icon.svg'
import localIcon from '/src/assets/local-icon.svg'


function ServicesSection() {
  return (
    <div className ='service-section'>

        {/* Service Section Flex */}
        <div className="service-section-flex">

            {/* service section flex 1 */}
            <div className="service-section-flex1">
                <p className='service-subtext'>What We Do</p>
                <p className='service-head'>Safe & Reliable Cargo Solutions</p>
            </div>
            {/* End of service section flex 1 */}

            {/* service section flex 2 */}
            <div className="service-section-flex2">
                
                {/* Sea div */}
                <div className="sea">

                    <div className='sea-icon'>
                        <img src={seaIcon} alt="" className='service-icons'/>
                    </div>
                    <div className='sea-text'>
                        <p className='service-text'>Sea Transport Services</p>
                        <p className='service-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>                 

                </div>
                {/* End of Sea div */}

                {/* Warehouse div */}
                <div className="warehouse">

                    <div className='warehouse-icon'>
                        <img src={warehouseIcon} alt="" className='service-icons' />
                    </div>

                    <div className='warehouse-text'>
                        <p className='service-text'>Warehousing Services</p>
                        <p className='service-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>                 

                </div>
                {/* End of Warehouse div */}

                {/* Air div */}
                <div className="air">

                    <div className='air-icon'>
                        <img src={airIcon} alt="" className='service-icons' />
                    </div>
                    
                    <div className='air-text'>
                        <p className='service-text'>Air Fright Services</p>
                        <p className='service-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>                 

                </div>
                {/* End of Air div */}

                {/* Local div */}
                <div className="local">

                    <div className='local-icon'>
                        <img src={localIcon} alt="" className='service-icons' />
                    </div>
                    
                    <div className='local-text'>
                        <p className='service-text'>Local Shipping Services</p>
                        <p className='service-text2'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>                 

                </div>
                {/* End of Local div */}


            </div>
            {/* End of service section flex 2 */}

        </div>
        {/* End of Service Section Flex */}

    </div>
  )
}

export default ServicesSection
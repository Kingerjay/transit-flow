import React from 'react'
import seaIcon from '/src/assets/sea-icon.svg'
import warehouseIcon from '/src/assets/warehouse-icon.svg'
import airIcon from '/src/assets/air-icon.svg'
import localIcon from '/src/assets/local-icon.svg'
import { IconBase } from 'react-icons'


function ServicesSection() {
    const services =[
        {   Icon:seaIcon,
            title:"Sea Transport Services" , subtitle:"Following the quality of our service thus having gained trust of our many clients."
        },

        {   Icon:warehouseIcon,
            title:"Warehousing Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients."
        },

        {   Icon:airIcon,
            title:"Air Fright Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients."
        },

        {   Icon:localIcon,
            title:"Local Shipping Services" , subtitle:"Following the quality of our service thus having gained trust of our many clients."
        }
        
    ]
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
                {services.map((service,index)=>(
                    <div key={index}>

                        <div className="sea">
                          <div className='sea-icon'>
                       <img src={service.Icon} alt=""  className='service-icons'/>
                    </div>
                        
                        <div className='sea-text'>
                        <p className='service-text'>{service.title}</p>
                        <p className='service-text2'>{service.subtitle}</p>
                        </div>

                        </div>

                    </div>
                ))}
               

            </div>
            {/* End of service section flex 2 */}

        </div>
        {/* End of Service Section Flex */}

    </div>
  )
}

export default ServicesSection
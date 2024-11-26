import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import expert1 from '/src/assets/expert1.png'
import expert2 from '/src/assets/expert2.png'
import expert3 from '/src/assets/expert3.png'

function TeamSection() {
  return (
    <div className='team-section'>

        {/* Team Container */}
        <div className="team-con">
            
            {/* Team Header */}
            <div className="team-head">
            <p className='team-subtext'>The Transporters</p>
            <p className='team-header'>Meet Expert Team</p>
            </div>
            {/* End of Team Header */}

            {/* Team Flex */}
            <div className="team-flex">

                {/* Team Flex 1 */}
                <div className="team-flex1">
                    <img src={expert1} alt="" />

                    {/* Team Text */}
                    <div className="team-text">
                    <p>Jessca Arow</p>
                    <p>Designer</p>
                    </div>
                    {/* End of Team Text */}
                    
                    {/* Team Social */}
                    <div className="team-social">
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    {/* End of Team Social */}
                </div>
                {/* End of Team Flex 1 */}

                {/* Team Flex 2 */}
                <div className="team-flex1">
                    <img src={expert2} alt="" />

                    {/* Team Text */}
                    <div className="team-text">
                    <p>Kathleen Smith</p>
                    <p>Designer</p>
                    </div>
                    {/* End of Team Text */}

                    {/* Team Social */}
                    <div className="team-social">
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    {/* End of Team Social */}
                </div>
                {/* End of Team Flex 2 */}

                {/* Team Flex 3 */}
                <div className="team-flex1">
                    <img src={expert3} alt="" />

                    {/* Team Text */}
                    <div className="team-text">
                    <p>Rebecca Tylor</p>
                    <p>Designer</p>
                    </div>
                    {/* End of Team Text */}

                    {/* Team Social */}
                    <div className="team-social">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    {/* End of Team Social */}
                </div>
                {/* End of Team Flex 3 */}


            </div>
            {/* End of Team Flex */}

        </div>
        {/* End of Team Container */}
    </div>
  )
}

export default TeamSection
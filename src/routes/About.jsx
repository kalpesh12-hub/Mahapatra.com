import React from 'react';
import "../routes/about.css";
import overview from "../assets/overview.svg"
import Features from '../pageComponents/Features';
import Card from '../pageComponents/Card';
import Mission from '../pageComponents/Mission';
import Culturecard from '../pageComponents/Culturecard';
import Governance from '../pageComponents/Corporate/Governance';



const About = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container col-md-12">
          <div className="row">
            <div className="col-md-6">
              <h2 className='overview-header-text'>Overview</h2>

              <p className='overview-para-text'>The Mahapatra Universal Limited is a global enterprise, headquartered in India, with five subsidiaries across eleven verticals. The Company operates in more than seven countries across three continents, with a mission 'To improve the quality of life of the communities we serve globally, through long-term stakeholder value creation based on Leadership with Trust’.</p>

              <p>The Company with diversified interests across various sectors including Manufacturing, Engineering, Infrastructure, Information & Technology, Consumer and Retail, Financial Services, Healthcare, Sports, Media and Entertainment. It has taken pioneering initiatives across many sectors that it operates in and has overcome every challenge to provide healthy contribution towards the country’s growth at large and the community we serve in particular. Our greatest strength is its highly experienced and proficient in-house talent pool. In collaboration with global corporate houses in different sectors has brought international expertise to India reflecting excellence and advancement in all its endeavours.</p>
            </div>
            <div className="col-md-6">
              <img src={overview} alt="" className='image-container' />
            </div>
          </div>
        </div>

        <Features />
        <Card />
        <Mission />
        <Culturecard />
        <Governance />
      </div>
    </>
  )
}

export default About
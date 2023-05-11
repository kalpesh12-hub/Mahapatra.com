import React from 'react';
import "../routes/home.css";
import Marquee from 'react-fast-marquee';
import Card01 from "../assets/Card01.svg";
import Card02 from "../assets/Card02.svg";
import Card03 from "../assets/Card03.svg";
import Card04 from "../assets/Card04.svg";
import Card05 from "../assets/Card05.svg";
import Contact from "../routes/Contact"
import { useNavigate } from 'react-router-dom';
import HomeContainer from '../pageComponents/Home/HomeContainer';

const Home = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };


  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <div className="col-md-12">
            <div className="container home-container-wrapper">
              <h1 className="home-header">Create long-term value</h1>
              <p className="home-paragraph">The Mahapatra Universal Limited is a global enterprise, headquartered in India, with five subsidiaries across eleven verticals. Our mission is to improve the quality of life of the communities we serve globally, through long-term stakeholder value creation based on Leadership with Trust.</p>
            </div>
            <center>
              <button className='btn btn-container' onClick={navigateToContacts}>
                <span className='btn-span'>Contact Us</span>
              </button>
            </center>

            <Marquee pauseOnHover>
              <img src={Card01} alt="" className='image-marquee' />
              <img src={Card02} alt="" className='image-marquee' />
              <img src={Card03} alt="" className='image-marquee' />
              <img src={Card04} alt="" className='image-marquee' />
              <img src={Card05} alt="" className='image-marquee' />
            </Marquee>
          </div>
          <HomeContainer />
          <Contact className='my-20' />
        </div>

      </div>
    </>
  )
}

export default Home
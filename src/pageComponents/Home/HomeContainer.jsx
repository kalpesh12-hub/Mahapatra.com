import React from 'react';
import "./homecontainer.css";
import { useNavigate } from 'react-router-dom';
import cardimg1 from "../../assets/cardimg-1.svg";
import cardimg2 from "../../assets/cardimg-2.svg";
import Excellence1 from "../../assets/Excellence1.svg";
import Excellence2 from "../../assets/Excellence2.svg";
import Excellence3 from "../../assets/Excellence3.svg";
import Accelerate1 from "../../assets/Accelerate1.svg";
import Accelerate2 from "../../assets/Accelerate2.svg";
import Accelerate3 from "../../assets/Accelerate3.svg";

const HomeContainer = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // navigate to explore section 
    navigate('/explore');
  };
  return (
    <>
      {/* Careating Value for All */}
      <div className="container mt-5">
        <div className="col-md-12">
          <div className="heading-container-section">
            <h1 className="heading-section-container">Creating Value for All</h1>
            <p className='para-container-data'>
              We strive to create long-term value for all our stakeholders, from our customers, shareholders, and employees to the communities we serve. Our diversified interests across various sectors enable us to tackle any challenge and provide sustainable growth for the benefit of all.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-5 md:p-2 mt-5">
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={cardimg1} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg">
                  <div className="text-slate-700 dark:text-slate-500">
                    Leadership, innovation, trust.
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para">
                    “We are committed to delivering excellence in all our endeavors. Our highly experienced and proficient in-house talent pool collaborates with global corporate houses to bring international expertise to India.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={cardimg2} alt="" />
              <div className="pt-6 text-center space-y-4">
                <figcaption className="text-lg">

                  <div className="text-slate-700 dark:text-slate-500">
                    Making life better globally.
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para">
                    “Our mission is to improve the quality of life of the communities we serve, through long-term stakeholder value creation. We are dedicated to creating a positive impact, and making life better globally.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>
        </div>
      </div>


      {/* Experience Excellence Globally */}
      <div className="container mt-20">
        <div className="col-md-12">
          <div className="heading-container-section">
            <h1 className="heading-section-container">Experience Excellence Globally</h1>
            <p className='para-container-data'>
              Mahapatra Universal Limited is a global enterprise with five subsidiaries across eleven verticals. We are driven by a mission to improve the quality of life of the communities we serve globally, through long-term stakeholder value creation based on Leadership with Trust. Our expertise spans a variety of sectors including Manufacturing, Engineering, Infrastructure, Information & Technology, Consumer and Retail, Financial Services, Healthcare, Sports, Media and Entertainment. We strive to bring international expertise to India, reflecting excellence and advancement in all our endeavours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-5 md:p-2 mt-5">
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Excellence1} alt="" />
              <div className="pt-6 text-start space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    Pioneering Initiatives
                  </div>
                  <div className="text-head">
                    Innovative solutions.
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para text-start">
                    “Our proficient in-house talent pool is our greatest strength. We have successfully taken pioneering initiatives across many sectors and have overcome every challenge to make a healthy contribution to the country’s growth. Our collaborations with global corporate houses have enabled us to make a positive impact on the communities we serve.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>

          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Excellence2} alt="" />
              <div className="pt-6 text-start space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    3 days ago
                  </div>
                  <div className="text-head">
                    Global Reach & Impact
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para text-start">
                    “Operating in more than seven countries across three continents, we are determined to bring about positive change through our efforts. Our commitment to excellence and dedication to creating long-term value is what sets us apart from the competition.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>

          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Excellence3} alt="" />
              <div className="pt-6 text-start space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    Leadership With Trust
                  </div>
                  <div className="text-head">
                    Transformative Solutions.
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para text-start">
                    “We believe in the power of collaboration, and strive to create a mutually beneficial relationship with our stakeholders. Our core values of Leadership with Trust enable us to create sustainable solutions for our clients and the communities we serve.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>
        </div>

        <center>
          <button className='btn btn-container mt-2' onClick={navigateToContacts}>
            <span className='btn-span'>Explore</span>
          </button>
        </center>
      </div>


      {/*Accelerate Growth  */}
      <div className="container my-20">
        <div className="col-md-12">
          <div className="heading-container-section">
            <h1 className="heading-section-container">Accelerate Growth</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-5 md:p-2 mt-5">
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Accelerate1} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    Solutions
                  </div>
                  <div className="text-head">
                    Strategies
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>

          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Accelerate2} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    Innovation
                  </div>
                  <div className="text-head">
                    Excellence
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>

          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={Accelerate3} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg text-header-small">
                  <div className="text-slate-700 dark:text-slate-500 mb-3">
                    Leadership
                  </div>
                  <div className="text-head">
                    Trust
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeContainer

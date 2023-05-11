import React from 'react';
import cardimg1 from "../assets/Card01.svg";
import cardimg2 from "../assets/Card02.svg";
import "./brand.css"



const Brands = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-12">
          <div className="heading-container-section">
            <h1 className="heading-section-container">Creating Value for All</h1>
            <p className='para-container-data'>
              We strive to create long-term value for all our stakeholders, from our customers, shareholders, and employees to the communities we serve. Our diversified interests across various sectors enable us to tackle any challenge and provide sustainable growth for the benefit of all.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-5 md:p-2 mt-5">
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={cardimg1} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg">
                  <div className="link-data">
                    <a href="">P16 Information Technology Pvt Ltd</a>
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para-section-container">
                    “P16 IT is a dynamic IT company which believes in catering quality based IT solutions that are customised and platform based. At P16 IT, We design, develop, implement, manage and optimise access to systems and information to answer your business processing, application and infrastructure needs. P16 IT has curated a number of brands under its umbrella- Happy Hours, Jewelzest and Movitalks. It is backed by a team of experienced leaders as well as extremely fine technical talent pool who are quick to adhere to each and every client and their needs - the company is acknowledged for its quality, time as well as commitment.”
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

                  <div className="link-data">
                    <a href="">Mahapatra Business Solutions Pvt Ltd</a>
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para-section-container">
                    “Innovation. Backed by over experience of Service. Great companies are built with great products on the foundation called trust. We are five years old but backed by over 1000man years of experience. We’re proud to be partners with businesses that have grown over the years as we have. The Corporate Finance Division has a dedicated team of professionals who design products and services that will help your business grow. We have, over the years, come to understand that when we increase value to our customers, we are able to discover potential enhancements. This has enabled us to create options for our customers that go beyond adding new features to our products. It has propelled productivity, our experts are delivering more than before, surpassing industry standards, and that has resulted in better customer satisfaction.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>
          <div>
            <figure className="p-2">
              <img className="w-full h-full mx-auto" src={cardimg1} alt="" />
              <div className="pt-6 text-center space-y-3">
                <figcaption className="text-lg">
                  <div className="link-data">
                    <a href="">P16 Retail Store Pvt Ltd</a>
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg advisor-para-section-container-section-container">
                    “We will be the trendsetters in evolving consumer brands and delivery formats and by making consumption affordable for all customer segments. We shall infuse Indian brands with confidence and renewed ambition. We shall be efficient, cost- conscious and committed to quality in whatever we do. We shall ensure that our positive attitude, sincerity, humility and united determination shall be the driving force to make us successful. Our flagship retail brand Preeti’s is ranked among the most valuable Indian retail startup brands and the among the most trusted brand in mini modern retail stores. With a growing chain of small neighborhood stores, we are in the path of opening 1 store every week. We have a target to open 10000 neighborhood stores by the year 2022.”
                  </p>
                </blockquote>

              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands
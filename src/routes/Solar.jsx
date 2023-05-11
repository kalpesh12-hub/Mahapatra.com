import React from 'react';
import businessimage from "../assets/busines-logo.svg";
const Solar = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <h1 className='text-center mb-5 business-text-header'>Our Business</h1>
          <div className="column col-md-12 align-middle">
            <div className="row">

              <div className="col-md-6 m-auto">
                <h2 className='text-container-data'>Manufacturing</h2>
                <h3 className='text-contanner-h3 '>SOLAR POWER PRODUCTS</h3>
              </div>
              <div className="col-md-6">
                <img src={businessimage} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Solar Power Products */}
        <div className="container">
          <div className="column">
            <div className="row">

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Solar
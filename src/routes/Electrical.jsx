import React from 'react';
import "./business.css";
import businessimage from "../assets/busines-logo.svg";
import suspension1 from "../assets/suspesion1.svg";
import suspension2 from "../assets/suspension2.svg";
import wire from "../assets/wire.svg"
import Hardware from "../assets/Hardware.svg"

const Electrical = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <h1 className='text-center mb-5 business-text-header'>Our Business</h1>
          <div className="column col-md-12 align-middle">
            <div className="row">

              <div className="col-md-6 m-auto">
                <h2 className='text-container-data'>Manufacturing</h2>
                <h3 className='text-contanner-h3 '>ELECTRICAL & MECHANICAL FITMENTS</h3>
              </div>
              <div className="col-md-6">
                <img src={businessimage} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Insulator Hardware */}
        <div className="page-wrapper-container p-2">
          <div className="container mb-11">
            <h2 className="h2-text">
              INSULATOR HARDWARE
            </h2>
            <p className='para-container-p'>The entire range of insulator hardwares for Suspension & Tension strings upto six bundle conductor for application on transmission line of various ratings upto 800 KV.r</p>
          </div>
          <div className="column">
            <div className="row">
              <div className="col-md-6">
                <h3 className='text-center h3-container mb-4'>Suspension String</h3>
                <img src={suspension1} alt="" className='mb-3' />
              </div>
              <div className="col-md-6">
                <h3 className='text-center h3-container mb-4'>Tension String</h3>
                <img src={suspension2} alt="" className='mb-3' />
              </div>
            </div>
          </div>
        </div>



        {/* Conductors and ground wire */}
        <div className="page-wrapper-container p-2">
          <div className="container mb-11">
            <h2 className="h2-text">
            CONDUCTOR & GROUND WIRE ACCESSORIES
            </h2>
            <p className='para-container-p mb-4'>We offer the entire range of Conductor Accessories for single or bundle Conductors.These include Midspan Compression Joints, Repair Sleeves, parallel Groove Clamps, Vibration Dampers, Spacer Dampers for Twin, Triple, Quad & Hexa Bundle Conductors, all types of Spacers and Armour Rods. Accessories for various sizes of Ground Wire are also manufactured which include Suspension Assemblies, Tension Assemblies, Midspan Joints, Repair Sleeves and Earthing Rods.</p>
            <div className="image-container flex justify-center"><img src={wire} alt="" /></div>
          </div>
        </div>



        {/* SUB-STATION HARDWARE, CLAMPS & CONNECTORS */}
        <div className="page-wrapper-container p-2">
          <div className="container mb-11">
            <h2 className="h2-text">
            SUB-STATION HARDWARE, CLAMPS & CONNECTORS
            </h2>
            <p className='para-container-p mb-4'>We have been manufacturing a whole range of Hardwares and Accessories for application in Various Substations of different ratings. Those include Tension and Suspension string with and without Turn Buckle, IPS Tubes, clamps and connectors of different type like Parallel groove Clamps & T-Connectors.</p>
            <div className="image-container flex justify-center"><img src={Hardware} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Electrical;

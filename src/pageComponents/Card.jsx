import React from 'react';
import card1 from "../assets/image-card1.jpg";
import card2 from "../assets/excellance.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../pageComponents/card.css"

const Card = () => {
    return (
        <>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm mb-4">
                            <div class="card">
                                <img className="card-img-top" src={card1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>INTEGRITY</h5>
                                    <p className="card-text">We will be fair, honest, transparent and ethical in our conduct; everything we do must stand the test of public scrutiny.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mb-4">
                            <div class="card">
                                <img className="card-img-top" src={card2} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>EXCELLENCE</h5>
                                    <p className="card-text">We will be passionate about achieving the highest standards of quality, always promoting meritocracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div class="card">
                                <img className="card-img-top" src={card1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>UNITY</h5>
                                    <p className="card-text">We will invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}

export default Card
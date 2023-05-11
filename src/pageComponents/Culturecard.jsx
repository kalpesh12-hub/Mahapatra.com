import React from 'react';
import card1 from "../assets/image-card1.jpg";
import card2 from "../assets/excellance.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../pageComponents/culturecard.css"

const Culturecard = () => {
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h2 className='text-header mb-5'>Our Culture</h2>
                        <div className="col-sm mb-4">
                            <div class="card">
                                <img className="card-img-top" src={card1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>TO KNOW</h5>
                                    <p className="card-text">Knowledge. It is what empowers us to make a difference in the lives of our customers. It is the fuel that will power the engine of innovation. It is what will enhance our ability to predict the change and adapt quickly and effectively. So, let us begin each day with a strong desire to know more, for only when we strengthen our pursuit towards excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mb-4">
                            <div class="card">
                                <img className="card-img-top" src={card2} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>TO CARE</h5>
                                    <p className="card-text">Care. It is at the core of all our relationships. It is what forges bonds that endure the test of time. It is about demonstrating humility and understanding towards all. Care is an appreciation of the truth, that in unity and in keeping 'we' before 'me', we will truly progress.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div class="card">
                                <img className="card-img-top" src={card1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className='h5-header'>TO DO</h5>
                                    <p className="card-text">Do, it is what separates aspirations from reality. It calls for a heightened sense of responsibility and passion to give our best at all times. And to 'Do Right' is a higher calling. It calls for integrity - a constant practice of honesty, transparency and fairness. It calls for courage. So, let's do right, for it is what gives us our unique identity, our unique strength.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Culturecard

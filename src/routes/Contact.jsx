import React from 'react';
import "../routes/contact.css"

const Contact = () => {
  return (
    <>
      <section>
        <div className="page-wrapper-container-contact my-8">
          <div className="container">
            <div className="column">
              <div className="row">
                <div className="col-md-6">
                  <div><h1 className='contact-us-header'>Accelerate your Growth</h1></div>
                  <div className='description-container'><p className='description'>Mahapatra Universal Limited is a global enterprise, dedicated to creating long-term value for its stakeholders. We drive innovation and provide quality solutions to improve the quality of life in the communities we serve. Our experienced teams and partnerships with global corporations bring international expertise to India, ensuring excellence and progress.</p></div>
                </div>
                <div className="col-md-6">
                  <div className="contact-us-form">
                    <form action="" method="post" className='align-middle'>
                    {/* <input name="" id="inputID" type='email' className='input-textarea' placeholder='Email Id' /><br />
                      <input name="" id="inputID" type='text' className='input-textarea' placeholder='Name' /><br /> */}
                      <input name="" id="inputID" className='input-textarea' placeholder='Email Id' type='email'></input><br />
                      <input name="" id="inputID" className='input-textarea' placeholder='Name' type='text'></input><br />
                      <textarea name="" id="inputID" className='input-textarea' placeholder='Message'></textarea><br />
                      <button className='btn btn-container'>
                        <span className='btn-span'>Contact Us</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Contact;

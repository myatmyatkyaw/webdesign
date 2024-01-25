import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div id='contact'>
      <div className='text-center fw-light'>
        <h2 className='mt-5 pt-5' data-aos="fade-up" data-aos-once="true">Get In Touch</h2>
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100">Far from the countries Vokalia and Consonantia</p>
      </div>

        <div className='row m-5'>
            <div className='col-md-7 pe-5' data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                <div className="row g-3">
                <div class="form-group col">
                    <label className='font-light'>First name</label>
                    <input type="text" className="form-control border-dark border-0 border-bottom p-2 rounded-0" aria-label="First name"></input>
                </div>
                <div class="col">
                    <label className='font-light'>Last Name</label>
                    <input type="text" class="form-control border-dark border-0 border-bottom p-2 rounded-0" aria-label="Last name"></input>
                </div>
                <div>
                    <label className='font-light'>Email address</label>
                    <input type="email" className='form-control border-dark border-0 border-bottom p-2 rounded-0'></input>
                </div>
                <div>
                    <label className='font-light'>Message</label>
                    <textarea type="text" className='form-control border-0 border-dark border-bottom p-2 rounded-0'></textarea>
                </div>
                <div>
                    <a href='#' className='btn btn-primary rounded-5 m-3 p-3' style={{ width:150, height:50,fontSize: 12 }}>Send Message</a>
                </div>
                </div>
            </div>

            <div className='col-md-5 ps-5' data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
           <h6 className='mb-4'> Contact Info</h6>
                <p > <FontAwesomeIcon icon={faLocationDot} /> 43 Raymouth Rd. Baltemoer, London 3910</p>
                <p className='text-hover'> <FontAwesomeIcon icon={faPhone} /> +1(123)-456-7890</p>
                <p className='text-hover'> <FontAwesomeIcon icon={faPhone} /> +1(123)-456-7890</p>
                <p className='text-hover'> <FontAwesomeIcon icon={faEnvelope} /> info@mydomain.com</p>
                <p className='text-hover'> <FontAwesomeIcon icon={faGlobe} /> https://Colorlib.com</p>
            </div>
        </div>
        
    </div>
    
  )
}

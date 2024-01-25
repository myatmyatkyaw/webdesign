import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Pricing() {
  return (
    <div className='featu2'>
    <div className=' container-fluid col-md-10 mx-auto ' id='pricing'>
      <div className='text-center fw-light'>
        <h2 className='text-title' data-aos="fade-up" data-aos-once="true">Pricing</h2>
        <p className='font-light' data-aos="fade-up" data-aos-once="true" data-aos-delay="100">Pricing for everyone. Choose your plan now!</p>
      </div>
      
      <div className='row m-3 text-center'>
        <div className='col-md-4 col-sm-10 mb-4 d-flex justify-content-center'>
          <div className='card card-body transparent-card shadow p-5 border-0' style={{width: 300,height: 500, borderRadius: '50px'}} data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <h3 className='price-title'>Free</h3>
            <h3 className='price text-primary fw-light'><sup>$</sup>0</h3>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far from the countries Vokalia and Consonantia</p>
            <div className='text-center mt-3'>
            <a href='#' className='ms-3 btn btn-outline-primary rounded-5 p-3' style={{ width:150, height:50, fontSize: 11 }}>GET STARTED</a>
            </div>
          </div>
          
        </div>

        <div className='col-md-4 col-sm-10 mb-4 d-flex justify-content-center'>
          <div className='card card-body p-5 border-0 shadow' style={{width: 300,height: 500, borderRadius: '50px'}} data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <h3 className='price-title'>Standard</h3>
            <h3 className='price text-primary fw-light'><sup>$</sup>19.99</h3>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far from the countries Vokalia and Consonantia</p>
            <div className='text-center mt-3'>
            <a href='#' className='btn btn-primary rounded-5 ms-3 p-3' style={{ width:150, height:50, fontSize: 11 }}>GET STARTED</a>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-10 mb-4 d-flex justify-content-center'>
          <div className='card card-body transparent-card p-5 shadow border-0' style={{width: 300,height: 500, borderRadius: '50px'}} data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <h3 className='price-title'>Premium</h3>
            <h3 className='price text-primary fw-light'><sup>$</sup>79.99</h3>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
            <p className='text-start'><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far from the countries Vokalia and Consonantia</p>
            <div className='text-center mt-3'>
            <a href='#' className='btn btn-outline-primary rounded-5 ms-3 p-3' style={{ width:150, height:50, fontSize: 11 }}>GET STARTED</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

import React from 'react'
import About1 from './about1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

export default function About() {
  
  return (
    <div id='about'>
      <div className='row m-5 pt-5'>
        <div className='col-md-8 pt-5 mt-5' data-aos="fade-up" data-aos-once="true" >
          <img src={About1} alt='about' className='image-fluid'/>
        </div>

        <div className='col-md-4 pt-5 mt-5'>
        <p className='text-primary mb-1' data-aos="fade-up" data-aos-once="true">ABOUT</p>
            <h2 className='card-title mb-4' data-aos="fade-up" data-aos-once="true" data-aos-delay="100">About Us</h2>
            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200">Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, 
              there live the blind texts. Separated they live 
              in Bookmarksgrove right at the coast
            </p>
            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Separated they <span className='text-bg'>live in Bookmarksgrove right
               at the coast of the Semantics,</span> a large language ocean. 
               A small river named Duden flows by their place and supplies 
               it with the necessary regelialia.</p>

            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="400"><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="600"><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Their place and supplies</p>

            <div className='row count-numbers'>
              <div className='col-md-6 mt-4' data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
                <h1 className='card-title fw-light mb-2'>
                <span><CountUp end={59} duration={5} /></span>
                <span>M</span>
                </h1>
               
                <p className='font-light' data-aos="fade-up" data-aos-once="true" data-aos-delay="800">MEMBERS</p>
              </div>

              <div className='col-md-6 mt-4'>
             
                <h1 className='card-title fw-light mb-2' data-aos="fade-up" data-aos-once="true" data-aos-delay="700"><CountUp end={14} duration={5} /></h1>
                <p className='font-light' data-aos="fade-up" data-aos-once="true" data-aos-delay="800">TEAM</p>
              </div>
            </div>
           
        </div>
      </div>
    </div>
  )
  }


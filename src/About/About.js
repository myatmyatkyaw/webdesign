import React from 'react'
import About1 from './about1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div id='about'>
      <div className='row m-5 pt-5'>
        <div className='col-md-8 pt-5 mt-5'>
          <img src={About1} alt='about' className='image-fluid'/>
        </div>

        <div className='col-md-4 pt-5 mt-5'>
        <p className='text-primary mb-1'>ABOUT</p>
            <h2 className='card-title mb-4'>About Us</h2>
            <p>Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, 
              there live the blind texts. Separated they live 
              in Bookmarksgrove right at the coast
            </p>
            <p>Separated they <span className='text-bg'>live in Bookmarksgrove right
               at the coast of the Semantics,</span> a large language ocean. 
               A small river named Duden flows by their place and supplies 
               it with the necessary regelialia.</p>

            <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
            <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
            <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Their place and supplies</p>

            <div className='row'>
              <div className='col-md-6 mt-4'>
                <h1 className='card-title fw-light mb-2'>59M</h1>
                <p className='font-light'>MEMBERS</p>
              </div>

              <div className='col-md-6 mt-4'>
                <h1 className='card-title fw-light mb-2'>14</h1>
                <p className='font-light'>TEAM</p>
              </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

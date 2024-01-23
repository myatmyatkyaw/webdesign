import React from 'react'
import About1 from './about1.svg'

export default function About() {
  return (
    <>
      <div className='row m-5'>
        <div className='col-md-8'>
          <img src={About1} alt='about' className='image-fluid'/>
        </div>

        <div className='col-md-4'>
        <p className='text-primary'>ABOUT</p>
            <h1 className='fw-light'>About Us</h1>
            <p>Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, 
              there live the blind texts. Separated they live 
              in Bookmarksgrove right at the coast
            </p>
            <p>Separated they live in Bookmarksgrove right
               at the coast of the Semantics, a large language ocean. 
               A small river named Duden flows by their place and supplies 
               it with the necessary regelialia.</p>

            <p>There live the blind texts</p>
            <p>Far far away behind the word</p>
            <p>Their place and supplies</p>

            <div className='row'>
              <div className='col-md-6'>
                <h1 className='fw-light'>59M</h1>
                <p>MEMBERS</p>
              </div>

              <div className='col-md-6'>
                <h1 className='fw-light'>14</h1>
                <p>TEAM</p>
              </div>
            </div>
           
        </div>
      </div>
    </>
  )
}

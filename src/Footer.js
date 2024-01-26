import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className='container-fluid mx-auto'>
      <footer className='bg-light pb-5' >
       
            <div className='row mt-5 ms-5 me-5 pt-5 pb-5 ps-2 pe-2'>
                <div className='col-md-5 col-sm-12'>
                    <h6 className='text-dark mb-4'>About Launch.</h6>
                    <p>Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, 
                        there live the blind texts.
                    </p>
                    <h6 className='mb-4 text-dark'>Connect</h6>
                   
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faInstagram} />  </span></a>
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faFacebookF} /></span></a>
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faLinkedinIn} /></span></a>
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faPinterest} /></span></a>
                        <a href="#" className='me-1'><span class="icon"> <FontAwesomeIcon icon={faDribbble} /></span></a>
                   
                </div>

                <div className='col-md-2'>
                    <h6 className='text-dark mb-4'>Projects</h6>
                    <p>La Lega Stadium</p>
                    <p>French Building</p>
                    <p>22 New Homes</p>
                    <p>Manage Center</p>
                    <p>Sports Hall</p>
                </div>

                <div className='col-md-2'>
                    <h6 className='text-dark mb-4'>Services</h6>
                    <p>Architect</p>
                    <p>Interior Design</p>
                    <p>Landscape Design</p>
                    <p>Consultancy</p>
                </div>

                <div className='col-md-3'>
                    <h6 className='text-dark mb-4'>Contact</h6>
                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    <p>+1(123)-456-7890</p>
                    <p>+1(123)-456-7890</p>
                    <p>info@mydomain.com</p>
                
                </div>

            </div>
            <div className='text-center mt-5'>Copyright &copy;2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} className='text-danger'/> by <span className='text-primary' href='#'>Colorlib</span></div>
        
      </footer>
    </div>
  )
}

import React from 'react'
import Image3 from './person1.webp'
import Image4 from './wimg2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



export default function Feature() {
  return (
    <div id='features'>
      <div className='container-fluid col-md-10 mx-auto'>
      <div className='row mt-5 mb-5 pt-5 pb-5 d-flex justify-content-center'>
      <div className='col-md-5 '>
            <div className=''>
                <div className='text-primary' data-aos="fade-up" data-aos-once="true">DIGITAL SERVICES</div>
                <h3 className='text-title mt-0 mb-3' data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                Selling Digital Services
                </h3>
                <div className='card-text font-light' data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live 
                in Bookmarksgrove right at the coast
                </div> 
                <div className='mt-3 font-light' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
                <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
                </div>
                <div className='fst-italic mb-3' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                    “Separated they <span className='text-bg'>live in Bookmarksgrove 
                        right at the coast of the Semantics,</span>
                     a large language ocean. A small river named Duden 
                     flows by their place and supplies it with the necessary regelialia. ”
                </div>
                <div className='row'>
                    <div className='col-md-2' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                    <img src={Image3} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                        <div className='font-small'>James Anderson</div>
                        <div className='font-light font-small'>Facebook, Product Lead</div>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-md-7'>
            <div className='card card-body w-80 shadow border-0' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <img src={Image4} alt='image4' className='image-fluid'/> 
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

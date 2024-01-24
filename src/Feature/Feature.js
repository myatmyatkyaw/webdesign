import React from 'react'
import Image3 from './person1.webp'
import Image4 from './wimg2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Feature() {
  return (
    <div id='features'>
      <div className='row m-5 p-5'>
      <div className='col-md-5 pe-5'>
            <div className='card-body pe-5'>
                <div className='text-primary'>DIGITAL SERVICES</div>
                <h3 className='text-title mt-0 mb-3'>
                Selling Digital Services
                </h3>
                <div className='card-text font-light'>
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live 
                in Bookmarksgrove right at the coast
                </div> 
                <div className='mt-3 font-light'>
                <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>There live the blind texts</p>
                <p><FontAwesomeIcon icon={faCheck} className='text-primary me-2'/>Far far away behind the word</p>
                </div>
                <div className='fst-italic mb-3'>
                    “Separated they <span className='text-bg'>live in Bookmarksgrove 
                        right at the coast of the Semantics,</span>
                     a large language ocean. A small river named Duden 
                     flows by their place and supplies it with the necessary regelialia. ”
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                    <img src={Image3} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10'>
                        <div className='font-small'>James Anderson</div>
                        <div className='font-light font-small'>Facebook, Product Lead</div>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-md-7'>
            <div className='card card-body w-80 shadow border-0'>
            <img src={Image4} alt='image4' className='image-fluid' width={600} height={400}/> 
            </div>
        </div>
      </div>
    </div>
  )
}

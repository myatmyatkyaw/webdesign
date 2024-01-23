import React from 'react'
import Image3 from './person1.webp'
import Image4 from './wimg2.webp'

export default function Feature() {
  return (
    <>
      <div className='row m-5'>
      <div className='col-md-5 ps-5'>
            <div className='card-body'>
                <div className='text-primary'>DIGITAL SERVICES</div>
                <h3 className='card-title mt-0 mb-3'>
                Selling Digital Services
                </h3>
                <div className='card-text font-light'>
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live 
                in Bookmarksgrove right at the coast
                </div> 
                <div className='mt-3 font-light'>
                <p>There live the blind texts</p>
                <p>Far far away behind the word</p>
                </div>
                <div className='fst-italic mb-3'>
                    “Separated they live in Bookmarksgrove 
                    right at the coast of the Semantics,
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
    </>
  )
}

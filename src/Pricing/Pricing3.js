import React from 'react'
import Image3 from './person1.webp'
import Image4 from './person2.webp'

export default function Pricing3() {
  return (
    <>
      <div className='row m-5'>
        <div className='col-md-4'>
            <p className='text-primary'>TESTIMONIALS</p>
            <h1 className='fw-light'>Our Customers Feedback</h1>
            
        </div>

        <div className='col-md-4'>
            <div className='text fst-italic'>
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
                        <div>James Anderson</div>
                        <div>Facebook, Product Lead</div>
                    </span>
                </div>
        </div>

        <div className='col-md-4'>
            <div className='text fst-italic'>
                        “Separated they live in Bookmarksgrove 
                        right at the coast of the Semantics,
                        a large language ocean. A small river named Duden 
                        flows by their place and supplies it with the necessary regelialia. ”
            </div>
            <div className='row'>
                    <div className='col-md-2'>
                    <img src={Image4} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10'>
                        <div>James Anderson</div>
                        <div>Facebook, Product Lead</div>
                    </span>
                </div>

        </div>

      </div>
    </>
  )
}

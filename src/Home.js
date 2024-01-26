import React from 'react'
import Image1 from './wimg1.svg'


export default function home() {
  return (
    <>
      <div className='row m-5 pt-5'>
        <div className='col-md-5 mt-2 ps-5' >
          <div className='card-body '>

            <h1 className='home-title fw-bold' data-aos="fade-up">
              Promote Your Products by Colorlib
            </h1>
            <div className='card-text mb-4 order-lg-1 order-2' data-aos="fade-up" data-aos-delay="100" >
              Another cool free html css template by Colorlib Far far away,
              behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live
              in Bookmarksgrove right at the coast
            </div>
            <div className='d-md-flex' data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              <a href="#features" class="btn btn-primary rounded-pill me-1 mt-3 p-3 fw-bold" style={{ width: 150, height: 50, fontSize: 11 }}>SEE FEATURES</a>
              <a href="#pricing" class="btn btn-outline-primary rounded-pill mt-3 p-3 fw-bold" style={{ width: 120, fontSize: 11 }}>PRICING</a>
            </div>
          </div>
        </div>
        <div className='col-md-7 ml-auto' data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <img
            src={Image1} // Replace with the actual path to your image
            alt="Image1"
            className="img-fluid "
          />

        </div>

      </div>
    </>
  )
}

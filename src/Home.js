import React from 'react'
import Image1 from './wimg1.svg'


export default function home() {
  return (
    <>
      <div className='row m-5'>
        <div className='col-md-5 mt-2 ps-5'>
            <div className='card-body '>
            
                <h1 className='home-title card-title fw-bold'>
                Promote Your Products by Colorlib
                </h1>
                <div className='card-text mb-4'>
                Another cool free html css template by Colorlib Far far away, 
                behind the word mountains, far from the countries Vokalia and
                 Consonantia, there live the blind texts. Separated they live 
                 in Bookmarksgrove right at the coast
                </div>
                <a href="#" class="btn btn-primary rounded-pill me-1 ">SEE FEATURES</a>
                <a href="#" class="btn btn-outline-primary rounded-pill ">PRICING</a>
            </div>
        </div>
        <div className='col-md-7'>
        <img
            src={Image1} // Replace with the actual path to your image
            alt="Image1"
            className="img-fluid"
          />
       
        </div>

      </div>
    </>
  )
}

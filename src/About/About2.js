import React from 'react'
import P1 from './person1.webp'
import P2 from './person2.webp'
import P3 from './person3.webp'

export default function About2() {
  return (
    <>
      <div className='text-center fw-light'>
        <h2>Our News</h2>
        <p>Far from the countries Vokalia and Consonantia</p>
      </div>

      <div className='row m-5'>

        <div className='col-md-4'>
            <div className='card card-body'>
            <div className='row'>
                    <div className='col-md-2'>
                    <img src={P1} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10'>
                        <div>James Anderson</div>
                        <div>JUN 14, 2020</div>
                    </span>
                </div>
                <p>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover'>Far far away, behind the mountains, far from the countries </h3>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='card card-body'>
            <div className='row'>
                    <div className='col-md-2'>
                    <img src={P3} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10'>
                        <div>James Anderson</div>
                        <div>JUN 14, 2020</div>
                    </span>
                </div>
                <p>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover'>Far far away, behind the mountains, far from the countries </h3>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='card card-body'>
            <div className='row'>
                    <div className='col-md-2'>
                    <img src={P2} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-10'>
                        <div>James Anderson</div>
                        <div>JUN 14, 2020</div>
                    </span>
                </div>
                <p>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover'>Far far away, behind the mountains, far from the countries </h3>
            </div>  
        </div>

      </div>
    </>
  )
}

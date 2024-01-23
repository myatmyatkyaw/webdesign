import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className='text-center fw-light'>
        <h2>Pricing</h2>
        <p>Pricing for everyone. Choose your plan now!</p>
      </div>
      <div className='row m-5 text-center'>
        <div className='col-md-4 p-5'>
          <div className='card card-body p-5 rounded-3'>
            <h3>Free</h3>
            <h3>$0</h3>
            <p className='text-start'>There live the blind texts</p>
            <p className='text-start'>Far far away behind the word</p>
            <p className='text-start'>Far from the countries Vokalia and Consonantia</p>
            <a href='#' className='btn btn-outline-primary rounded-5'>GET STARTED</a>
          </div>
        </div>

        <div className='col-md-4 p-5'>
          <div className='card card-body p-5'>
            <h3>Standard</h3>
            <h3>$19.99</h3>
            <p className='text-start'>There live the blind texts</p>
            <p className='text-start'>Far far away behind the word</p>
            <p className='text-start'>Far from the countries Vokalia and Consonantia</p>
            <a href='#' className='btn btn-primary rounded-5'>GET STARTED</a>
          </div>
        </div>

        <div className='col-md-4 p-5'>
          <div className='card card-body p-5'>
            <h3>Premium</h3>
            <h3>$79.99</h3>
            <p className='text-start'>There live the blind texts</p>
            <p className='text-start'>Far far away behind the word</p>
            <p className='text-start'>Far from the countries Vokalia and Consonantia</p>
            <a href='#' className='btn btn-outline-primary rounded-5'>GET STARTED</a>
          </div>
        </div>
      </div>
    </>
  )
}

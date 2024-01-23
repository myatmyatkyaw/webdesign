import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='text-center fw-light'>
        <h2>Get In Touch</h2>
        <p>Far from the countries Vokalia and Consonantia</p>
      </div>

        <div className='row m-5'>
            <div className='col-md-7'>
                <div className="row g-3">
                <div class="col">
                    <label>First name</label>
                    <input type="text" class="form-control" aria-label="First name"></input>
                </div>
                <div class="col">
                    <label>Last Name</label>
                    <input type="text" class="form-control" aria-label="Last name"></input>
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" className='form-control'></input>
                </div>
                <div>
                    <label>Message</label>
                    <textarea type="text" className='form-control'></textarea>
                </div>
                <div>
                    <a href='#' className='btn btn-primary rounded-5'>Send Message</a>
                </div>
                </div>
            </div>

            <div className='col-md-5'>
                <h6>Contact Info</h6>
                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                <p>+1(123)-456-7890</p>
                <p>+1(123)-456-7890</p>
                <p>info@mydomain.com</p>
                <p>https://Colorlib.com</p>
            </div>
        </div>
        
    </>
  )
}

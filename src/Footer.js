import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='footer-bg'>
        <div className='container-fluid'>
            <div className='row mt-5 ms-5 me-5 pt-5'>
                <div className='col-md-5'>
                    <h6 className='text-dark'>About Launch.</h6>
                    <p>Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, 
                        there live the blind texts.
                    </p>
                    <h6>Connect</h6>
                </div>

                <div className='col-md-2'>
                    <h6 className='text-dark'>Projects</h6>
                    <p>La Lega Stadium</p>
                    <p>French Building</p>
                    <p>22 New Homes</p>
                    <p>Manage Center</p>
                    <p>Sports Hall</p>
                </div>

                <div className='col-md-2'>
                    <h6 className='text-dark'>Services</h6>
                    <p>Architect</p>
                    <p>Interior Design</p>
                    <p>Landscape Design</p>
                    <p>Consultancy</p>
                </div>

                <div className='col-md-3'>
                    <h6 className='text-dark'>Contact</h6>
                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    <p>+1(123)-456-7890</p>
                    <p>+1(123)-456-7890</p>
                    <p>info@mydomain.com</p>
                
                </div>

            </div>
            <div className='text-center'>Copyright &copy;2024 All rights reserved | This template is made with &hearts; by Colorlib</div>
        </div>
      </footer>
    </>
  )
}

import React from 'react'
import P1 from './person1.webp'
import P2 from './person2.webp'
import P3 from './person3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function About2() {
  return (
    
    <div className='featu2'>
      <div className='col-md-10 mx-auto'>
      <div className='text-center fw-light'>
        <h2 className='card-title mt-5'>Our News</h2>
        <p className='font-light'>Far from the countries Vokalia and Consonantia</p>
      </div>

      <div className='row mt-5 mb-5'>

        <div className='col-md-4'>
            <div className='card card-body border-0' style={{width:350}}>
            <div className='row'>
                    <div className='col-md-2 mt-3 ms-3 '>
                    <img src={P1} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-8 mt-3'>
                        <strong>Posted by James</strong>
                        <div className='font-light'>JUN 14, 2020</div>
                    </span>
                </div>
                <p className='font-light mt-3 ms-3'>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover ms-3'>Far far away, behind the mountains, far from the countries </h3>
                <div className='text-start m-3'><FontAwesomeIcon icon={faArrowRight} style={{ width:30, height:30 }} /></div>
            </div>
           
        </div>

        <div className='col-md-4'>
            <div className='card card-body border-0' style={{width:350}}>
            <div className='row'>
                    <div className='col-md-2 mt-3 ms-3 me-3'>
                    <img src={P3} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-8 mt-3'>
                    <strong >Posted by Khan</strong>
                        <div className='font-light'>JUN 14, 2020</div>
                    </span>
                </div>
                <p className='font-light mt-3 ms-3'>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover ms-3'>Far far away, behind the mountains, far from the countries </h3>
                <div className='text-start m-3'><FontAwesomeIcon icon={faArrowRight} style={{ width:30, height:30 }} /></div>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='card card-body border-0' style={{width:350}}>
            <div className='row'>
                    <div className='col-md-2 mt-3 ms-3 me-3'>
                    <img src={P2} alt='Image3' className='image-fluid rounded-circle' width={50} height={50}/>
                    </div>
                    <span className='col-md-8 mt-3'>
                    <strong>Posted by Rob</strong>
                        <div className='font-light'>JUN 14, 2020</div>
                    </span>
                </div>
                <p className='font-light mt-3 ms-3'>Digital Service, 4 min read</p>
                <h3 className='fw-light text-hover ms-3'>Far far away, behind the mountains, far from the countries </h3>
                <div className='text-start m-3'><FontAwesomeIcon icon={faArrowRight} style={{ width:30, height:30 }} /></div>
            </div>  
        </div>

      </div>
    </div>
    </div>
  )
}

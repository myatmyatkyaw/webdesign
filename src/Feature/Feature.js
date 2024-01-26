import React from 'react'
import Image3 from './person1.webp'
import Image4 from './wimg2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



export default function Feature_one() {
  return (
    <>
     {/* Feature One */}
     <section id="feature_one">
      <div className="container-fluid col-md-10 mx-auto">
      <div className="row mb-5 pb-5">
      <div className="col-md-5">
            <div className="card-body" data-aos="fade-up">
                <div className="text-primary py-3">DIGITAL SERVICES</div>
                <h3 className="card-title mb-3 font_family">
                Selling Digital Services
                </h3>
                <div className="card-text font-light text-secondary" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
                Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live
                in Bookmarksgrove right at the coast
                </div>
                <div className="mt-3 font-light" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
                <span><FontAwesomeIcon icon={faCheck}/><span class="text-secondary px-3">There live the blind texts</span></span><br/>
                <span><FontAwesomeIcon icon={faCheck}/><span class="text-secondary px-3">Far far away behind the word</span></span><br/><br/>
                </div>
                <div className="fst-italic mb-3" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                    “Separated they live in Bookmarksgrove
                    right at the coast of the Semantics,
                     a large language ocean. A small river named Duden
                     flows by their place and supplies it with the necessary regelialia. ”
                </div>
                <div className="row py-3">
                    <div className="col-md-2" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                    <img src={Image3} alt="Image3" className="image-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <span className="col-md-10" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
                        <div className="font-small">James Anderson</div>
                        <p className="font-light text-secondary" style={{"font-size" : 10}}>Facebook, Product Lead</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="col-md-7">
            <div className="card card-body shadow border-0" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
            <img src={Image4} alt="dashboard" className="image-fluid"/>
            </div>
        </div>
      </div>
      </div>
      </section>
    </>
  )
}
 

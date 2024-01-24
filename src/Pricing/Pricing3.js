import React from 'react'
import Image3 from './person1.webp'
import Image4 from './person2.webp'
import Image5 from './person3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Pricing3() {
  return (
    <>
      {/* Pricing Three */}
      <section id="pricing_three">
        <div className="container-fluid col-md-10 mx-auto m-5 p-5">
          <div className="row">
            <div className="col-md-4">
              <p className="text-primary">TESTIMONIALS</p>
              <h1>Our Customers</h1>
              <h1>Feedback</h1>
              <div class="row mt-3">
                <div class="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo" data-bs-slide="prev">
                 <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <div class="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo" data-bs-slide="next">
                <FontAwesomeIcon icon={faArrowRight}/>
                </div>

              </div>
            </div>
            {/* <!-- Carousel --> */}
            <div id="demo" class="carousel slide col-md-8" data-bs-ride="carousel">

              {/* <!-- Indicators/dots --> */}
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active bg-primary"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="bg-primary"></button>
              </div>

              {/* <!-- The slideshow/carousel --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image3} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image4} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image5} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image3} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="mt-5">
                {/* <!-- Left and right controls/icons --> */}
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

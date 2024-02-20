import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
        <div class="container-fluid ms-5 me-5">
          <a class="navbar-brand fw-bold fs-4 me-5" href="#">Launch.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active me-3" aria-current="page" href="#">Home</a> */}
                <Link to='/' className="nav-link active me-3">Home</Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Dropdown
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#pricing3">Testimonials</a></li>
                      <li>
                        <div class="dropdown dropend">
                          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Menu Two
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Sub Menu One</a></li>
                            <li><a className="dropdown-item" href="#">Sub Menu Two</a></li>
                            <li><a className="dropdown-item" href="#">Sub Menu Three</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a className="dropdown-item" href="#">Menu Three</a></li>
                    </ul>
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/feature">Features</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link me-3" to="/price">Pricing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link me-3" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link me-3" to="/contact">Contact</Link>
              </li>

            </ul>
            <div class="d-grid d-md-flex justify-content-md-end">
              <button className="btn btn1 btn-outline-dark me-md-2 rounded-pill" type="button" style={{ width: 90, fontSize: 11 }}>Sign In</button>
              <button class="btn btn1 btn-primary rounded-pill" type="button" style={{ width: 100, height: 40, fontSize: 11 }}>Register</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

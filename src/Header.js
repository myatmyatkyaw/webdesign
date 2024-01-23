import React from 'react'

export default function header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-light ms-5 me-5">
  <div class="container-fluid ms-5 me-5">
    <a class="navbar-brand fw-bold fs-4 me-5" href="#">Launch.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active me-3" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Testimonials</a></li>
            <li><a class="dropdown-item" href="#">Menu2</a></li>
            <li><a class="dropdown-item" href="#">Menu3</a></li>
        
          </ul>
          
        </li>
        <li class="nav-item">
          <a class="nav-link me-3" aria-current="page" href="#">Features</a>
        </li>

        <li class="nav-item">
          <a class="nav-link me-3" aria-current="page" href="#">Pricing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link me-3" aria-current="page" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link me-3" aria-current="page" href="#">Contact</a>
        </li>
       
      </ul>
      <div class="d-grid  d-md-flex justify-content-md-end">
  <button class="btn btn-outline-dark rounded-pill me-md-2" type="button">Sign In</button>
  <button class="btn btn-primary rounded-pill" type="button">Register</button>
</div>
    </div>
  </div>
</nav>
</>
  )
}

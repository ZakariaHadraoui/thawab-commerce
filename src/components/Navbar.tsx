"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import $ from 'jquery'

function Navbar() {
  
  
  return (
<>
  {/* ==================== Start progress-scroll-button ==================== */}
  <div className="progress-wrap cursor-pointer">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* ==================== End progress-scroll-button ==================== */}
  {/* ==================== Start Navbar ==================== */}
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      {/* Logo */}
      <Link className="logo  " href="#">
        ZakSolutions
      </Link>
      {/* navbar links */}
      {/* <div className="  navbar-collapse" >
        <ul className="navbar-nav px-4">
          <div className="nav-item mx-4 my-2">
            <Link className="nav-link active" href="#">
              About Us
            </Link>
          </div>
          <div className="nav-item my-2">
            <Link className="nav-link active" href="#">
              Contact
            </Link>
          </div>
        
         
        </ul>
      </div>
      <div className="topnav d-flex align-items-center justify-content-center">
        <Link
          href="https://uithemez.com/i/hubfolio_HTML/inner_pages/contact.html"
          className="butn butn-rounded"
        >
          <div className="d-flex align-items-center justify-content-center">
            <span className='text-center'>Start Project</span>
            <span className="icon ml-10">
              <img
                src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/arrow-top-right.svg"
                alt=""
              />
            </span>
          </div>
        </Link>
       
      </div> */}
    </div>
  </nav>
  

</>
  )
}

export default Navbar
import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingBottom:'15px',paddingTop:'15px'}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand me-auto ms-2" href="/">
            URL Compressor
          </a>
        <div className="collapse navbar-collapse"  id="navbarTogglerDemo01">
        
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{display:'flex',alignItems:'center'}}>
            {/* <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/contactus">
                Join Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/faqs">
                FAQs
              </a>
            </li> */}
            <li className="nav-item">
            <a style={{margin:'7px',cursor:'pointer'}}><i className="bi bi-github"  style={{color:'white',fontSize:'1.5vw'}}></i></a>
            <a href="https://www.linkedin.com/in/saireddy-dwarampudi/" target="__blank" style={{margin:'7px',cursor:'pointer'}}><i className="bi bi-linkedin" style={{color:'white',fontSize:'1.5vw'}}></i></a>
            </li>
            {/* <li className="nav-item">
                        <div className="dropdown me-2">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Theme
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="#">Light</a></li>
                <li><a className="dropdown-item" href="#">Dark</a></li>
            </ul>
            </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

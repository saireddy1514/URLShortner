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
           
            <li className="nav-item">
            <a href="https://github.com/saireddy1514/URLShortner/" target="__blank" style={{margin:'7px',cursor:'pointer'}}><i className="bi bi-github"  style={{color:'white',fontSize:'1.5vw'}}></i></a>
            <a href="https://www.linkedin.com/in/saireddy-dwarampudi/" target="__blank" style={{margin:'7px',cursor:'pointer'}}><i className="bi bi-linkedin" style={{color:'white',fontSize:'1.5vw'}}></i></a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

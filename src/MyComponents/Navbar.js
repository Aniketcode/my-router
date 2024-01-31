

import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"><i className="fa-solid fa-circle-info"></i>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact"><i className="fa-solid fa-address-card"></i>Contact Us</Link>
              </li>

            </ul>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              logIn
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">Login</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
                    </div>
                    
                  </div>
                  <div className="modal-footer">
                    
                    <button type="button" className="btn btn-primary">LogIn</button>
                    



                    
                  </div>
                </div>
              </div>
            </div>

                {/* <!-- Button trigger modal --> */}
            



          </div>
        </div>
      </nav>
    </>
  )
}

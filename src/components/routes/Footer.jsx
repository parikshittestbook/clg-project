import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css";
import logo1 from "../images/logo2.jpeg";
import footerimg from "../images/footerimg.png";

export default function Footer() {
  return (
    <>
      <div
        className="card text-center"
        style={{ position: "relative" }}
      >
        <div className="card-body footer1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <br></br><br></br><br></br>
                <a class="navbar__title " href="#">
                  <img src={logo1} width="100%"></img>
                </a>
              
                <p></p>
                <p className="text">Your one stop to</p>
                <h3 className="header-title">SEARCH . APPLY . GET INTERVIEWED</h3>
              </div>
              {/* <div className="col-lg-3 st">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div> */}
              <div className="col-lg-4 st" style={{marginTop:"40px"}}>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Discuss</li>
                  <li>Interview Schedule</li>
                  <li>Careers</li>
    
                </ul>
              </div>
              <div className="col-lg-4">
                <img src={footerimg} width="80%"></img>
                <br></br>
                <br></br>
                <div className="container ico">
                  <div className="row">
                    <div className="col-lg-3">
                      <FaFacebook size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                      <FaInstagram size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                      <FaLinkedinIn size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                      <FaGithub size="23px" color="black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-muted footer2">
          <p className="changecolor">
            Copyright 2023 © Lynkk-In All rights reserved | Privacy Policy |
            Terms & Conditions
          </p>
        </div>
      </div>
    </>
  );
}

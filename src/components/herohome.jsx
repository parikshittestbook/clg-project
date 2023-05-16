import "./css/herohome.css";
import React from "react";
import Typewriter from "typewriter-effect";

import Logo from "./images/peer.png";
import wandf from "./images/wandfeature.png";
import ipf from "./images/interviewprepfeature.png";
import pracf from "./images/practicefeature.png";
import parikshit from "./images/parikshit.jpg";
import dhruv from "./images/dhruv.jpg";
import kshitij from "./images/kshitij.jpeg";
import Navbar2 from "./routes/Navbar2";
import people from "./images/people.png";

const HeroSection = () => {
  return (
    <>
    <Navbar2></Navbar2>
    <div className="bgimg">
      <div className="header-hero">
        <div className="container" style={{marginTop:"0px"}}>
          <img
            src={people}
            alt="Logo"
            style={{
              maxHeight: "350px",
              float: "right",
              marginRight: "0px",
              marginTop: "15vh",
            }}
          />
          
          <div className="row justify-content-left">
            <div className="col-xl-11 col-lg-11">
              <div
                className="header-content text-left"
                style={{ paddingTop: "30px" }}
              >
                <p
                  className="text"
                  style={{ color: "#15ba06", fontSize: "20px" }}
                >
                  YOUR ONE STOP DESTINATION FOR JOB SEARCH {" "}
                </p>
                <h3 className="header-title">
                  {/* CODE . COLLABORATE . CREATE */}
                  <Typewriter
                    className="header-title"
                    options={{
                      strings: ["SEARCH", "APPLY", "GET INTERVIEWED"],
                      delay: 30,
                      deleteSpeed: 20,
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                    }}
                  />
                </h3>
                <p
                  className="text"
                  style={{ color: "#15ba06", fontSize: "30px" }}
                >
                  Finding a job has never been easier. ! {" "}
                </p>
                
                <p className="text" style={{ color: "#15ba06" }}>
                Demonstrate your abilities to potential employers.<br></br>Secure a job through respected recruiters <br></br>

                Pick the work schedule that fits you best <br></br> full-time or contract basis.
                </p>
                <br />
                <br />
                <a href="/login">
                <button
                  className="btnn btn-success round text-white pl-5 pr-5 pb-4 pt-4 mt-3"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@getbootstrap"
                  style = {{marginLeft:'5vw'}}
                >
                  Get Started
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     

      {/* How it works section */}
      <section class="HowItWorks_landing-how-it-works__eeM1y">
        <h2 class="HowItWorks_header__394j-">How It Works</h2>
        <div class="HowItWorks_steps-container__1He2m">
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">1</span>
              <h3>Best candidates reach out to you directly</h3>
            </div>
            <p>
            Recruiters can be reached by job seekers who apply for jobs that require specific skills.
            </p>
          </div>
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">2</span>
              <h3>Verify skills and then hire</h3>
            </div>
            <p>
            After a candidate applies for a job, the recruiter will assess their skills to determine if their profile meets the job requirements.
            </p>
          </div>
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">3</span>
              <h3 style={{ color: "#15ba06" }}>
              Start an interview in the app itself !
              </h3>
            </div>
            <p> Arrange a one-on-one interview with the candidate on LynkkIN's platform and engage with them to validate their skill set.</p>
          </div>
        </div>
      </section>
      {/* our team section */}
      <div className="header-hero">
        <div className="container">
          <div className="col" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "70px" }}>
              <h2 class="HowItWorks_header__394j-">Our Team</h2>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-12 col-lg-12">
              <div className="row align-items-center">
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={parikshit}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Parikshit Sharma
                  </h3>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={dhruv}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Dhruv Shekhawat
                  </h3>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={kshitij}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Kshitij Singh
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section end */}
      <br style={{ lineHeight: "100px" }} />
    </div>
    </>
  );
};

export default HeroSection;

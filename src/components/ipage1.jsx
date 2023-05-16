import React from "react";
import "./css/ipage1.css";
import banner from "./images/banner.svg";
import Navbar from "./routes/Navbar";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Link } from "react-router-dom";

export default function Ipage1() {

  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <Carousel
    plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 1000,
      }
    },
  ]}   
  animationSpeed={1000}
>
  <h1 style={{backgroundColor:"#f8c9ff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Take Interview </h1>
  <h1 style={{backgroundColor:"#c6ff63",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Discuss with peers </h1>
  <h1 style={{backgroundColor:"#63fff7",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Verify candidate </h1>
  <h1 style={{backgroundColor:"pink",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Find Skill matching jobs </h1>
  <h1 style={{backgroundColor:"#9ef7d1",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Apply for job </h1>
  <h1 style={{backgroundColor:"#badfff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> Vedio call </h1>
  {/* <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} />
  <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} />
  <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} /> */}
</Carousel>
<br></br><br></br>
      <div>
        <h1 class="text-center">YOU ARE A :</h1>
      </div>
      <div class="Jumbotron text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1><a href="http://localhost:3000/i1" style={{textDecoration:"none",padding:"10px"}}>Recruiter</a></h1>
      </div>
      
      <div class="Jumbotron text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1><a href="http://localhost:3000/i2" style={{textDecoration:"none",padding:"10px"}}>Job Seeker</a></h1>
      </div>
      <div class="text-center" style={{ marginTop: "50px", marginBottom: "50px" }} >
        <h3 style={{color:"black"}}>Everything  you need to find your</h3>
        <h1>NEXT RELEVANT JOB</h1>
      </div>

      <div id="bannerimage"></div>
<br></br><br></br>
<hr></hr>
      {/* <div class="text-center" style={{ marginTop: "100px", marginBottom: "100px" }} >
        <h1>Problems Solved Count : 96/450</h1>

      </div> */}









    </>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./routes/Navbar";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';
export default function Parent(){
const [repo,setRepo]=useState([]);
const getRepo = () =>{
    axios.get('http://localhost:5000/api/blogs')
    .then((res)=>{
        var myRepo = res.data;
        myRepo.reverse();
        setRepo(myRepo);
    });

};
useEffect(() => getRepo()
, []);
const mystyle2 = {
    width: "140px",
    backgroundColor: "#ff80b3",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "20px",
    marginLeft: "15px",
    marginBottom: "25px",
    height: "50px",
    fontWeight: 'bold'
  };
return (
    <div>
      <Navbar></Navbar>
        <div >
        <a className="btn" href="http://localhost:3000/post" style={{"margin-left" : "30px"}}><input className="btn" type="button" style={mystyle2} value="Post a Job"/></a>
        </div>
        <br></br>
        <br></br>
        {repo.map((repos)=> (
            <div>
                <MDBCard style={{ width: '90vw' ,marginLeft: '4vw',marginTop: '10px',marginBottom:'20px',backgroundColor :'#f2f2f2'}}>
      <MDBCardBody>
        <MDBCardTitle>Job No. {repos.id}</MDBCardTitle>
        <hr></hr>
        <MDBCardText>
          {repos.doubt}
        </MDBCardText>
        <hr></hr>
        <MDBCardSubTitle>Posted by {repos.postedby}: on {repos.createdAt}</MDBCardSubTitle>
        {/* <MDBCardLink href='#'>Reply</MDBCardLink>
        <MDBCardLink href='#'>Like</MDBCardLink> */}
      </MDBCardBody>
    </MDBCard>
            </div>
        ))}
        
    </div>
)
}


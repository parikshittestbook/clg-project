import React from 'react';
import axios from 'axios';
import Navbar from "./routes/Navbar";
const reactData = [{name:' Tom',password:'test123'}];
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',password: '',};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    //alert('A form was submitted: ' + this.state);
    const { name, password } = this.state;

    const book = {
      name,
      password
    };
     console.log(book);
    // axios.get('http://localhost:5000/api/users/')
    // .then(res => {
    //   console.log(res.data);
    //   for(var user of res.data)
    //   {
    //     if(book.name == user.name && (book.password==user.password)){
    //     localStorage.setItem('curruser', user.name);
    //     let cnf = window.confirm("login success");
    //     if(cnf)
    //     {
    //       window.location.href='http://localhost:3000/home';
    //     }
    //     }
    
    //   }
    // })
    //   .catch(err => {
    //     console.error(err);
    //   });
};
 
  render() {
    const mystyle = {
      backgroundColor:"#e6fffd",
      width:"40vw",
      height:"55vh",
      margin:"auto",
      marginTop:"20px",
      marginBottom:"30px",
      border:"1px solid black",
      borderRadius:"10px"
    }
    const mystyle2 = {
      width: "80px",
      backgroundColor: "#ff80b3",
      padding: "0px",
      fontFamily: "Arial",
      fontSize: "18px",
      marginLeft: "15vw",
      marginBottom: "15px",
      marginTop: "15px",
      height: "30px",
      fontWeight: 'bold'
    };
    return (
      <>
      <Navbar></Navbar>
      <div style = {mystyle}>
      <form onSubmit={this.handleSubmit} >
        <h1 style={{fontSize:"x-large",fontWeight:"bold",textAlign:"center"}}>Fill your details to start job search</h1>
        <hr></hr>
        
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"50px"}}>First Name:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="firstname" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"20px"}}>Last Name:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="lastname" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"20px"}}>Gender:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="gender" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"20px"}}>Industry:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="industry" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"20px"}}>Location:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="location" onChange={this.handleChange} />
        
        <br></br>
        <br></br>
        <input type="submit" style={mystyle2} value="Submit" />
        <div style={{marginLeft:"7vw",fontSize:"medium"}}>
        Facing trouble submitting? Check back after few minutes
        </div>
        
      </form>
      </div>
      </>
    );
  }
}
 
export default MyForm;
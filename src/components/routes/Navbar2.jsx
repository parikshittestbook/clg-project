import React from "react";
import "../css/navstyle.css";
import logo from "../images/logo2.jpeg";

export default function NavBar2(){
    return(
        <>

        <header className='navbar' style={{boxShadow: "3px 3px 10px #15ba06"}}>
             <a class="navbar__title " href="http://localhost:3000/"><img src={logo} width="75%"></img></a> 
            <div className='navbar__item'>
             <a href="http://localhost:3000/login" style={{textDecoration:"none", color:"#0b7d04"}}>Login</a>
            </div>
            <div className='navbar__item'>
            <a href="http://localhost:3000/register" style={{textDecoration:"none", color:"#0b7d04"}}>Signup</a>
            </div>
        </header>
        <div style={{backgroundColor:'#defcdc'}}>
            <div style={{textAlign:'center',fontSize:"medium"}}><b>Login</b> or <b>Register</b> to enter the whole new world of job search</div>
        </div>
   </>
    );
} 

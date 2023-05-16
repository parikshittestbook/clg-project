import React from "react";
import "../css/navstyle.css";
import logo from "../images/bridgelogo.jpeg";


export default function NavBar(){
    const handleClick = () =>{
        localStorage.clear();
        window.location.href = 'http://localhost:3000/';
    };
    return(
       <>
        <header className='navbar' style={{boxShadow: "3px 3px 10px #15ba06"}}>
             <a className="navbar__title " href="http://localhost:3000/home"><img src={logo} width="65%"></img></a> 
            <div className='navbar__item'>
             <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/ipage1">Dashboard</a>
            </div>
            <div className='navbar__item'>
             <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/dashboards">Reports</a>
            </div>
            <div className='navbar__item'>
            <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/discuss">Discuss</a>
            </div>
            {/* <div className='navbar__item'>About Us</div> */}
            <div className='navbar__item'>
            <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/ipage2">Search Job</a>
            </div>
            <div className='navbar__item'>
             <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/video">Video Interview</a>
            </div>
            <div className='navbar__item'><input type="button" value={'logout'} onClick={handleClick}></input></div>
        </header>
        <div style={{backgroundColor:'#defcdc'}}>
            <div style={{textAlign:'center',fontSize:"medium",fontWeight:"500", marginTop:"6px"}}><h3>Welcome back , <b>{localStorage.getItem('curruser')}</b></h3></div>
        </div>
        </>
   
    );
} 

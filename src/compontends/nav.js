import React , {useContext,useState,useRef} from 'react'
import{Link,useHistory} from "react-router-dom"
import Cookies from 'universal-cookie';
import "../css/header.css"
import{Userprovider} from '../App'
import {IoMdPerson} from "react-icons/io";



export default function Nav(props){
    const userinfo =useContext(Userprovider)
    const checker = useRef(null);
    const cookies = new Cookies();
    const history = useHistory();
    const [background,setbackground]=useState(false)
   
    const logouthandler=()=>{
        cookies.remove('access_token')
        sessionStorage.removeItem('Userinfo')
        userinfo.setuserinfo("")
    } 
    const gohome=()=>{
        history.push("/");
    }
    const uncheck=()=>{
       checker.current.checked=false
    }
    
    const navbackground=()=>{
        if(window.scrollY >= 80){
            setbackground(true)
        }else{
            setbackground(false)
        }
    } 
    window.addEventListener('scroll',navbackground)

    return(
        <div className="tophead">
            
            <input ref={checker} id="selecter" type="checkbox" /> 
            <div className="menuToggle">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo">
                    <small style={{color:"white"}}>LOGO</small>
                </div>
            </div>
            <div className={background?"header active":"header"}>
                
            <div className="icon" onClick={()=>{gohome();uncheck()}}>
                <span>MyLogo</span>
            </div>
            <div className="usermenu2">
                <ul className="items">
                    <li onClick={uncheck} className="item"><Link to="/">Home</Link></li>
                    <li onClick={uncheck} className="item"><Link to="/shoppage">Shop</Link></li>
                </ul>
            </div>
            
            <div className="usermenu">
                {userinfo.userinfo===""?
                    <div onClick={uncheck} className="logged"><Link to="/loginpage">Login</Link></div>           
                :
                    <div className="loggined">
                        <span className="usericon"><IoMdPerson /></span>
                        <span className="userinfo" >{userinfo.userinfo.name}</span> 
                        <ul className="userul" >
                            <li onClick={uncheck} className="userli"><Link to="/userinfopage">Track My Order</Link></li>
                            <li onClick={uncheck} className="userli" onClick={(e)=>{logouthandler();gohome()}}><Link to="/loginpage">Logout</Link></li>
                            <li onClick={uncheck} className="userli"><Link to="/userorderpage">My order</Link></li>
                        </ul>
                        
                    </div>
                }
            </div>
            
            </div>
            </div>
        
    );
}
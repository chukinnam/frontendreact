
import React,{useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import wrongimage from "../../icon/wrong.png"
import {Container, Loginbox,Errormessage,Register} from './loginstyle'


export default function Login(props){
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [remember,setremember]=useState(false)
    const [errormessage,seterrormessage]=useState()
    const cookies = new Cookies();
    const history = useHistory();

    
  

    const handleVaildate=(e)=>{
      if(e.target.name==="email" && e.target.value===""){
        console.log("email require")
      }
      if(e.target.name==="password" && e.target.value===""){
        console.log('password required ')
      }

    }
    const handleSubmit=(e)=>{
        var data = JSON.stringify({"email":email,"password":password,"remember_me":remember});
        var config = {
          method: 'post',
          url: 'http://127.0.0.1:8000/api/auth/login',
          
          
          headers: { 
            'Content-Type': 'application/json',
            'Access': 'application/json',
            "Access-Control-Allow-Origin":"*"
          },
          data : data
        }; 
        axios(config)
        .then(function (response) {
          let token=JSON.stringify( response.data.access_token);
          cookies.set("access_token",token,  { path: '/',sameSite:'lax'});
          //Call parent props function 
          props.getUserInfromation()
          //go back to "/" page that in the history
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
          seterrormessage(error.response.data.message)
        });   
        e.preventDefault();
    }

    return(
      
       <Container>
           <Loginbox>
               <Errormessage errormessage={errormessage}>
                 <div className="wrongicon">
                    <img className="errormessageicon" src={wrongimage} alt="wrong_image" height="50px" width="50px"></img>
                    <span className="systemerrormessage">{errormessage}</span>
                  </div>
                </Errormessage>
              <div className="olduser">
                <form onSubmit={(event)=>{handleSubmit(event)}}>
                  <div className="inputBox">
                    <span>Email Address</span>
                    <input name="email" type="email" required="required" autoFocus  value={email} onBlur={(e)=>{handleVaildate(e)}} onChange={(e)=>{setemail(e.target.value)}} />
                  </div>
                  <div className="inputBox">
                    <span>Password</span>
                    <input name="password" type="text" required="required"  value={password} onBlur={(e)=>{handleVaildate(e)}} onChange={(e)=>{setpassword(e.target.value)}} />
                  </div>
                 <div className="inputBox">
                    <span>Remember me</span>
                    <input type="checkbox" onChange={(e)=>{setremember(!remember)}} />  
                  </div>
                  <div className="inputBox">
                    <input className="submitbutton" type="submit" value="Login" />
                  </div>
                </form>
              </div>
               <div className="newuser">
                    <Register to="/register" >Register New User</Register>
               </div>
           </Loginbox>
       </Container>
    );

      




}

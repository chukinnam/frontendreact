import React, { useState } from 'react'
import {Container, Registerbox,RegisterForm,RegisterFormHeadrer,Inputbox,Inputline,Span,CreateBox,Errormessage} from './regisdterstyle'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register(props) {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [passwordconfirm,setpasswordconfirm]=useState("")
    const [email,setemail]=useState("")
    const [vaildatemessage,setvaildatemessage]=useState("");
    const [servererrormessage,setservererrormessage]=useState("")
    const history = useHistory();
    // npm react toast liberary alert message 
    toast.configure()
    var vailded=true;
   //problem vaildatemessage update delay problem 

    const validatehandle= ()=>{
        vailded=true;
        setvaildatemessage("");
        if(username.length>16){
            vailded=false;
            //callback function will update before add the new value 
            setvaildatemessage((prevState)=>({...prevState,username:"Username Cannot longer than 16 words"}))   
        } 
        if(password!=passwordconfirm){
            vailded=false;
             //callback function will update before add the new value 
            setvaildatemessage((prevState)=>({...prevState,passwordconfirm:"Password Not Match"}))
        }
 
    

    }
    const submithandler=(e)=>{
                if(vailded){
                var data = JSON.stringify({"name":username,"email":email,"password":password,"password_confirmation":passwordconfirm});
                var config = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/auth/signup',
                    headers: { 
                      'Content-Type': 'application/json', 
                      'X-Requested-With': 'XMLHttpRequest'
                    },
                    data : data
                  };
                  
                axios(config)
                .then(function (response) {
                     // npm react toast liberary alert message 
                    toast.success('Create Success Please login', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    history.push("/loginpage");
                })
                .catch(function (error) {
                  
                    setservererrormessage(error.response.data.errors)
                   
                })
            }
            e.preventDefault();

        
    }
    return (
       <Container>
           
           <Registerbox>
                <RegisterForm onSubmit={(e)=>{validatehandle();submithandler(e)}}>
                    <RegisterFormHeadrer>Creat Account</RegisterFormHeadrer>
                    <Inputbox>
                        <Inputline type="text" name="username" required="required"onChange={(e)=>{setusername(e.target.value)}}></Inputline>
                        <Span>User Name</Span>
                        <Errormessage>{vaildatemessage.username}{servererrormessage.name?servererrormessage.name[0]:null}</Errormessage>
                    </Inputbox>
                    <Inputbox>
                        <Inputline type="text" name="email" required="required" onChange={(e)=>{setemail(e.target.value)}}></Inputline>
                        <Span>Email</Span>
                        <Errormessage>{vaildatemessage.email}{servererrormessage.email?servererrormessage.email[0]:null}</Errormessage>
                    </Inputbox>
                    <Inputbox>
                        <Inputline type="text" name="password" required="required"  onChange={(e)=>{setpassword(e.target.value)}}></Inputline>
                        <Span>Password</Span>
                        <Errormessage>{vaildatemessage.password}{servererrormessage.password?servererrormessage.password[0]:null}</Errormessage>
                    </Inputbox>
                    <Inputbox>
                        <Inputline type="password" name="passwordconfirm" required="required"  onChange={(e)=>{setpasswordconfirm(e.target.value)}}></Inputline>
                        <Span>Password Confirm</Span>
                        <Errormessage>{vaildatemessage.passwordconfirm}{servererrormessage.password?servererrormessage.password[0]:null}</Errormessage>
                    </Inputbox>
                    <CreateBox>
                        <Inputline type="submit" value="Create"></Inputline>
                    </CreateBox>
                </RegisterForm>
           </Registerbox>
       </Container>
    )
}

export default Register

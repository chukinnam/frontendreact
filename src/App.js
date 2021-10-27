import React,{useEffect, useState} from 'react';
import "./css/app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios"
import Cookies from 'universal-cookie';
import Nav from "./compontends/nav"
import Home from "./compontends/home/home"
import Login from "./compontends/login/login"
import Shop from "./compontends/shop/ps5/shop";
import Register from './compontends/register/register'
import Cart from './compontends/cart/cart'
import Userinfo from './compontends/userinfo/userinfo'
import Footer from './compontends/footer/footer'
import Productdetail from './compontends/shop/productdetail/productdetail'
import Checkout from './compontends/checkout/checkout'
import Uscerorder from './compontends/userorderdata/userorder'
import Scrolltotop from './compontends/scrolltotop'

export const Userprovider=React.createContext();
function App() {
  const [userinfo,setuserinfo]=useState("")
  const useobjectprovider={
    userinfo:userinfo,
    setuserinfo:(user)=>{
      setuserinfo(user)
    }
  }
  const cookies = new Cookies();

  useEffect(()=>{
    if(sessionStorage.getItem('Userinfo')){
      setuserinfo(JSON.parse(sessionStorage.getItem('Userinfo')))
    }else {
      getUserInfromation()
    }
  },[])
  //Call from login components after login success 
  //Get the userinformation if logged 
  const getUserInfromation=()=>{
    if(cookies.get('access_token')){
    let accessToken=cookies.get('access_token')
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/auth/user',
      
     
      headers: { 
        'Authorization': 'Bearer ' + accessToken
      }
    };
    axios(config)
    .then(function (response) {
      sessionStorage.setItem('Userinfo', JSON.stringify(response.data))
      setuserinfo(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  } 

  return (
    <Router>
      <Scrolltotop/>
      <Userprovider.Provider value={useobjectprovider}>
      <Nav />
      <Switch>
          <Route path="/" exact
            render={props=>(
              <Home {...props} />
            )}>
          </Route>
          <Route path="/detail">
              <Productdetail/>
          </Route>
          <Route path="/checkout">
                <Checkout/>
          </Route> 
          <Route path="/userorderpage">
            <Uscerorder/>
          </Route>  
          <div className="body">
            <Route path="/loginpage" exact
              render={props=>(
                <Login {...props} getUserInfromation={getUserInfromation} />
              )}>
            </Route>
            <Route path="/shoppage">
                <Shop/>
            </Route>
            <Route path="/register"
              render={props=>(
                <Register {...props} getUserInfromation={getUserInfromation}/>
              )}>
            </Route>
            <Route path="/userinfopage">
                <Userinfo/>
            </Route>
            <Route path="/cartpage">
                <Cart/>
            </Route>
          </div>
        
      </Switch>    
      <Footer/>
      </Userprovider.Provider>
    </Router>
    
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Container,Photo,Content,Prcie,Submitmessage} from './productdetailstyle'
import { AiOutlineShoppingCart } from "react-icons/ai";
function Productdetail() {
    const location = useLocation();
    const id = location.search;
    const product= id.substr(1);
    const [data,setdata]=useState('');
    const [logged,setlogged]=useState(false);
    const [showmessage,setshowmessage]=useState(false)
    const cookies = new Cookies();
    

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://127.0.0.1:8000/api/gameinfo/`+product,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
           setdata(response.data[0])
          })
          .catch(function (error) {
            console.log(error);
          });

          if(cookies.get('access_token')){
            setlogged(true);
          }
    }, [])
    useEffect(() => {
      const timer = setTimeout(() => {
        setshowmessage(false);
      }, 3000);
      return () => clearTimeout(timer);
   }, [showmessage]);

  
    
    const addproduct=(e)=>{
      if(!cookies.get('access_token')){
        e.preventDefault();
      }
      if(cookies.get('access_token')){
        let cart=[];
        if(localStorage.getItem("Mycart")){
          cart.push(localStorage.getItem("Mycart"));
        }
        let product=data.id;
        cart.push(product.toString())
        localStorage.setItem("Mycart",cart)
      }else{

      }
    }
    const displaymessage=()=>{
      setshowmessage(true);
    }
  


    return (
      <div>
        <Submitmessage showmessage={showmessage}>
          <div>
            <div className="carticon">
              <AiOutlineShoppingCart/>
            </div>
            <div className="message">
            <h3>Added item to cart</h3>
            </div>
          </div>
        </Submitmessage>
        <Container>
            <Photo>
              <div>
              <img  src={"http://127.0.0.1:8000/api/image/"+data.gamephoto} ></img>
              </div>
            </Photo>
            <Content>
              <h1>{data.gamename}</h1>
              <p>{data.gameinfo}</p>
            </Content>
            <Prcie logged={logged}>
              <span>${data.gameprice}</span>
              <div>
                {logged?<h3>※Clikc On "BUY" Button To Add To Cart</h3>: <h3>※Login Before Shopping</h3>}
              </div>
              <div>
                <input type="button" value="BUY" alt="buy" onClick={(e)=>{addproduct(e);displaymessage(e)}}></input>
              </div>
            </Prcie>
        </Container>
      </div>
    )
}

export default Productdetail;

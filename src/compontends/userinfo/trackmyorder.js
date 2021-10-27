import React, { useState,useEffect} from 'react'
import{Container,Total,Item,Gamedetail,Buybutton,Table,Row,Flex} from './trackmyorderstyle'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from "react-router-dom";


function TrackMyOrder(props) {
    const [products,setproducts]=useState("");
    const [number,setnumber]=useState("");
  
    const cookies = new Cookies();
    var numarray=[];
    var summary=0;
    toast.configure()
    const history = useHistory();




    if(localStorage.getItem("Mycart")){
    var data=localStorage.getItem("Mycart").split(",")
    }



    useEffect(() => {
        if(localStorage.getItem("Mycart")){
        data.forEach((cart)=>{
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/gameinfo/'+cart,
                headers: { }
              };  
              axios(config)
              .then(function (response) {  
                setproducts(prev => ([...prev, response.data]))
              
                      
              })
              .catch(function (error) {
                console.log(error)
                 
              });
              setnumber((pre)=>({...pre,[cart]:"1"}))
        })
    }
       
    }, [])
    

    if(data===undefined){
        return (
            <Container>
                <div>not items</div>
            </Container>
        )
    }
    const minus=(e)=>{
        let newcart=products.filter((item)=>{

            return item[0].id!==e;
        })
        let newMycar=data.filter((item)=>{
            return item!=e
        })
        localStorage.setItem("Mycart",newMycar);
        setproducts(newcart);
    }
    const checkout=()=>{
        let accessToken=cookies.get('access_token')
        var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/usercheckout',
        headers: { 
            'Authorization': 'Bearer '+accessToken,
            'Content-Type': 'application/json'
        },
        data : {"orderdata":data,"number":numarray}
        };

        axios(config)
        .then(function (response) {
            localStorage.removeItem("Mycart")
            toast.success('checkout success', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                history.push("/checkout");
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    const checkoutloop=()=>{
        pusharray();
        let result =''
     
        for (let index = 0; index < products.length; index++) {
           let price=products[index][0].gameprice;
         
           result=`${result}+${price*numarray[index]}`
           summary=summary+price*numarray[index]
        }
        return result.slice(1)
    }

    const chnagenumber=(e)=>{
        let value=e.target.value;
        setnumber((pre)=>({...pre,[e.target.id]:value}))
    }


    const pusharray=()=>{
        if(number!=""){
            data.forEach((id)=>{
            
                for (const key in number) {
                  
                    if(id==key){
                    
                        numarray.push(number[key]);
                    }
                }
            })
        }
     
    }


    
    

    return (
       <Container>
                <Table>
                    <Row>Item</Row>
                    <Row>Quantity</Row>
                    <Row>Price</Row>
                </Table>
                <Flex>
                {products===""?null:products.map((item)=>{
                    return(
                            <Item key={item[0].id}>
                                
                                    <div>
                                        <img alt={item[0].gamephoto}  src={"http://127.0.0.1:8000/api/image/"+item[0].gamephoto}></img>
                                    </div>
                            
                                    <Gamedetail>
                                   
                                        <div> {item[0].gamename}</div>
                                        <div>
                                            <input id={item[0].id} min={1} defaultValue={1} style={{width:"100px", textAlign: "center"}} type="number"  onChange={(e)=>{chnagenumber(e)}}></input>
                                        </div>
                                        <div>
                                            <button onClick={()=>{minus(item[0].id)}}>Delete</button>
                                        </div>
                               
                                    </Gamedetail>
                                    <Buybutton>
                                  
                                            <div> ${item[0].gameprice}</div>
                                    
                                    </Buybutton>
                               
                            </Item>
                
                        )
                    })
                }
                </Flex>

           
           <Total>
               <div>
                    <div>
                    ORDER SUMMARY :{checkoutloop()}
                    </div>          
               </div>
               <div>Total:${summary}
                </div>
                <div>
                    {props.address?<button   onClick={()=>{checkout();pusharray()}}>Checkout</button>:<div><h3>Import Address Befroe Checkout</h3></div>}
                </div>
           </Total>
       </Container>
    )
}

export default TrackMyOrder

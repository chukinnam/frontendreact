import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios"
import {Container,Tr,Th,Td,Thead,Tbody} from './userorderstyle'

function Userorder() {
    const [order,setorder]=useState("")
    const cookies = new Cookies();
    useEffect(()=>{
        let accessToken=cookies.get('access_token')
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/auth/getuserorder',
            headers: { 
                'Authorization': 'Bearer ' + accessToken
            }
          };
          
          axios(config)
          .then(function (response) {
            setorder(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
          
    },[])
    return (
        <Container>
            <div>
                <h1>Total Order</h1>
            </div>
            
               
                {order==""?<div>No order record!</div>:
                <table>
                <Thead>
                        <Th>Item</Th>
                        <Th>Quantity</Th>
                        <Th>Price</Th>
                        <Th>Stauts</Th>   
                </Thead>
                {order.map((item)=>{
                    return(
                        <Tbody key={item.id}>
                        <Tr>
                            <Td data_lable="Item"><img  alt="somephoto"src={"http://127.0.0.1:8000/api/image/"+item.gamephoto}></img></Td>
                            <Td data_lable="Quantity">
                                <div>
                                    <div>
                                        <span>Game Name:</span><span>{item.gamename}</span>
                                    </div>
                                    <div>
                                        <span>Quantity:</span><span>{item.pivot.number}</span>
                                    </div>
                                </div>
                            </Td>
                            <Td data_lable="Price">
                                <div>
                                    {item.gameprice}x{item.pivot.number}={item.gameprice*item.pivot.number}
                                </div>
                            </Td>
                            <Td data_lable="Stauts">
                                <div>
                                    {item.pivot.status}
                                </div>
                            </Td>
                        </Tr>
                        </Tbody>
                    )
                })}
                </table>
                }
                
                
            
        </Container>
    )
}

export default Userorder

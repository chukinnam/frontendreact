import React, { useState,useEffect } from 'react'
import Itembox from '../ps5/itembox'
import {Items,H1} from './switchstyle'
import axios from 'axios'


function Switchpage() {
    const [products,setproducts]=useState("")

    useEffect(() => {
        var data = JSON.stringify({"type":"sw"});

        var config = {
          method: 'post',
          url: 'http://127.0.0.1:8000/api/gameinfo',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
   
          setproducts(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
                    
    }, [])

    return (
        <div>
            <H1>Switch Game</H1>
             <Items>
                    {products===""?null:products.map((product)=>{ 
                        return ( 
                            <Itembox
                                key={product.id}
                                product={product}
                            />
                        )
                    })}
             </Items>
        </div>
    )
}

export default Switchpage

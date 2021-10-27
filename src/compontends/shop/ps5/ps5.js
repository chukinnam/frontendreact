import React, { useState,useEffect } from 'react'
import Itembox from './itembox'
import {Items,H1} from './ps5style'
import axios from 'axios'

function Ps5() {
    const [products,setproducts]=useState("")

    useEffect(() => {
        var data = JSON.stringify({"type":"ps5"});

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
            <H1>PS5 Game</H1>
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

export default Ps5

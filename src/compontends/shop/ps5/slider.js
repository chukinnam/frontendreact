import React, { useEffect, useState } from 'react'
import {Showbox,Radio,Photo,Slider,Silde,Labblebox,Lable,Right,Left} from './sliderstyle'
import banner1 from "../../../images/banner1.jpg"
import banner2 from "../../../images/banner2.jpg"
import banner3 from "../../../images/banner3.jpg"
import banner4 from "../../../images/banner4.jpg"

export default function Showslider() {
    const[radionum,setradionum]=useState(1)
    const[slider,setslide]=useState(0)
   
    useEffect(() => {
        let play=setInterval(Autoplay,3000);
        return () => {
            clearInterval(play);
        }
    }, [])
    const Autoplay=()=>{  
            setslide((prevstate)=>(prevstate<3?prevstate+1:0))
            setradionum((prevstate)=>(prevstate<4?prevstate+1:1))
    }
    const lablecolorchontroll=(e)=>{
        setradionum(e.target.id)
    }
    const myslider=(e)=>{
        setslide(e.target.id-1)
        
    }

    return (
        <Showbox>
           
            <Slider slider={slider} >
                <Radio type="radio" id="1" name="controller" onClick={(e)=>{lablecolorchontroll(e);myslider(e)}}/>
                <Radio type="radio" id="2" name="controller" onClick={(e)=>{lablecolorchontroll(e);myslider(e)}}/>
                <Radio type="radio" id="3" name="controller" onClick={(e)=>{lablecolorchontroll(e);myslider(e)}}/>
                <Radio type="radio" id="4" name="controller" onClick={(e)=>{lablecolorchontroll(e);myslider(e)}}/>
            
                <Silde>
                   <Photo src={banner1}/>
                </Silde>
                <Silde>
                    <Photo src={banner2}/>
                </Silde>   
                <Silde>
                    <Photo src={banner3}/>
                </Silde>
                <Silde>
                    <Photo src={banner4}/>
                </Silde>
            </Slider>
            <Labblebox>
                <Lable radionum={radionum} htmlFor="1" />
                <Lable radionum={radionum}htmlFor="2" />
                <Lable radionum={radionum} htmlFor="3" />
                <Lable radionum={radionum}htmlFor="4" />
            </Labblebox>    
        </Showbox>
        
        
    )
}



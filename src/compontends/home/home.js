import React, { useEffect, useRef, useState } from 'react';
import {Container,Wallpaperbox,Wallpaperinfobox,Wallpapertext,Wallpaperbuy,Info,Videobox,Videotext,Secondgame,Title,Videoimage} from './homestyle'
import Spidermanwallpaper from '../../images/spidermanwallpaper.jpg'
import Spidervideo from '../../video/spider.mp4'
import Fozar from '../../images/forzawallpaper.jpg'
import Supermario from '../../images/supermariowallpaper.jpg'
import Spidermansmall from '../../images/spidermansmall.jpg'
export default function Home(){
    const [active,setactive]=useState(false)
    const [active2,setactive2]=useState(false)
    const secondgame1= useRef(null)
    const secondgame2= useRef(null)
    useEffect(() => {
        window.addEventListener("scroll",effectcomein)
        
    }, [])
    const effectcomein=()=>{
        if(secondgame1.current!==null){
            if(secondgame1.current.offsetTop+(secondgame1.current.clientHeight/4)-window.innerHeight<window.scrollY)
            {
                setactive(true)
            }
        }
        if(secondgame2.current!==null){
            if(secondgame2.current.offsetTop+(secondgame2.current.clientHeight/4)-window.innerHeight<window.scrollY)
            {
                setactive2(true)
            }
        }
       
    }
    return(
        <Container>
            <Videobox autoPlay loop muted>
                <source src={Spidervideo} type="video/mp4"/>
            </Videobox>
            <Videoimage>
                <img style={{maxWidth:"100%",maxHeight:"100%"}} src={Spidermansmall}></img>
            </Videoimage>
            <Videotext>
                <span>Marvel's Spider-Man: Miles Morales</span>
                <p>$49.99</p>
                <p>PS4 Only</p>
                <input type="button" value="Add To Cart"></input>
            </Videotext>
            <Info>
                <Wallpaperinfobox>
                    <Wallpapertext>
                            <span>Game overview</span>
                            <h2>Be greater. Be yourself.</h2>
                            <h2>Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.</h2>
                    </Wallpapertext>
                    <Wallpaperbuy>
                            <input type="button" value="But IT"></input>
                    </Wallpaperbuy>
                </Wallpaperinfobox>
            </Info>
            <Wallpaperbox>
                <img src={Spidermanwallpaper} style={{width:"80%",height:"100%"}}></img>
            </Wallpaperbox>
            <Title >
                Other New Game
            </Title>
            <Secondgame ref={secondgame1} active={active} >
                    <div>
                        <img src={Fozar} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div id="text">
                        <h1>Forza Horizon 4</h1>
                        <h3 >Live the Horizon Life when you play Forza Horizon 4. Experience a shared world with dynamic seasons.
                             Explore beautiful scenery, collect over 450 cars and become a Horizon Superstar in historic Britain. </h3>
                        <div id="button"><input type="button" value="But IT"></input></div>
                    </div>
            </Secondgame>
            <Secondgame ref={secondgame2} active={active2}>
                    <div id="small">
                        <img src={Supermario} style={{width:"100%",height:"100%"}}></img>
                    </div>   
                    <div  id="text">
                        <h1>Super Mario™ 3D All-Stars </h1>
                        <h3 >The physical version of Super Mario 3D All-Stars (released Sept. 18) will continue to be shipped to retailers 
                        and available for purchase through March 31, 2021 or while supplies last. The digital edition will be available through March 31, 2021. Once the 
                        digital edition has been purchased on your Nintendo Account, it can be re-downloaded and played if deleted from your device.</h3>
                        <div id="button"><input type="button" value="But IT"></input></div>
                    </div>
                    <div id="big">
                        <img src={Supermario} style={{width:"100%",height:"100%"}}></img>
                    </div>    
            </Secondgame>
        </Container>
      
    );

}
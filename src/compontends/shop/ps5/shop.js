import React from 'react'
import{Container,Items,Itemnav,Title,Layout,NavButton,Button,Controll,Carton2}from './shopstyled'
import Itembox from './itembox'
import Slider from './slider'
import PB from "../../../images/PB.png"
import Spider2 from '../../../images/spiderman2.png'
import Pscontroll from '../../../images/pscontroll.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Switchpage from '../switch/switch'
import Xboxpage from '../xbox/xbox'
import Ps5 from './ps5'
function shop() {
    var array=[1,2,3,4,5,6,7]
    return (
        <Layout>
            <Controll><img src={Pscontroll} style={{width:"100%",height:"auto"}}  alt="ps5controll"></img></Controll>
            <Slider></Slider>
            {/* <Title><img src={PB} style={{width:"100%",height:"inherit"}} alt="banner"></img></Title> */}
            <Container>           
                <Itemnav>
                    <NavButton>
                        <Link to={"/shoppage"}><Button type="button" value="PS5"/></Link>
                    </NavButton>
                    <NavButton>
                        <Link to={"/shoppage/xboxone"}><Button type="button" value="XBOX ONE" ></Button></Link>
                    </NavButton>
                    <NavButton>
                        <Link to={"/shoppage/switch"}><Button type="button" value="Switch" ></Button></Link>
                    </NavButton>
                </Itemnav>
                
                   <Switch>
                       <Route exact path='/shoppage'>
                            <Ps5/>
                       </Route>
                       <Route path='/shoppage/xboxone'>
                            <Xboxpage/>
                       </Route>
                       <Route path='/shoppage/switch'>
                            <Switchpage/>
                        </Route>
                   </Switch>
                
               
                <Carton2> <img src={Spider2} style={{width:"500px",height:"auto"}}alt="spiderman"></img></Carton2>
            </Container>
        </Layout>
    )
}

export default shop

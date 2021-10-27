import React from 'react'
import {Container,UL,Footerbox,LI} from './footerstyle'
import {Link} from 'react-router-dom'

function Footer() {
    return (
       <Container>
           <Footerbox>
               <UL>
                   <LI>NAV</LI>
                   <LI><Link to="/">Home</Link></LI>
                   <LI><Link to="/shoppage">Shop</Link></LI>
               </UL>      
                <UL>
                   <LI>GAME</LI>
                   <LI> <Link to={"/shoppage/xboxone"}>XBOXONE</Link></LI>
                   <LI> <Link to={"/shoppage"}>PS5</Link></LI>
                   <LI> <Link to={"/shoppage/switch"}>SWITCH</Link></LI>
               </UL>
           </Footerbox>
       </Container>
    )
}

export default Footer

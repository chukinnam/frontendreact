import React from 'react'
import {Container} from './checkoutstyle'
import successicin from '../../images/successicon.png'
import {FcNext} from "react-icons/fc";
import { useHistory } from "react-router-dom";
function Checkout() {
    const history = useHistory();
    const goback=()=>{
        history.push("/")
    }
    
    return (
        <Container>
            <div>
                <img src={successicin}></img>
                <h1> your order has been placed</h1>
                <div onClick={goback}> 
                    <div>
                        <span>continue shopping</span>
                    </div>
                    <div >
                        <FcNext style={{minWidth:"22px",minHeight:"22px"}}/>
                    </div>
                </div>
               
               
            </div>
        </Container>
    )
}

export default Checkout

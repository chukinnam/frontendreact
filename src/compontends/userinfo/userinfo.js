import React, { useState } from 'react'
import{Container,InformationBox,CartButton,Toggleinfoprmation} from './userinfostyle'
import Persionaldetail from './persionaldetail'
import TrackMyOrder from './trackmyorder'

function Userinfo() {
    const [showuserinfo,setshowuserinfo]=useState(true)
    const [address,setaddress]=useState(false)

    

    const ShowUserInformation=()=>{
        setshowuserinfo(true)
    }
    const ShowTrackMyOrder=()=>{
        setshowuserinfo(false)
    }
    const updateaddress=()=>{
        setaddress(true)
    }
    

    return (
        <Container>
            <InformationBox>
                <CartButton showuserinfo={showuserinfo} onClick={ShowUserInformation}>UserInformation</CartButton>
                <CartButton showuserinfo={showuserinfo} onClick={ShowTrackMyOrder}>Track My Order</CartButton>
                <Toggleinfoprmation>
                    {showuserinfo?<Persionaldetail  updateaddress={updateaddress}/>:<TrackMyOrder address={address}/>}
                </Toggleinfoprmation>
            </InformationBox>
        </Container>
    )
}

export default Userinfo

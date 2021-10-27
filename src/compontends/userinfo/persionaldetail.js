import React,{useContext, useState,useEffect,useReducer} from 'react'
import{Container,UserDetail,Address,Detail,Detail_Title,Inputebox,Addressbox} from './persionaldetailstyle'
import {Userprovider}from '../../App'
import axios from "axios"
import Cookies from 'universal-cookie';

function Persionaldetail(props) {
    const userinfo =useContext(Userprovider)
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [phonenumber,setphonenumber]=useState("")
    const [address1,setaddress1]=useState("")
    const [address2,setaddress2]=useState("")
    const [userdetailinfo,setuserdetailinfo]=useState("")
    //before the useeffect axios fetching data the isloading will true
    //after loaded the data will turn to "false"
    const [isloading,setloading]=useState(true)
    const cookies = new Cookies();


    useEffect(() => {
        let accessToken=cookies.get('access_token')
        let config={
            method:"get",
            url:"http://127.0.0.1:8000/api/auth/getuserdetailinfo",
            headers:{
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        };
        axios(config)
        .then((reposen)=>{
            setuserdetailinfo(reposen.data);
            //after the 'setuserdetailinfo' did set the loading =false 
            setloading(false);
            props.updateaddress();
            console.log(reposen.data)
 
        })
        .catch((error)=>{
            setloading(false);
            console.log(error)
        })
        return function cleanup(){
            setuserdetailinfo("")
        };
      
    },[])
    if(isloading){
        return (
            <Container>
                <h1>Lodaing....</h1>
            </Container>
        )
    }

    const submithandler=(e)=>{
        let accessToken=cookies.get('access_token')
        let address=address1+address2;
        var data = JSON.stringify({"firstname":firstname,"lastname":lastname,"phonenumber":phonenumber,"address":address});

        var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/insertuserdetailinfo',
        headers: { 
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        setuserdetailinfo(response.data)
        props.updateaddress();
        })
        .catch(function (error) {
        console.log(error);
        });
       e.preventDefault();
    }
    return (
        <Container>
            <UserDetail>
                <Detail>
                    <Detail_Title>UserName:</Detail_Title>{userinfo.userinfo.name}
                </Detail>
                <Detail>
                    <Detail_Title>Email:</Detail_Title>{userinfo.userinfo.email}
                </Detail>
                <Detail>
                    <Detail_Title>Password:</Detail_Title>********
                </Detail>
                {userdetailinfo.firstname===undefined?
                    <h2>Please Fill In The  Address Form Before Checkout </h2>
                :
                <div>
                    <Detail>
                        <Detail_Title>Firstname:</Detail_Title>{userdetailinfo.firstname}
                    </Detail>
                    <Detail>
                        <Detail_Title>Lastname:</Detail_Title>{userdetailinfo.lastname}
                    </Detail>
                    <Detail>
                        <Detail_Title>Phonenumber:</Detail_Title>{userdetailinfo.phonenumber}
                    </Detail>
                    <Detail>
                        <Detail_Title>Address:</Detail_Title>{userdetailinfo.address}
                    </Detail>
                </div>
                }
             </UserDetail>

            {userdetailinfo.firstname===undefined?
                <Address>
                    <Addressbox>
                        <Detail_Title>Address</Detail_Title>
                    </Addressbox>
                    <form onSubmit={(e)=>{submithandler(e)}}>
                    <Inputebox type="text" required="required" placeholder="First name" onChange={(e)=>{setfirstname(e.target.value)}}></Inputebox>
                    <Inputebox type="text" required="required" placeholder="Last name"onChange={(e)=>{setlastname(e.target.value)}}></Inputebox>
                    <br/>
                    <Inputebox type="text" required="required" placeholder="Phone number"onChange={(e)=>{setphonenumber(e.target.value)}}></Inputebox>
                    <br/>
                    <Inputebox style={{width:"50%"}} type="text" required="required" placeholder="Room,Floor,Building Name,"onChange={(e)=>{setaddress1(e.target.value)}}></Inputebox>
                    <br/>
                    <Inputebox style={{width:"50%"}} type="text" required="required" placeholder="District"onChange={(e)=>{setaddress2(e.target.value)}}></Inputebox>
                    <br/>
                    <Inputebox type="submit" value="ADD ADDRESS"/>
                    </form>
                </Address>
            :
                null
            }
        </Container>
    )
}
export default Persionaldetail

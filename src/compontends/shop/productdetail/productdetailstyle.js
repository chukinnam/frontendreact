import styled from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Container =styled.div`
    min-height:95vh;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    padding: 10px;
    &>div{
        color:white;
    }
    @media (max-width: 768px){
        grid-column: 1 / 4;
        grid-row:1/2;
    }
`
export const Submitmessage=styled.div`
    display: ${props=>props.showmessage?"block":"none"};
    position: fixed;
    cursor: default;
    z-index: 1000;
    min-width: 205px;
    min-height: 30px;
    background-color: white;
    border-radius: 10px;
    padding: 14px;
    tr
    &>div{
        &>.carticon{
            display: inline-block;
            margin-right:10px;
        }
        &>.message{
            display: inline-block;
            &>h3{
                color:red;
            }
        }
        
    }
`
export const Photo =styled.div`
    grid-column: 1 / 3;
    grid-row:1/3;
    align-self:center;
    &>div{
        width: 80%;
        height: 80%;
        margin: 0 auto;
        text-align:center;
        &>img{
        width:60%;
        height:100%;
        }
    }
    @media (max-width: 768px){
        grid-column: 1 / 4;
        grid-row:1/2;
    }
`
export const Content =styled.div`
    grid-column: 3 / 4;
    padding:50px;
    background-color:gray;
    
    &>p{
       
        font-weight: lighter;
        
    }
    &>h1{
        font-size:2rem;
        margin-bottom:60px;
        color:black;
   
    }
    @media (max-width: 768px){
        grid-column: 1 / 4;
    }
    @media (max-width:420px){

    }
    
   
`
export const Prcie =styled.div`
    grid-column: 3 / 4;
    padding:50px;
    background-color:gray;
    &>span{
        font-size:5rem;
        color:orange;
    }
    &>div{
        &>input[type=button]{
            width:300px;
            height:70px;
            float:right;
            font-size:2rem;
            border:1px solid orange;
            background-color:orange;
            cursor:${props => props.logged ?"pointer":"not-allowed"};
            transition:all 0.5s linear;
            opacity:${props=>props.logged?"1":"0.5"};
            ${props=>props.logged?"&:hover{background-color:gray;}":null};
        }
        &:nth-of-type(1){
            &>h3{
                color:red;
                float:right;
            }
            min-height: 30px;
            margin-top: 50px;
            margin-bottom: 20px;

        }
    }
    @media (max-width: 768px){
        grid-column: 1 / 4;
    }
    @media (max-width:420px){
        &>div{
        &>input[type=button]{
            width:100%;
            max-height:70px;
        }
    }
    }
`

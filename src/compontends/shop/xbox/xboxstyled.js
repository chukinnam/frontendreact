import styled, { keyframes } from 'styled-components'

export const Items=styled.div`
   display: flex;
   flex-flow:row wrap;
   width:100%;
   gap: 0px;
   background-color:black;
   justify-content:start;
   /* border: 2px solid white; */
   
`
export const H1=styled.h1`
   font-size:5vw;
   background-color:white;
   text-align:center;
   /* padding:10px 0 70px 10px; */
   letter-spacing:-1px;
   @media(max-width:768px){
      font-size:7vw;
   }
`
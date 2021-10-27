import styled, { keyframes } from 'styled-components'
export const Bigbox=styled.div`
    flex-basis:33.333333%;
    @media (max-width :1504px){
            flex-basis: 50%;
            max-width:50%
        }
    @media (max-width : 768px){
        flex-basis: 100%;
        max-width:100%
    }
`
export const Container=styled.div`
    display:flex;
    /* flex-basis:33.333333%; */
    /* flex:1; */
    flex-direction:column;
    /* margin:30px; */
    height:450px;
    padding: 15px;
    align-content:center;
    cursor:pointer;
    /* border:1px solid white; */
    &:hover{
        box-shadow:0 0 5px 3px rgba(255,255,255,1);
    }
   
`
export const Itemphotobox=styled.div`
    display:block;
    flex:2;
    position:relative;
    background-color:black;
    min-height:100px;
    text-align: center;
`
export const Itemphoto=styled.img`
    width:60%;
    height:100%;
    @media (max-width:375px){
        width: 80%;
        height: 83%;
    }
` 
export const Itemcontent=styled.div`
    position:relative;
    flex:1;
    display:flex;
    flex-direction:column;
    align-content:space-between;
`
export const Itemcontext=styled.div`
    color:white;
    font-size:1.5rem;
    flex:1;
    &:nth-of-type(even){
        &>a{
            color:orange;
        }
    }
`

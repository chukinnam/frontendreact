
import styled, { keyframes } from 'styled-components'
export const Layout=styled.div`
    min-height:95vh;
`
export const Title=styled.div`
    min-height:22vh;
    background-color:black;
`

export const Container=styled.div`
    min-height:90vh;
    display:flex;
    flex-direction:row;
    @media (max-width :1500px){
    flex-direction:column;
    }
`
export const Items=styled.div`
   display: flex;
   flex-flow:row wrap;
   width:100%;
   gap: 0px;
   background-color:white;
   justify-content: space-between;
   
`
export const Itemnav=styled.div`
    min-width:260px;
`
export const NavButton=styled.div`
    width:100%;
    min-height:100px;
    //box-shadow:inset 0 0 10px rgba(0,0,0,0.8);
    margin-bottom:2px;
    &:first-child{
        margin-top:2px;
    }

`
export const Button=styled.input`
    width:100%;
    height:100px;
    border:none;
    cursor:pointer;
    background-color:inherit;
    font-size:2rem;
    transition:all 0.5s;
    color:white;
    &:hover{
        background-color:gray;
    }
`
export const Controll=styled.div`
position:absolute;
right:-750px;
top:900px;
transform:rotate(-90deg);
@media (max-width:1452px){
    display:none;

}
`
export const Carton2=styled.div`
position:absolute;
left:-280px;
bottom:-1100px;
@media (max-width:1452px){
    display:none;

}
`
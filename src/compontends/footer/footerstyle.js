import styled from 'styled-components'

export const Container=styled.div`
    height:400px;
    width:100%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
`
export const Footerbox=styled.div`
    display:flex;
    flex-direction:row;
  justify-content:center;
    height:100%;
    width:20%;
`
export const UL=styled.ul`
    list-style:none;
    display: inline-block;
    padding:10px;

`
export const LI=styled.li`
margin-bottom:10px;
&>a{
    color:black;
}
&:nth-of-type(1){
    color:gray;
    margin-bottom:30px;
    text-decoration:underline 3px;

}
`

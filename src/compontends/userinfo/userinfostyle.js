import styled from 'styled-components'

export const Container=styled.div`
    min-height:95vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const CartButton=styled.button`
        border: none;
        outline: none;
        cursor: pointer;
        float: left;
        width: 50%;
        height :40px;
        font-size: 15px;
        top:-10px;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        
        &:last-of-type{
            background-color: ${(props)=>props.showuserinfo?"white":"#777"};
        }
        &:first-of-type{
            background-color: ${(props)=>props.showuserinfo?"#777":"white"};
        }
        &:hover{
            background-color: #777;
        }
`
export const InformationBox = styled.div`
    min-height:840px;
    width:800px;
    
`
export const Toggleinfoprmation=styled.div`
    clear:both;
`
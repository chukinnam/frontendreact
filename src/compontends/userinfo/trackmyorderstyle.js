import styled from 'styled-components'
export const Container = styled.div`
    background-color:#777;
    height:820px;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    padding:20px;
`
export const Cart = styled.div`
`
export const Flex= styled.div`
`
export const Item=styled.div`
    display:flex;
    border-bottom:5px solid white;
    min-height:300px;
    text-align:center;

    &>div{
        flex:1; 
        &>img{
            max-width:100%;
        }
    }
    @media (max-width:768px){
        flex-direction:column;
        &>div{
            flex:1;  
            &>img{
                max-width:100%;
            }
        }
    }
`
export const Gamedetail=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    gap: 12px;
    &>div{
        align-self:flex-start;
        margin:0 auto;
        &:nth-of-type(odd){
            font-size:1.2rem;
        }
    }
`
export const Buybutton=styled.div`
    align-self:center;
    text-align:center;
    &>div{
        color:orange;
        font-size:2rem;
    }
`
export const Total=styled.div`
    display:flex;
    flex-direction:column;
    min-height:250px;
    &>div{
        flex:1;
        &:nth-of-type(1){
            display:flex;
            justify-content:space-between;
            &>div{
                &:nth-of-type(1){
                    font-size:1.5rem;
                }
                &>button{
                width:100px;
                height:60px;
                }
            }
        }
        &:nth-of-type(2){
            font-size:3rem;
            color:orange;
            @media (max-width:375px){
                font-size:2rem;
            }
        }
        &:nth-of-type(3){
            &>button{
                font-size:2rem;
                border:none;
                padding:10px;
                width:200px;
                cursor:pointer;
                border-radius:10px;
                &:hover{
                    background-color:orange;
                }
            }
        }
    }
`
export const Table=styled.div`
    display:flex;
    text-align:center;
    @media (max-width:768px){
        display:none;

    }
   

`
export const Row=styled.div`
    flex:1;
    border: 2px solid black;

`
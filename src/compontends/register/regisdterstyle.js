import styled, { keyframes } from 'styled-components'

export const Container= styled.div`
      min-height: 95vh;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    `;
export const Registerbox=styled.div`
        position: relative;
        display: flex;
        justify-content:center;
        height: 800px;
        max-width: 100%;
        border-radius: 42px;
        overflow: hidden;

`
const comein =keyframes`
        from{
                transform:translateY(-100%)
        }
        to{
                transform:translateY(10%)
        }
`
export const RegisterForm= styled.form`
        left:10px;
        height:600px;
        width:500px;
        background-image: linear-gradient(45deg,#e69464f8, #9198e5);
        border-radius:15px;
        animation:${comein} 1s linear forwards;
        padding:70px 40px;
        box-shadow: 1px 5px 15px rgba(0,0,0,0.8);
      
        
`
export const RegisterFormHeadrer =styled.h1`
        text-align:center;
        margin-bottom:45px;
        line-height:1em;
        font-weight:500;
        padding-left:10px;
        border-left:5px solid black;
        font-size: 5vmin;
`
export const Inputbox= styled.div`
        position:relative;
        width:100%px;
        height:50px;
        margin-bottom:35px;
`
export const CreateBox=styled.div`
        position:relative;
        margin-top:78px;
        background:transparent;
        outline:none;
`
export const Span =styled.span`
        position: relative;
        display: inline-block;
        z-index:1;
        top: 13px;
        left: 10px;
        font-size:1rem;
        transition: all 0.5s linear;
        pointer-events:none;
`
export const Inputline=styled.input`
        position:absolute;
        top:0;
        left:0;
        width:100%;
        padding:10px;
        border-radius:4px;
        outline:none;
        font-size:16px;
        color:#111;
        &:focus ~ ${Span}{
                transform:translateY(-35px) translateX(-10px);
                font-size:0.85rem;
        }
        &:valid ~ ${Span}{
                transform:translateY(-35px) translateX(-10px);
                font-size:0.85rem;
        }
        &:last-child{
                background-image: linear-gradient(-152deg,#e69464, #9198e5);
                border:0;
                box-shadow: 0px 1px 8px #fff;
                cursor:pointer;
                &:hover{
                        box-shadow: 0px 1px 21px 6px #fff;

                }
        }
       
`
export const Errormessage =styled.div`
        position: absolute;
        top: 43px;
        left: 9px;
        color: #db1414;
        font-size: 15px;
`



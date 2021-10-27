import styled from 'styled-components'
import {Link} from 'react-router-dom'

    export  const Container= styled.div`
      min-height: 95vh;
      display:flex;
      justify-content: center;
      align-items: center;
    `;
   export const Loginbox=styled.div`
   
      position: relative;
      padding: 70px 40px;
      border-radius: 20px;
      background-image: linear-gradient(45deg,#e69464f8, #9198e5);
      display: flex;
      box-shadow: 0 5px 25px rgba(0,0,0,0.2);
      >div{
        flex: 1;
      }
      >div:last-child{
        border-left: 3px solid black;
      }
      .submitbutton{
        color: white;
        border-radius: 16%;
        border: none;
        font-size: 2rem;
        background-image: linear-gradient(-152deg,#e69464, #9198e5);
        margin-top: 16px;
        box-shadow: 0px 1px 8px #fff;
        transition:box-shadow 0.5s ease;
        &:hover{
            box-shadow: 0px 1px 21px 6px #fff;
        }
      }
    `;
    export const Errormessage=styled.div`
      display:${(props)=>props.errormessage?"block":"none"};
      position:absolute;
      top: 15px;
      color:red;
    `;
    // create the Link component that come form react-router-dom
     export const Register =styled(Link)`
      display: block;
      position: relative;
      width: 100%;
      color: rgba(0,0,0,0.5);
      top:50%;
      left:50%;
      transform: translate(-34%,-72%);
      font-size: 1.5rem;
      transition: all 0.5s linear;
      &:hover{
        color: rgba(0,0,0,1);
        transform: scale(1.2,1.2) translate(-28%,-50%);;
      }
    `;


    

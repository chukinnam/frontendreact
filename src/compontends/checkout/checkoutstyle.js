import styled from 'styled-components'

export const Container =styled.div`
    min-height: 95vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &>div{
        width: 70%;
        text-align: center;
        &>img{
            max-width:100%;
            max-height:100%
        }
        &>div{
            margin-top:100px;
            font-size:1rem;
            width: 100%;
            display:flex;
            cursor:pointer;
            justify-content: start;
        }
    }
`
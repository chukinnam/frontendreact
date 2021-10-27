import styled from 'styled-components'

export const Container=styled.div`
    min-height:95vh;
    background-color:gray;
    &>table{
        width:100%;
        border:2px solid black;
        border-collapse: collapse;
    }
`
export const Thead=styled.thead`
    max-height:300px;
    @media (max-width:768px){
        display:none;
    }
`
export const Tbody=styled.tbody`
    @media (max-width:768px){
        display:block;
    }

`
export const Tr=styled.tr`
    max-height:300px;
    @media (max-width:768px){
            display:block;
            max-height:100%;
        }

`
export const Th=styled.th`
    border: 2px solid black;
`
export const Td=styled.td`
    text-align:center;
    border: 2px solid black;
        &>img{
            max-width:100%;
            max-height:100%;
        }
        &:nth-of-type(2){
            &>div{
                &>div{
                margin-bottom:20px;
                text-align:start;
                &>span{
                    display:inline-block;
                    width:70%;
                        &:nth-of-type(even){
                            color:white;
                        }
                }
                }
            }
        }
        @media (max-width:768px){
            display:block;
            text-align:right;
            position:relative;
            &::before{
                content:"${props => props.data_lable}";
                position:absolute;
                left:0;
                width:30%;
                height:100%;
                text-align:left;
                border-right:2px solid black;

            }
            &:nth-of-type(2){
                &>div{
                    &>div{
                    text-align:right;
                    position:relative;
                    }
                }
            }
            &>img{
            max-width:50%;
            max-height:50%;
        }

        }
`

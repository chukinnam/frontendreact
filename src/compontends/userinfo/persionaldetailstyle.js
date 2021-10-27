import styled from 'styled-components'
export const Container = styled.div`
    background-color:#777;
    height:820px;
    width: 100%;
    display: flex;
flex-direction: column;
`
export const UserDetail=styled.div`
    min-height:400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`
export const Address=styled.div`
    background-color:white;
    min-height:400px;
    width: 90%;
    margin:0 auto;
`
export const Detail=styled.div`
        margin-bottom:20px;
        margin-left:20px;
        &:first-of-type{
            padding-top:40px;
        }
`
export const Detail_Title=styled.span`
    display:inline-block;
    min-height:20px;
    width:150px;
`
export const Inputebox=styled.input`
    display:inline-block;
    min-height:40px;
    width:150px;
    margin-left:20px;
    margin-bottom:20px;
`
export const Addressbox=styled.div`
    padding-top:20px;
    margin-bottom:20px;
    margin-left:20px;
`
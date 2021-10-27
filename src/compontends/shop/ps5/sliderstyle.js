import styled from 'styled-components'
export const Showbox=styled.div`
    position:relative;
    max-height:40vh;
    overflow:hidden;
`

export const Silde=styled.div`
    display:block;
    width:100%;

`
export const Photo=styled.img`
    width:100%;
    max-height:40vh;

`
export const Labblebox=styled.div`
    position:absolute;
    width:100%;
    bottom:10px;
    display:flex;
    justify-content:center;
    align-items:center;
  
`

export const Right =styled.div`
    position:absolute;
    width:80px;
    height:80px;
    top:50%;
    right:0;
    transform:translate(0,-50%);
    cursor:pointer;
`
export const Left=styled.div`
    position:absolute;
    width:80px;
    height:80px;
    top:50%;
    left:0;
    transform:translate(0,-50%);
    cursor:pointer;

`

export const Slider=styled.div(props=>({
    display:'flex',
    width:'400%',
    maxHeight:"40vh",
    transition:'all 0.5s',
    transform:`translateX(-${props.slider*25}%)`
}));
 



export const Radio=styled.input`
    display:none;
`
export const Lable=styled.label`
    border:2px solid black;
    padding:5px;
    border-radius:10px;
    cursor:pointer;
    margin-right:10px;
    transition:all 0.5s;
    &:nth-of-type(${props => props.radionum}){
        background-color:black;
    }

`
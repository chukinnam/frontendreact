import styled from 'styled-components'

export const Container=styled.div`
    background-color:white;
    position:relative;
    top:-46px;
`
export const Wallpaperbox=styled.div`
    text-align:center;
    background-color:black;
    @media (max-width: 768px) {
        display:none;
    }
 `
export const Info=styled.div`
    width:100%;
    height:100%;
    background-color:black;
    display:flex;
    justify-content:center;
    box-shadow: 0px -30px 20px 20px black;
    position: relative;
    @media (max-width: 768px) {
        box-shadow: none;
    }
`
export const Wallpaperinfobox= styled.div`
    width:70%;
    background-color:black;
    display:flex;
    position:relative;
    margin-top:100px;
    margin-bottom:150px;
    @media (max-width: 768px) {
        flex-direction:column;
        margin-bottom: 23px;
    }
`
export const Wallpapertext=styled.div`
    flex:1;
    & > span{
        color:white;
        letter-spacing:4px;
    }
    & > h2{
        color:white;
        line-height:2.25em;
    }
    @media (max-width: 768px) {
        & > span{
        color:white;
        letter-spacing:4px;
        font-size:0.5rem;
        }
        & > h2{
        color:white;
        line-height:2.25em;
        font-size:1rem;
    }
    }
`
export const Wallpaperbuy=styled.div`
    flex:1;
    &>input[type=button]{
        display:block;
        position:absolute;
        bottom:10px;
        right:10px;
        width:200px;
        height:100px;
        border-radius:10px;
        border:none;
        background-color:#ff0060;
        font-size:2rem;
        transition:all 0.5s;
        cursor:pointer;
        &:hover{
            box-shadow: 1px 1px 5px 5px #ff0060;
        }
    }
    @media (max-width: 768px) {
        &>input[type=button]{
        position:static;
        width:100px;
        height:50px;
        font-size:1rem;
        float: right;
        margin-top: 70px;
        }
    }
`
export const Videobox=styled.video`
    width: 100vw;
    height: 100vh;
    object-fit:cover;
    position:relative;
    @media (max-width: 768px) {
            display:none;
    }
`
export const Videoimage=styled.div`
    display:none;
    @media (max-width: 768px) {
            display:block;
            width: 100vw;
    }
`

export const Videotext=styled.div`
    position:absolute;
    top:300px;
    left:41%;
    transform:translate(-50%,-50%);
    color:white;  
    
    &>span{
        font-weight:300;
        font-size:4rem;
    }
    &>p{
        font-size:2rem;
        margin-top:20px;
        color:orange;
    }
    &>input[type=button]{
        position:absolute;
        margin-top:30px;
        height:40px;
        width:300px;
        background-color:orange;
        border:none;
        border-radius:10px;
        padding:30px;
        cursor:pointer;
        font-size:1.5rem;
        line-height:0px;
        &:hover{
            border:5px solid black;
        }
    }
    @media (max-width: 768px) {
        position:static;
        transform: translate(0%,0%);
        background-color: black;
        &>span{
        font-size:2rem;
        }
        &>p{
        font-size:1rem;
        }
        &>input[type=button]{
            height:20px;
            width:100%;
            position:static;
            font-size: 1rem;
            padding: 20px;
        }
    
    }  
`
export const Title=styled.h1`
    background-color:white;
    color:black;
    padding:50px 0px;
    text-align:center;
    border-top:3px solid white;
    font-size:3rem;
    @media (max-width: 768px) {
        padding:20px 0px;
        font-size:1rem;
    }
    
`
export const Secondgame=styled.div`
    background-color:black;
    flex-basis:50%;
    display:flex;
    justify-content:center;
    max-width:100%;
    color:white;
    #small{
             display:none;
            }
    #big{
        display:block;
    }
    #text{
                display:flex;
                flex-direction:column;
                justify-content:space-between;
            }
    &>div{
            position:relative;
            margin:60px;
            flex:1;
            &>h1{
                word-wrap: break-word;
                margin-top:60px;
            }
            #button{
                &>input[type=button]{
                   
                    top:400px;
                    height:40px;
                    width:300px;
                    background-color:orange;
                    border:none;
                    border-radius:10px;
                    padding:30px;
                    cursor:pointer;
                    font-size:1.5rem;
                    line-height:0px;
                    &:hover{
                        border:5px solid black;
                    }
                }
            }
            &>h3{
                line-height: 50px;
            }
           
          
    } 
    &:nth-of-type(even){
        &>div{
            transition:all 0.5s;
            ${props=>(props.active? "transform:translateY(0%);opacity:1;":"transform:translateY(100%);opacity:0;")
            
        }
      
    }
}
    &:nth-of-type(odd){
        &>div{
            transition:all 0.5s;
            ${props=>
            (
                props.active?
                    "transform:translateY(0%);opacity:1;"
                :
                    "transform:translateY(100%);opacity:0;"
            )
            
        }
      
    }
}
@media (max-width: 768px) {
    flex-direction:column;
        #big{  
                display:none;
            }
        #small{  
            display:block;
        }
    &>div{
            position:relative;
            margin:15px;
            flex:1;
            &>h1{
                word-wrap: break-word;
                margin-top:0px;
                }
            #button{
                &>input[type=button]{
                    
                    top:400px;
                    height:20px;
                    width:150px;
                    background-color:orange;
                    border:none;
                    border-radius:10px;
                    padding:30px;
                    cursor:pointer;
                    font-size:1.5rem;
                    line-height:0px;
                    &:hover{
                        border:5px solid black;
                    }
                }
             }
            &>h3{
                line-height: 30px;
            }
            
    } 
    

}
@media (max-width: 1514px){
    flex-direction:column;
        #big{  
                display:none;
            }
        #small{  
            display:block;
        }
        &>div{
            &>input[type=button]{
                top: 190px;
            }
            
            &>h1{
                margin-top:0;
            }
        }
    }
      
`

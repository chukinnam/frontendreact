import React from 'react'
import {Container,Itemphoto,Itemcontent,Itemphotobox,Itemcontext,Bigbox} from './itemboxstyle'
import {Link} from 'react-router-dom'

function itembox(props) {

    return (
        <Bigbox>
            <Link target="_blank" to={{ pathname: "/detail" ,search:`${props.product.id}`}}>
       <Container>
           <Itemphotobox>
           {/* <Link target="_blank"  to={{ pathname: '/detail', state: "haha" }}> */}
           
                <Itemphoto
                        src={`http://127.0.0.1:8000/api/image/${props.product.gamephoto}` }      
                >
                </Itemphoto>
          
            {/* </Link> */}
           </Itemphotobox>
           
           <Itemcontent >
           
                <Itemcontext><Link target="_blank" to={{ pathname: "/detail" ,search:`${props.product.id}`}}>{props.product.gamename} </Link></Itemcontext>
                <Itemcontext style={{color:"orange"}}>${props.product.gameprice}</Itemcontext>
           
           </Itemcontent>
         </Container>
        </Link>
       </Bigbox>
    )
}

export default itembox

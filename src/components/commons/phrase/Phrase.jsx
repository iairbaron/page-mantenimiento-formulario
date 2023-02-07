import React from 'react'
import img from "../../../images/60031-Converted.png"
import logo from "../../../images/ca822f_2200d6424a8c407d889ab01ed17b5eb5_mv2.png"


const Phrase = () => {
  return (<>
  <div style={{ textAlign: "center" }} >
  <img src={img} style={{width:"28%",height:"auto"}} />
  </div>
  <div style={{ textAlign: "center" }} >
    <h1 style={{  fontFamily: "Lato, sans-serif", fontSize:"3rem" }} >Pagina en mantenimiento</h1>
    <p style={{  fontFamily: "Lato, sans-serif", fontSize:"1.5rem" }}>Nuestro sitio se encuentra bajo mantenimiento, vuelva pronto!</p>
    <img src={logo} style={{maxWidth:"10%",height:"auto"
 }} />
<div ></div>
  </div></>
    
  )
}

export default Phrase
import React from 'react'
import lkn from "../../img/linkedin.png"
import git from "../../img/git.png"
import insta from "../../img/instagram.png"
import gmail from "../../img/mail.png"
import whats from "../../img/whats.png"
import "../../styles/home.css";

const Redes = () => {
    return (
        <>  
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="https://api.whatsapp.com/send?phone=0059899387921&text=Contacto%20desde%20la%20web.">
                            <img src={whats} style={{width: "45px", marginRight: "20px"}}/>
                        </a>
                    
                        <a href="https://www.linkedin.com/in/cecilia-perdomo/">
                            <img src={lkn} className="align-self-center" 
                            style={{width: "45px", marginRight: "20px"}}/> 
                        </a>
                    
                        <a href="https://github.com/CeciliaBPerdomo">
                            <img src={git} className="align-self-center" 
                            style={{width: "45px", marginRight: "20px"}} />
                        </a>
                    
                        <img src={insta} className="align-self-center" 
                        style={{width: "45px", marginRight: "20px"}} />
                   
                        <a href="mailto:cecilia.perdomo@gmail.com"> 
                            <img src={gmail} 
                            style={{width: "45px", marginRight: "20px"}}/>
                        </a>
                    </div>
                </div>
            </div>
      
        </>
    )
}

export default Redes;
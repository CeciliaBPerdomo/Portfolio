import React from "react";
import "../../styles/home.css";
import avatar from "../../img/avatar-sinfondo.png"
import down from "../../img/descarga.png"
import flecha from "../../img/flecha.png"

export const AboutMe = () => {
    return (
		<>
        <div className="principal">
			<div className="container text-center" 
			style={{marginTop: "45px", backgroundColor: "#F4EADC"}}>
				<div className="row">
					<div className="col">
                        <img src={avatar}/>
                    </div>
                    
                    <div className="col">
                            < br/>  < br/>
                        <p style={{fontFamily: "Nanum Gothic Coding, monospace", 
						fontSize: "21px"}}>
                        Soy Cecilia Perdomo, <b>Full Stack Software Developer</b>, 
                        <b>Analista Programadora</b> y próxima <b>Diseñadora UX/ UI</b>. 
                        < br/>  < br/>
                        Te invito a descargar mi curriculum si quieres conocer mi historial detallado.
                        < br/>
                        <img src={down} style={{width: "45px"}}/>
                        < br/>< br/>
                        Mas abajo podrás ver mis certificaciones más recientes.
                        </p>
                        <img src={flecha} style={{width: "55px"}}/>
                    </div>
                </div>
            </div>
            < br/>  < br/>
        </div>
        </>
    )
}

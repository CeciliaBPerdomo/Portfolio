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
                        <p style={{fontFamily: "Quicksand, sans-serif", 
						fontSize: "24px"}}>
                        Soy Cecilia Perdomo, <b>Full Stack Software Developer</b>, 
                        <b> Analista Programadora</b> y <b>Diseñadora UX/ UI</b>. 
                        < br/>  < br/>
                        Soy entusiasta, investigadora y curiosa por naturaleza. Constante y detallista ... y a veces creativa.
                        < br/> 
                        Me encanta saber, que en la programación, <b>el límite es la imaginación</b>. 
                        
{/*                         
                        <br/><br/>
                        
                        Te invito a descargar mi curriculum si quieres conocer mi historial detallado.
                       
                        < br/>

                        <a href={pdf} 
                        style={{textDecoration: "none", color: "black"}}>
                            <img src={down} style={{width: "45px"}}/>
                        </a> */}
                        < br/>< br/>

                        Mas abajo podrás ver mis algunas de mis certificaciones.
                        </p>
                        <img src={flecha} style={{width: "55px"}}/>
                    </div>
                </div>

                < br/>< br/>
                <div className="row">
                    <div className="col">
                        <b>Diseñadora UX/UI</b>
                        <br /> <br /> <br />
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className="col">
                        <b>Full Stack Software Developer</b>
                        <img src="https://media.licdn.com/dms/image/C4D2DAQF5AfIgPjHd_A/profile-treasury-image-shrink_800_800/0/1669830409899?e=1688569200&v=beta&t=mM31pOowWUo9bL8XLePeFGvbdVjxCeoinsYU3tGbfzY" 
                        style={{width: "350px"}}/>
                    </div>
                    <div className="col">
                        <b>Programación Backend</b>
                        <img src="https://media.licdn.com/dms/image/D4D2DAQHmPq8s9dnzNg/profile-treasury-image-shrink_800_800/0/1665868040450?e=1688569200&v=beta&t=HgioF6IoEYT3PkE_WV1ZHOrCZIhvbiq3mIhcprUWjFs"
                        style={{width: "250px"}} />
                    </div>
                </div>

                < br/>< br/>

                <div className="row">
                    <div className="col">
                        <b>Introducción a la programación</b>
                        <img src="https://media.licdn.com/dms/image/C4D2DAQFlSkH1NhNKQA/profile-treasury-image-shrink_800_800/0/1670024166179?e=1688569200&v=beta&t=rLN94lcOJrImQx5uB0GTSltP3NMVswwpOzJknc-GwQk" 
                        style={{width: "438px"}} />
                    </div>
                    <div className="col">
                        <b>Programador JavaScript - FrontEnd</b>
                        <img src="https://media.licdn.com/dms/image/D4D2DAQGl5vVLq0Lviw/profile-treasury-image-shrink_800_800/0/1687961649910?e=1688569200&v=beta&t=LmbMUZvUFQRY7lhmMnXkqblPwuqSsm9Ih6uCWo3LlL0" 
                        style={{width: "350px"}}/>
                    </div>
                    <div className="col">
                        <b>Software Tester</b>
                        <img src="https://media.licdn.com/dms/image/D4D2DAQGKGlDe_hMivg/profile-treasury-image-shrink_800_800/0/1687962434886?e=1688569200&v=beta&t=gKU4pb_CxSRwBCYQhgddWLSoTCKvp6pSuAW8leikCvU"
                        style={{width: "350px"}} />
                    </div>
                </div>

            </div>
            < br/>  < br/>
        </div>
        </>
    )
}

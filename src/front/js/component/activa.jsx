import React from 'react'
import "../../styles/home.css";
import activa from "../../img/LogoSinFondo.png"

const Activa = () => {
    return (
        <>  
            <div className="container">
            <div className="card mb-3" 
                style={{marginLeft: "35px", padding: "10px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={activa} className="img-fluid rounded-start" 
                            style={{marginTop: "10px", width: "55%", marginLeft: "75px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>Activa Fitness Club</b></h5>
                                <br />
                                <p className="card-text">Activa Fitness Club es un gimnasio de la ciudad de Colonia. La app web trabaja con un módulo de facturación y otro con las rutinas de ejercicios de los alumnos.</p>
                            </div>
                            <div className="card-body">
                                <ul style={{listStyle: "none"}}>
                                    
                                    
                                    <li className='d-flex justify-content-end'>
                                        <a href='https://activafitnessclub.herokuapp.com/'>
                                        <button type="button" className="btn btn-outline-primary" style={{width: "320px"}}>
                                            Versión en vivo
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activa
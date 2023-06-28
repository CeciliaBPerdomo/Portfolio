import React from 'react'
import "../../styles/home.css";
import cac from "../../img/cac.png"
import { Link } from "react-router-dom";


const ProyectosRecientes = () => {
    let titulo =">> Mi último proyecto"
    return (
        <>
            <div className='container'>
                <h3 style={{marginBottom: "10px", color: "#A90094"}}>{titulo}</h3>

                <div className="card mb-3" 
                style={{marginLeft: "35px", padding: "10px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cac} className="img-fluid rounded-start" style={{marginTop: "50px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>Colonia Aventura Corre</b></h5>
                                <br />
                                <p className="card-text">Colonia Aventura Corre es un equipo deportivo dedicado a la organización de eventos deportivos (carreras de trail, de MTB y de aventura).</p>
                            </div>
                            <div className="card-body">
                                <ul style={{listStyle: "none"}}>
                                    <li className='d-flex justify-content-end' style={{marginBottom: "10px"}}>
                                    <Link to={"/uxuicac"} style={{textDecoration: "none", color: "black"}}>
                                        <button type="button" className="btn btn-outline-primary" style={{width: "320px"}}>
                                            Estudio UX / UI
                                        </button>
                                    </Link>
                                    </li>
                                    
                                    <li className='d-flex justify-content-end'>
                                        <a href='https://colonia-aventura-corre.vercel.app/'>
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

export default ProyectosRecientes;

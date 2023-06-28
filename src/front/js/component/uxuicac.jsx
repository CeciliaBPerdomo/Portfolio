import React from "react";
import "../../styles/home.css";
import cac from "../../img/cac.png"
import { Link } from "react-router-dom";

export const UXUICAC = () => {
	return (
        <div className ="container">
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

                            <div className="card-body d-flex justify-content-end">
                                <a href='https://simplistic-cinnamon-1d0.notion.site/Capstone-1-Descubra-e15b0090301340df9b96dc62168de692?pvs=4'>
                                    <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "130px", marginRight: "15px"}}>
                                        Descubrir
                                    </button>
                                </a>

                                <a href='https://simplistic-cinnamon-1d0.notion.site/Capstone-2-Desarrollar-fcf270973b7a45e18b3353e66e45a207?pvs=4'>
                                    <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "130px", marginRight: "15px"}}>
                                        Desarrollar
                                    </button>
                                </a>

                                <a href='https://simplistic-cinnamon-1d0.notion.site/Capstone-3-Entregar-531f0abece3743b8a2becb8dd976859e?pvs=4'>
                                    <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "130px", marginRight: "15px"}}>
                                        Entregar
                                    </button>
                                </a>

                                <a href='https://simplistic-cinnamon-1d0.notion.site/Capstone-4-NDA-Pruebas-de-usuario-112e0d3258334202987afbb10f0aa4a4?pvs=4'>
                                    <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "130px", marginRight: "15px"}}>
                                        Pruebas
                                    </button>
                                </a>
                            </div>

                            <div className="card-body d-flex justify-content-end">
                                <a href='https://colonia-aventura-corre.vercel.app/'>
                                    <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "320px", marginTop: "-20px", marginRight: "15px"}}>
                                        Versión en vivo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
import React from "react";


export const Contacto = () => {
	return (
		<div className="container">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" 
                placeholder="Nombre y Apellido" />
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" 
                placeholder="name@example.com" />
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Mensaje: </label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                placeholder="Mensaje" rows="3"></textarea>
            </div>

            <div className="mb-3 d-flex justify-content-end">
                <button type="button" className="btn btn-outline-danger"
                style={{width: "320px"}}>
                    Enviar
                </button>
            </div>
        </div>
    )
}
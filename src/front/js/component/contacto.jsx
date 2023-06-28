import React from "react";


export const Contacto = () => {
	return (
		<div className="container">
            <form 
            action="https://formspree.io/f/xjvzeqpb"
            method="POST">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    placeholder="Nombre y Apellido" name="Nombre y apellido: "/>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                    placeholder="name@example.com" name="E-mail: " />
                </div>
                
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Mensaje: </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"
                    placeholder="Mensaje" rows="3" name="Mensaje: "></textarea>
                </div>

                <input name="subject" value="Contacto desde https://ceciliaperdomo.vercel.com" hidden="true"/>

                <div className="mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-outline-danger"
                    style={{width: "320px"}}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
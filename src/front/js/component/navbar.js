import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar">
			<div className="container d-flex justify-content-end text-center">		
				<div className="row" style={{fontSize: "22px", marginTop: "15px"}}>

					<div className="col" >
						<Link to={"/"} style={{textDecoration: "none", color: "black"}}>
							Home
						</Link>
					</div>

					<div className="col">
						<Link to={"/proyectos"} style={{textDecoration: "none", color: "black"}}>
							Proyectos
						</Link>
					</div>

					<div className="col">
						Servicios
					</div>

					<div className="col">
						<Link to={"/acercaDeMi"} style={{textDecoration: "none", color: "black"}}>
							Acerca de mí
						</Link>
					</div>

					<div className="col">
					<Link to={"/contacto"} style={{textDecoration: "none", color: "black"}}>
						Contacto
					</Link>
					</div>
				</div>
			</div>
		</nav>
		<hr />
		</div>
	);
};
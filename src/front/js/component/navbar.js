import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-end">
				<p style={{fontSize: "16px", marginTop: "15px"}}>
				Home | Acerca de mí | Proyectos | Servicios | Contacto |
				</p>
			</div>
		</nav>
	);
};

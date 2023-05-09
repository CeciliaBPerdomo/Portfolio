import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-end">
				<p style={{fontSize: "16px", marginTop: "15px"}}>
				<Link to={"/"} style={{textDecoration: "none", color: "black"}}>
				Home</Link> | <Link to={"/acercaDeMi"} style={{textDecoration: "none", color: "black"}}>Acerca de mí</Link> | Proyectos | Servicios | Contacto |
				</p>
			</div>
		</nav>
	);
};
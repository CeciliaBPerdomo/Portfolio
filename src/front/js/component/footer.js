import React from "react";
import Redes from "../component/redes.jsx"

export const Footer = () => {
	let y = new Date().getFullYear()

	return (
	<div className ="container">
		<hr />
		<p><b>Cecilia Perdomo - {y}</b></p>
		<Redes />
		<br />
	</div>
	)
};

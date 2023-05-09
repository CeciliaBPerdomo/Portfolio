import React, { Component } from "react";
import gmail from "../../img/mail.jpg"
import whats from "../../img/whats.jpg"

export const Footer = () => (
	<div style={{backgroundColor: "white"}}>
		<footer 
		style={{marginLeft: "15px"}}
		>
			<div className="row">
				<div className="col" style={{padding: "10px", maxWidth: "60px"}}>
					<a href="mailto:cecilia.perdomo@gmail.com"> 
						<img src={gmail} style={{
							width: "38px",
						}}/>
					</a>
				</div>
				<div className="col" style={{maxWidth: "60px"}}>
					<a href="https://api.whatsapp.com/send?phone=0059899387921&text=Contacto%20desde%20la%20web.">
						<img src={whats} style={{width: "37px", marginRight: "7px", marginTop: "8px"}}/>
					</a>
				</div>
				<div className="col" style={{padding: "10px"}}>
					<p style={{fontSize: "22px"}}>
						<b>@ Cecilia Perdomo - 2023</b>
					</p>
				</div>
			</div>
	</footer>
	</div>
);

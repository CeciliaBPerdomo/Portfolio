import React, { Component } from "react";
import gmail from "../../img/mail.jpg"
import whats from "../../img/whats.jpg"

export const Footer = () => (
	<div style={{backgroundColor: "white", height: "90px"}}>
	<footer style={{marginLeft: "15px"}}>
		<p style={{fontSize: "22px"}}>
			<img src={gmail} style={{width: "38px", marginRight: "7px", marginTop: "10px"}}/>
			<img src={whats} style={{width: "37px", marginRight: "7px", marginTop: "8px"}}/>
			<b>@ Cecilia Perdomo - 2023</b>
		</p>
	</footer>
	</div>
);

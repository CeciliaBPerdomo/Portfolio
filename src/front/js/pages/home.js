import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import avatar from "../../img/avatar-sinfondo.png"
import ProyectosRecientes from "../component/proyectos.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);
	let text = "< Full Stack Software Developer />"
	let mundo = "< Hola mundo 🌍! />"

	return (
		<>
		<div className="container">
			<div className="container text-center" 
			style={{backgroundColor: "#F4EADC"}}>

				<div className="row">
					<div className="col">
						
						<p style={{fontFamily: "Libre Baskerville, serif", 
						fontSize: "56px", color: "#A90094", marginTop: "35px"}}>
							{mundo} <br />
							Soy <b>Cecilia Perdomo</b>!
						</p>

						<br />

						<p style={{fontFamily: "Ysabeau Infant', sans-serif", 
						fontSize: "24px"}}> 
						{text} <br />
						👨‍🎨 Diseñadora UX / UI 
						</p>
						<br />

						
					</div>

					<div className="col" style={{marginTop: "10px"}}>
						<img src={avatar}/>
					</div>
				</div>

			<br />

		</div>

		<hr />
		<ProyectosRecientes />			
		</div>
		</>
	);
};

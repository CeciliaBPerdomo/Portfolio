import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import avatar from "../../img/avatar-sinfondo.png"
import lkn from "../../img/linkedin.png"
import git from "../../img/git.jpg"
import insta from "../../img/instagram.png"
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let text = "< Full Stack Software Developer />"

	return (
		<>
		<div className="principal">
			<div className="container text-center" style={{marginTop: "45px", backgroundColor: "#F4EADC"}}>
				<div className="row">
					<div className="col">
						<p style={{fontFamily: "Libre Baskerville, serif", 
						fontSize: "56px", color: "#A90094", marginTop: "85px"}}>
							Soy Cecilia Perdomo!
						</p>
						<p style={{fontFamily: "Nanum Gothic Coding, monospace", 
						fontSize: "21px"}}> 
						{text}
						</p>
						<br />

						<div className="card-group">
							<div className="card">
								<a href="https://www.linkedin.com/in/cecilia-perdomo/">
									<img src={lkn} className="align-self-center" style={{width: "120px", padding: "5px"}} /> 
								</a>
							</div>
							<div className="card">
								<a href="https://github.com/CeciliaBPerdomo">
									<img src={git} className="align-self-center" style={{width: "120px", padding: "5px"}} />
								</a>
							</div>
							<div className="card">
								<img src={insta} className="align-self-center" style={{width: "120px", padding: "5px"}} />
							</div>
						</div>
					</div>

					<div className="col align-self-end">
						<img src={avatar}/>
					</div>
				</div>

				
			<br />
		</div>
		</div>
		</>
	);
};

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
					</div>

					<div className="col">
						<img src={avatar} />
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div class="card-group" style={{
							width: "380px", 
							height: "120px",
							marginLeft: "80px",
							marginTop: "-120px"
							}}>
							<div class="card">
								{/* <Link to="https://www.linkedin.com/in/cecilia-perdomo/"> */}
									<img src={lkn} class="card-img-top" style={{width: "120px", padding: "5px"}} /> 
								{/* </Link> */}
							</div>
							<div class="card">
								<img src={git} class="card-img-top" style={{width: "120px", padding: "5px"}} />
							</div>
							<div class="card">
								<img src={insta} class="card-img-top" style={{width: "120px", padding: "5px"}} />
							</div>
						</div>
					</div>
				</div>

			<br />
		</div>
		</div>
		</>
	);
};

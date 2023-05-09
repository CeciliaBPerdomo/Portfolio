import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import avatar from "../../img/avatar-sinfondo.png"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container text-center" style={{marginTop: "45px"}}>
				<div className="row">
					<div className="col">
					Column
					</div>
					<div className="col">
					Column
					</div>
					<div className="col">
					<img src={avatar} />
					</div>
				</div>
			</div>
		</>
	);
};

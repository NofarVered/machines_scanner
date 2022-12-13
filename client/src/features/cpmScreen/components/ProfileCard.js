import React from "react";
import "./ProfileCard.css";

import { Link } from 'react-router-dom'

export function ProfileCard(props) {
   
	return (
        <Link to='/scan' >
		<div className="card-container card ">
			<header className="header_card">
				<img className="avatar" src={props.images} />
			</header>			
			<h2 className="normal-text">{}</h2>
			<div className="social-container">
				<div className="followers">
                    <h2 className="smaller-text">last active </h2>
					<h1 className="bold-text">{props.cpm.last_activity_date}</h1>
					
				</div>
				<div className="likes">
                    <h2 className="smaller-text">ip adress</h2>
					<h1 className="bold-text">{props.cpm.ip_addresses}</h1>
					
				</div>
				
			</div>
		</div>
        </Link>
	);
}

export default ProfileCard;

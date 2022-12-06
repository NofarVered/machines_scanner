import React from "react";
import "./ProfileCard.css";
import avatar from "../images/image-rita.png";

export function ProfileCard(props) {
    console.log(props.cpm)
	return (
		<div className="card-container">
			<header className="header_card">
				<img src={avatar} />
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
	);
}

export default ProfileCard;

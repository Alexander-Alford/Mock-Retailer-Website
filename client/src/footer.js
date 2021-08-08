import React from "react";

function Footer(props)
{
	const state = props.flags.websiteState;
	
	const date = new Date();
	
	return (
	
	
	<div className="footer" style={(state === "Sign On") ? {position: "absolute"} : {position: "static"}}>© {date.getFullYear()}</div>
	
	);
}

export default Footer;
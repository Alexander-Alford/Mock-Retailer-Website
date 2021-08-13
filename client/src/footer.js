import React from "react";

function Footer(props)
{
	const state = props.flags.websiteState;
	
	const date = new Date();
	
	return (
	
	
	<div className="footer" style={(state === "Product Showcase") ? {position: "static"} : {position: "absolute"}}>© {date.getFullYear()}, Fordington.com, Inc. or its affiliates</div>
	
	);
}

export default Footer;
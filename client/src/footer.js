import React from "react";

function Footer(props)
{
	const state = props.flags.websiteState;
	
	const date = new Date();
	
	return (
	
	/*style={(state === "Product Showcase") ? {position: "fixed"} : {position: "fixed"}}*/
	
	<div className="footer" >© {date.getFullYear()}, Fordington.com, Inc. or its affiliates</div>
	
	);
}

export default Footer;
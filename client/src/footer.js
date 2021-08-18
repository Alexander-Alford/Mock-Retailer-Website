import React from "react";

function Footer()
{	
	const date = new Date();
	
	return (
	<div className="footer" >© {date.getFullYear()}, Fordington.com, Inc. or its affiliates</div>
	);
}

export default Footer;
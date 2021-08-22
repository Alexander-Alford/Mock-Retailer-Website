import React from "react";
import {ChangePage} from './App.js';

function SignOnPage(props)
{
	const state = props.flags.websiteState;
	var buttonText = ((state === "Register") ? "Register" : "Sign In" );
	
	if(state === "Sign On" || state === "Register")
	{	
	return(
	<div>
	<form className="sign-in-form">
  <div className="form-group">
    <label htmlFor="emailInput"><i className="fas fa-at"></i> Email address</label>
    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email address" />
  </div>
  <div className="form-group">
    <label htmlFor="passInput"><i className="fas fa-key"></i> Password</label>
    <input type="password" className="form-control" id="passInput" placeholder="Password" />
		
  </div>
  <div style={{textAlign: "center"}}>
	<button className="btn btn-success" style={{marginTop: "10px"}} onClick={() => {ChangePage("Product Showcase")}}>{buttonText}</button>
  </div>
</form>
	<div style={{"display": "flex"}}>
	<button className="btn btn-primary" style={{margin: "10px auto"}} onClick={() => {ChangePage("Product Showcase")}}>Back</button>
	</div>
</div>
	);
	}

	return(null);


}



export default SignOnPage;
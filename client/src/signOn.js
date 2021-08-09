import React from "react";

function SignOnPage(props)
{
	const state = props.flags.websiteState;
	
	if(state === "Sign On")
	{	
	return(
	<div>
	<form className="sign-in-form">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div style={{"text-align": "center"}}>
  <button type="submit" className="btn btn-success" style={{"margin-top": "10px"}}>Submit</button>
  </div>
</form>
	<div style={{"text-align": "center"}}>
	<button type="submit" className="btn btn-primary" style={{"margin-top": "10px"}}>Back</button>
	</div>
</div>
	);
	}

	return(null);


}

export default SignOnPage;
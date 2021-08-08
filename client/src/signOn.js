import React from "react";

function SignOnPage(props)
{
	const state = props.flags.websiteState;
	
	if(state === "Sign On")
	{	
	return(
	<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="justify-content-center">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
	);
	}

	return(null);


}

export default SignOnPage;
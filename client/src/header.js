import React from "react";
import {flags, ChangePage} from './App.js';
import CartItemsNumber from './cart.js';
import {Cart} from './cart.js';
import {NavbarCatalogSelector} from './http.js';





function Navbar(props)
{
	if((props.state === "Product Showcase")){
	return(
	<nav className="navbar navbar-expand-lg navbar-dark navigation-bar" style={{width: "100%"}}>
        <div className="container-fluid  navigation-bar">
            
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
						
						 <li className="nav-item">
                        <a className="nav-link active" href="#">All</a>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link active" onClick={() => {NavbarCatalogSelector("mammal")}}>Mammals</button>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Reptiles</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Fish</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Birds</a>
                      </li>
					   <li className="nav-item">
                        <a className="nav-link active" href="#">Insects</a>
                      </li>
					   <li className="nav-item">
                        <a className="nav-link active" href="#">Products</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Order
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">From least expensive</a></li>
                          <li><a className="dropdown-item" href="#">From most expensive</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Display
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">10 Items</a></li>
                          <li><a className="dropdown-item" href="#">20 Items</a></li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" />
                              <label className="" for="danger-outlined">30 Items</label>
                            </a>
                          </li>
                          <li>
                            
                              <input type="radio" className="dropdown-item btn-check " name="options-outlined" id="success" autoComplete="off" checked />
                              <label className="btn btn-outline-success" for="success-outlined">40 Items</label>
                            
                          </li>

                        </ul>
                      </li>
                      

                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="product-search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
			);
		}
		else if(props.state === "Sign On" || props.state === "Register")
		{
			return(
			<div className="container-fluid  sign-register-bar">
			{(props.state === "Sign On") ? "Sign in" : "Register"} 
			</div>
			);	
		}	
		
	return null;	
}

function SignRegister(props)
{
	if(props.state === "Product Showcase")
	{
		return (
			<div className="col-2 btn-group justify-content-end">
                <button type="button" className="btn btn-outline-light btn-lg" onClick={()=>{ChangePage("Register")}}>Register</button>
                <button type="button" className="btn btn-outline-light btn-lg" onClick={()=>{ChangePage("Sign On")}}>Sign In</button>
            </div>);
	}
	
	else if(props.state === "Sign On")
	{
		return(
			<div className="col-3 btn-group justify-content-end">
                <button type="button" className="btn btn-outline-light btn-lg" style={{padding: "0px"}} onClick={()=>{ChangePage("Register")}}>Don't have an account? <br /> Register</button>
            </div>
		);
	}

	return null;
}

function CartDisplay(props)
{
	
	if(props.state === "Product Showcase")
	{
		return(
			<div className="col-1">
				<button type="button" className="btn btn-outline-light btn-lg" onClick={() => {ChangePage("Cart")}}>
					<i className="fas fa-shopping-cart"></i>
					<span id="cart" style={{marginLeft: "10px"}}>{props.numInCart}</span>
				</button>
			</div>);
	}
	
	return null;
}

function Header(props)
{	
	
	
	const state = props.flags.websiteState;
	const numInCart = props.flags.numberOfCartItems;
	
	
	return (
<div className="container-fluid header" id="header">
	<div className="row align-items-center header-piece-first" style={{margin: "0px 0px"}}>
        <div className="col-8" id="branding">
            <h1 className="display-4 header-comp-name">Fordington</h1>
            <h2 className="lead">Your first delivery option.</h2>
        </div>
			<SignRegister state={state} />	
			<CartDisplay state={state} numInCart={numInCart} />
    </div>
	
		
			<Navbar state={state} />    
				
</div>
	);
}





export default Header;
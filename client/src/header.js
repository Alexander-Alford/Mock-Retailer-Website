import React from "react";
import {ChangePage} from './App.js';
import {CatalogSelector, NameSelector} from './http.js';





function Navbar(props)
{
	const CatUp = async (choice) => { props.getData( await CatalogSelector(choice)) };
	const NamUp = async () => {props.getData(await NameSelector(document.getElementById("product-search").value))};
	const toLoad = props.flags.catalogLoadNum;
	const loadCards = function(num){props.flags.catalogLoadNum = num; ChangePage("Product Showcase")};
	
	if((props.state === "Product Showcase")){
	return(
	<nav className="navbar navbar-expand-lg navbar-dark navigation-bar" style={{width: "100%"}}>
        <div className="container-fluid  navigation-bar">
          
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
						
						 <li className="nav-item">
                        <a className="nav-link active" href="#/All" onClick={() => { CatUp("") }}>All</a>
                      </li>
                      <li className="nav-item">
                        <a href="#/Mammals" className="nav-link active" onClick={() => { CatUp("mammal") }}>Mammals</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#/Reptiles" onClick={() => { CatUp("reptile") }}>Reptiles</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#/Fish" onClick={() => { CatUp("fish") }}>Fish</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#/Birds" onClick={() => { CatUp("bird") }}>Birds</a>
                      </li>
					            <li className="nav-item">
                        <a className="nav-link active" href="#/Insects" onClick={() => { CatUp("insect") }}>Insects</a>
                      </li>
					            <li className="nav-item">
                        <a className="nav-link active" href="#/Products" onClick={() => { CatUp("product") }}>Products</a>
                      </li>
                      
                      <li className="nav-item dropdown">
                       
					   <span className="nav-link dropdown-toggle" style={{color: "#FFFFFF"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Display
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li onClick={() => {loadCards(10)}}>
                              <label htmlFor="10-check" className="dropdown">
								<input type="radio" className="btn-check" name="item-num-opt" id="10-check" defaultChecked={(toLoad === 10) ? true : false}/>
								<span className="dropdown-item">10 Items</span>
                              </label>
                          </li>
                          <li onClick={() => {loadCards(15)}}>
                              <label htmlFor="15-check" className="dropdown">
								<input type="radio" className="btn-check" name="item-num-opt" id="15-check" defaultChecked={(toLoad === 15) ? true : false}/>
								<span className="dropdown-item">15 Items</span>
                              </label>
                          </li>
                          <li onClick={() => {loadCards(20)}}>
                              <label htmlFor="20-check" className="dropdown">
								<input type="radio" className="btn-check" name="item-num-opt" id="20-check" defaultChecked={(toLoad === 20) ? true : false}/>
								<span className="dropdown-item">20 Items</span>
                              </label>
                          </li>
                          <li onClick={() => {loadCards(25)}}>
                              <label htmlFor="25-check" className="dropdown">
								<input type="radio" className="btn-check" name="item-num-opt" id="25-check" defaultChecked={(toLoad === 25) ? true : false}/>
								<span className="dropdown-item">25 Items</span>
                              </label>
                          </li>

                        </ul>
                      </li>
                      

                    </ul>
                    <form className="d-flex" action="" onSubmit={(e) => {e.preventDefault()}}>
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="product-search" maxLength="100" />
                      <button className="btn btn-outline-primary search-btn no-shadow" onClick={ () => {NamUp()} }>Search</button>
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
			<div className="col-2">
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
        <div className="col-7" id="branding">
            <h1 className="display-4 header-comp-name">eCommerce Retailer</h1>
            <h2 className="lead">Your first delivery option.</h2>
        </div>
			<SignRegister state={state} />	
			<CartDisplay state={state} numInCart={numInCart} />
    </div>
			<Navbar state={state} getData={props.getData} data={props.data} flags={props.flags}/>    
</div>
	);
}





export default Header;
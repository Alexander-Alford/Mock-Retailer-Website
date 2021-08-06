import React from "react";

function Navbar(props)
{
	if((props.state === "Product Showcase")){
	return(
	<nav className="navbar navbar-expand-lg navbar-dark navigation-bar">
        <div className="container-fluid  navigation-bar">
            
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
						
						 <li className="nav-item">
                        <a className="nav-link active" href="#">All</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Mammals</a>
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
		
	return null;	
}

function SignRegister(props)
{
	if(props.state === "Product Showcase")
	{
		return (
			<div className="col-2 btn-group justify-content-end">
                <button type="button" className="btn btn-outline-light btn-lg">Register</button>
                <button type="button" className="btn btn-outline-light btn-lg">Sign In</button>
            </div>);
	}
	
	return null;
}

function Cart(props)
{
	
	if(props.state === "Product Showcase")
	{
		return(
			<div className="col-1">
				<button type="button" className="btn btn-outline-light btn-lg"><i className="fas fa-shopping-cart"></i> {props.numInCart}</button>
			</div>);
	}
	
	return null;
}

function Header(props)
{	
	
	

	
	
	return (
<div className="container-fluid header" id="header">
	<div className="row align-items-center header-piece-first">
        <div className="col-8">
            <h1 className="display-4 header-comp-name">Fordington</h1>
            <h2 className="lead">Your first delivery option.</h2>
        </div>
			<SignRegister state={props.state} />	
			<Cart state={props.state} numInCart={props.numInCart} />
    </div>
	
		
			<Navbar state={props.state} />    
				
</div>
	);
}





export default Header;
import React from "react";

function Navbar(props)
{
	return(
	<nav class="navbar navbar-expand-lg navbar-dark navigation-bar">
        <div class="container-fluid  navigation-bar">
            
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Mammals</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Reptiles</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Fish</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Birds</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Order
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">From least expensive</a></li>
                          <li><a class="dropdown-item" href="#">From most expensive</a></li>
                          <li><hr class="dropdown-divider" /></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Display
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">10 Items</a></li>
                          <li><a class="dropdown-item" href="#">20 Items</a></li>
                          <li>
                            <a class="dropdown-item" href="#">
                              <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" />
                              <label class="" for="danger-outlined">30 Items</label>
                            </a>
                          </li>
                          <li>
                            
                              <input type="radio" class="dropdown-item btn-check " name="options-outlined" id="success" autocomplete="off" checked />
                              <label class="btn btn-outline-success" for="success-outlined">40 Items</label>
                            
                          </li>

                        </ul>
                      </li>
                      

                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
	
	
	
	);
}

function Header()
{
	return (
<div class="container-fluid header" id="header">
	<div class="row align-items-center header-piece-first">
                <div class="col-8">
                    <h1 class="display-4 header-comp-name">Fordington</h1>
                    <h2 class="lead">Your first delivery option.</h2>
                </div>

                <div class="col-2 btn-group justify-content-end">
                    <button type="button" class="btn btn-outline-light btn-lg">Register</button>
                    <button type="button" class="btn btn-outline-light btn-lg">Sign In</button>
                </div>
                <div class="col-1">
                  <button type="button" class="btn btn-outline-light btn-lg"><i class="fas fa-shopping-cart"></i> 8</button>
                </div>
              </div>
			  
			<Navbar />  
</div>
	);
}





export default Header;
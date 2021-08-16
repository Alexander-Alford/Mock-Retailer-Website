import React from "react";
import {Cart, AddToCart, RemoveFromCart} from './cart.js';
import {ProductPopUp} from './product.js';
import {flags} from './App.js';
import {RenderApp} from './index.js';

//Funciton generates 5-star review icons based on review score.
export function GenerateStars(props){
	//Score ranges from 0-10.
	const score = props.score;

	let stars = [];
	
	let i;
	
	for(i = 0; i < parseInt(score/2); i++)
	{
	stars.push(<i key={i} className="fas fa-star"></i>);
	}
	
	if(score%2 > 0)
	{
	stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
	}
	
	for(i = (parseInt(score/2) + score%2); i < 5; i++)
	{
	stars.push(<i key={i} className="far fa-star"></i>);
	}

	return <div>{stars}</div>;
}

function SetPopUp(id)
{
console.log("Given prod id is " + id);
flags.popUpFlag = true; 
flags.popUpProd = id; 
RenderApp()	
}


function GenerateCard(props)
{
	
	const product = props.product || {};
	const prodID = product["product-id"];

	
	return (<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-sizing">  
        <div className="card card-sizing" style={{border: "0px"}}>
			<div className="text-center card-img-top" style={{height: "250px"}}>
				<img src={product["image-url"]} className="card-img" alt="..." />
            </div>
			<div className="card-body text-center empty-display">
                <h5 className="card-title">{product.name}</h5>
					<span className="card-text" style={{color: "orange"}}>
                        <GenerateStars score={product["review-score"]} />
                    </span>
                    <div className="card-text">${product.price}</div>
                    <div className="" >Qty: {product.quantity}</div>
					<br />
					<div className="btn-group" role="group" style={{display: "flex", "justify-content": "space-around"}}>
						<button className="btn btn-primary" onClick={() => SetPopUp(prodID)}><i class="fas fa-align-justify"></i> See more</button>
						<button className="btn btn-success" onClick={() => AddToCart(product.name,product.price)}><i className="fas fa-tags"></i> Add to Cart</button>
					</div>
            </div>
        </div>
    </div>);
}

function CardTable(props)
{	
	const state = props.flags.websiteState;


	if(state === "Product Showcase")
	{
	const products = props.productCollection;
	const start = props.flags.catalogStartIndex;
	const num = props.flags.catalogLoadNum;

	let ret = [];

	const end = ( (start + num) > products.length) ? products.length : (start + num);

	for(let i = start; i < end; i++)
	{
		ret.push( <GenerateCard key={i} product={products[i]} /> );
	}
	
	return  (<div className="row row-cols-auto card-pack " id="productDisplay">
				{ret}
				<ProductPopUp flags={props.flags} prods={products} />
			</div>);
	}
	
	return null;
}


export default CardTable;
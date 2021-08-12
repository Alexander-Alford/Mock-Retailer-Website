import React from "react";
import {Cart, AddToCart, RemoveFromCart} from './cart.js';



//Funciton generates 5-star review icons based on review score.
function GenerateStars(props){
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
	stars.push(<i key={i} className="fas fa-star-half"></i>);
	}
	

	return <div>{stars}</div>;
}



function GenerateCard(props)
{
	
	const product = props.product || {};
	
	console.log(product);
	
	return (<div className=" col-sizing">  
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
						<button className="btn btn-primary" onClick={() => RemoveFromCart(product.name)}>See more</button>
						<button className="btn btn-success" onClick={() => AddToCart(product.name,product.price)}>Add to Cart</button>
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
	
	return  (<div className=" card-pack " id="productDisplay">
				{ret}
			</div>);
	}
	
	return null;
}


export default CardTable;
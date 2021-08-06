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
	
	//for(let i = (score/2 + score%2); i < 5; i++)
	//{
	//stars.push(<i className="far fa-star"></i>);	
	//}

	return <div>{stars}</div>;
}



function GenerateCard(props)
{
	
	const product = props.product;
	
	console.log(product);
	
	return (<div className="col col-sizing">  
        <div className="card card-sizing">
			<div className="text-center card-img-top" style={{height: "250px"}}>
				<img src={product["image-url"]} className="card-img" alt="..." />
            </div>
			<div className="card-body text-center empty-display">
                <h5 className="card-title">{product.name}</h5>
					<span className="card-text" style={{color: "orange"}}>
                        <GenerateStars score={product["review-score"]} />
                    </span>
                    <div className="card-text">${product.price.toFixed(2)}</div>
                    <div className="" >Qty: {product.quantity}</div>
					<br />
					<div style={{display: "flex", "justify-content": "space-around"}}>
						<button className="btn btn-primary" onClick={() => RemoveFromCart(product["product-id"])}>See more</button>
						<button className="btn btn-success" onClick={() => AddToCart(product["product-id"])}>Add to Cart</button>
					</div>
            </div>
        </div>
    </div>);
}

function CardTable(props)
{	
	const products = props.productCollection;
	const start = props.catalogNumberStart;
	const num = props.numToLoad;

	let ret = [];

	for(let i = start; i < (start + num); i++)
	{
		ret.push( <GenerateCard key={i} product={products[i]} /> );
	}
	
	return  (<div className="row card-pack" id="productDisplay">
				{ret}
			</div>);
	
}


export default CardTable;
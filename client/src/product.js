import React from "react";
import {AddToCart} from './cart.js';
import {GenerateStars} from './card.js';

function UndoPopUp(flags)
{
	flags.popUpFlag = false;
	flags.popUpProd = "";
}

function GetProductByID(prodColl, id)
{
	for(let i = 0; i < prodColl.length; i++)
	{
		if(prodColl[i]["product-id"] === id)
		{
			return prodColl[i];
		}
	}

	return {};
}

export function ProductPopUp(props)
{
	
	const products = props.prods;
	const flags = props.flags;
	
	var prod = GetProductByID(products, flags.popUpProd);
	
	
	if(flags.popUpFlag === true)
	{
		
	return(
	<div className="translucent engulf-page">
		<div id="product-see-more">
			
			<div style={{width: "100%", height: "50%"}} className="centered">
				<img src={prod["image-url"]} className="see-more-img" alt="..."/>
				<div style={{fontSize: "21px", fontWeight: "600"}}>{prod.name}</div>
			</div>	
			
			<div style={{padding: "5% 8%", paddingBottom: "0px", height: "50%"}}>
				<div className="centered relative-text" style={{fontSize: "17px"}}>{prod.description}</div>
				<div style={{paddingLeft: "15%"}}>
					<div>Review Average: <span style={{display: "inline-block", color: "orange"}}><GenerateStars score={prod["review-score"]} /></span></div>
					<div>Price: <span style={{fontWeight: "600"}}>${prod.price.toFixed(2)}</span></div>
					<div>Quantity: <span style={{fontWeight: "600"}}>{prod.quantity}</span></div>
				</div>
				<div style={{display: "flex", justifyContent: "space-around", alignItems: "center", height: "50px"}}>
					<button className="btn btn-primary see-more-button" onClick={() => UndoPopUp(flags)}>Back</button>
					<button className="btn btn-success see-more-button" onClick={() => {AddToCart(prod.name, prod.price); UndoPopUp(flags)}}><i className="fas fa-tags"></i> Add to Cart</button>
				</div>
			</div>
		</div>
	</div>);
	}
	
	return null;
}
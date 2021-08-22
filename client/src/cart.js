import React from "react";
import {flags, ChangePage} from './App.js';
import {OrderPage} from './order.js';

export var Cart = {};

export function EmptyCart()
{
	Cart = {};
	flags.numberOfCartItems = 0;
}

function ChangeInnerHTML(id, replacement)
{
	const elem = document.getElementById(id);
	
	if(elem){
	elem.innerHTML = replacement;
	}
}

export function GetTotalPrice(obj)
{
	let ret = 0;
	
	Object.entries(obj).forEach(([key, [num, val]]) => ret += (num*val));
	
	return ret.toFixed(2);
}

function UpdateCartTotalPrice()
{
	ChangeInnerHTML("total-price", ("$" + GetTotalPrice(Cart)));
}

function CartItemsNumber()
{
	let ret = 0;
	
	Object.entries(Cart).forEach(([key, [num, val]]) => ret += num); 
	
	return ret;
}


export function AddToCart(name, price)
{
	if(!Cart[name])
	{
	Cart[name] = [0, price];
	}
	
	Cart[name].[0]++;
	
	flags.numberOfCartItems = CartItemsNumber();
	
	
	ChangeInnerHTML("cart", flags.numberOfCartItems);
	
}

export function RemoveFromCart(name)
{
	if(!Cart[name])
	{
	console.log("Error! Cannot remove nothing from cart!");	
	}
	else if(Cart[name][0] === 1)
	{
	delete Cart[name];	
	}
	else
	{
	Cart[name][0]--;	
	}

	flags.numberOfCartItems = CartItemsNumber();

	ChangeInnerHTML("cart", flags.numberOfCartItems);
}

function CartListButton(specifier, name, price)
{
	if(specifier === "add")
	{
	AddToCart(name, price);
	}
	else
	{
	RemoveFromCart(name);	
	}

	let valueReplace = 0;

	if(typeof Cart[name] != "undefined")
	{
	valueReplace = Cart[name][0];
	}
	else
	{
		
	}	
	
	
	ChangeInnerHTML(("item-" + name), valueReplace);
}

export function CartPage(props)
{
	const state = props.flags.websiteState;
	
	if(state === "Cart") 
	{
		
		let cartItems = [];
		
		
		Object.entries(Cart).forEach( ([key, [num, price]]) => 
			cartItems.push(
			<li className="list-group-item d-flex justify-content-between align-items-center gx-5" id={key + "-holder"} key={key}>
				<span className="cart-list-piece">{key}</span>
				<span className="cart-list-piece">${price.toFixed(2)}</span>
				<span style={{width: "50px"}}><span className="badge bg-primary rounded-pill" id={"item-" + key}>{num}</span></span>
					<div className="btn-group" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-danger btn-sm cart-page-btn" onClick={ () => { CartListButton("sub", key, price); UpdateCartTotalPrice() } }>-</button>
					<button type="button" className="btn btn-primary btn-sm cart-page-btn" onClick={ () => { CartListButton("add", key, price); UpdateCartTotalPrice() } }>+</button>
					</div>
			</li>) ); 
			
		
	return(
	<div style={{padding: "30px 0px"}}>
	<ul className="list-group cart-list">
		<li className="list-group-item d-flex justify-content-between align-items-center" style={{fontSize: "25px"}}>
		Your Cart
		<span className="badge bg-primary rounded-pill" id="cart">{CartItemsNumber()}</span>
		</li>
		{cartItems}
		<li className="list-group-item d-flex justify-content-between align-items-center" style={{fontSize: "25px"}}>
		Total Price
		<span id="total-price">${GetTotalPrice(Cart)}</span>
		</li>
		<li className="list-group-item d-flex justify-content-between align-items-center" style={{fontSize: "25px"}}>
		<button className="btn btn-primary" onClick={() => {ChangePage("Product Showcase")}}>Back</button>
		<button className="btn btn-success" onClick={() => {ChangePage("Orders")}}><i className="fas fa-money-check"></i> Checkout Items</button>
		</li>
		
	</ul>
	</div>);
	}
	else if(state === "Orders")
	{
		return( <OrderPage flags={flags} objArr={[Cart]} /> );
	}
		
	return null;	
}




export default CartItemsNumber;
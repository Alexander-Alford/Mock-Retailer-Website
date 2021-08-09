import React, {useState, useEffect} from "react";
import {flags} from './App.js';

export var Cart = {
	
};

function CartItemsNumber()
{
	let ret = 0;
	
	Object.entries(Cart).forEach(([key, val]) => ret += val); 
	
	return ret;
}


export function AddToCart(id)
{
	if(!Cart[id])
	{
	Cart[id] = 0;
	}
	
	Cart[id]++;
	
	flags.numberOfCartItems = CartItemsNumber();
	
	const elem = document.getElementById("cart");
	elem.innerHTML = flags.numberOfCartItems;
	
	console.log(flags.numberOfCartItems);
	console.log(Cart);
}

export function RemoveFromCart(id)
{
	if(!Cart[id])
	{
	console.log("Error! Cannot remove nothing from cart!");	
	}
	else if(Cart[id] === 1)
	{
	delete Cart[id];	
	}
	else
	{
	Cart[id]--;	
	}

	flags.numberOfCartItems = CartItemsNumber();

	const elem = document.getElementById("cart");
	elem.innerHTML = flags.numberOfCartItems;
}


function CartPage(props)
{

	return(
	null
	);
	
}




export default CartItemsNumber;
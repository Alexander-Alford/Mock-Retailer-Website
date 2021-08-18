import React from "react";
import {ChangePage} from './App.js';
import {EmptyCart, GetTotalPrice} from './cart.js';


function GetTotalItems(obj)
{
	let ret = 0;
	
	Object.entries(obj).forEach(([key, [num, val]]) => ret += num);
	
	return ret;	
}

function GenerateRows(props)
{
	const object = props.obj;
	
	let rows = [];
	let increm = 0;
	
	Object.entries(object).forEach(([name, [num, val]]) => {
		
		increm++;
		rows.push(
		<tr>
			<th scope="row">{increm}</th>
			<td>{name}</td>
			<td>{num}</td>
			<td>${(val*num).toFixed(2)}</td>
		</tr>
		);
	}); 
	
	return(
	<tbody>
	{rows}
	</tbody>
	);
}

function Order(props)
{
	
return (
	<div style={{background: "#FFFFFF", "border-radius": "15px"}}>	
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Order {/*# {props.orderNum} */}</th>
					<th scope="col">Item</th>
					<th scope="col">Ship Qty</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<GenerateRows obj={props.obj} />
			<thead>
				<tr>
					<th scope="col">Total</th>
					<th scope="col">{Object.keys(props.obj).length} Items</th>
					<th scope="col">{GetTotalItems(props.obj)} Orders</th>
					<th scope="col">${GetTotalPrice(props.obj)}</th>
				</tr>
			</thead>
		</table>
	</div>
	);
}

export function OrderPage(props)
{
	const state = props.flags.websiteState;
	const objects = props.objArr;
	
	let ret = [];
	
	for(let i = 0; i < objects.length; i++)
		{
		ret.push(<Order orderNum={i + 1} obj={objects[i]} />);
		}
	
		if(state === "Orders")
		{return(
			<div className="container-fluid order">
			{/*<button className="btn btn-success" style={{"margin": "0px auto", "display": "block", "margin-bottom": "15px"}} onClick={ () => {EmptyCart(); ChangePage("Product Showcase")} }>Go back to front page</button>*/}
				{ret}
				<button className="btn btn-success" style={{"margin": "0px auto", "display": "block"}} onClick={ () => {EmptyCart(); ChangePage("Product Showcase")} }>Go back to front page</button>
				
			</div>);
		
		}
	
	return null;
}



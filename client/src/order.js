import React from "react";
import {ChangePage} from './App.js';

function GenerateRows(props)
{
	const object = props.obj;
	
	let rows = [];
	let increm = 0;
	
	Object.entries(object).forEach(([key, [num, val]]) => {
		
		increm++;
		rows.push(
		<tr>
			<th scope="row">{increm}</th>
			<td>{key}</td>
			<td>{num}</td>
			<td>${val}</td>
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
      <th scope="col">Order # {props.orderNum}</th>
      <th scope="col">Item</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
		<GenerateRows obj={props.obj} />
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
				<button className="btn btn-success" style={{"margin": "0px auto", "display": "block", "margin-bottom": "15px"}} onClick={ () => {ChangePage("Product Showcase")} }>Go back to front page</button>
				{ret}
				<button className="btn btn-success" style={{"margin": "0px auto", "display": "block"}} onClick={ () => {ChangePage("Product Showcase")} }>Go back to front page</button>
				
			</div>);
		
		}
	
	return null;
}



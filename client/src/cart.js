
export var Cart = {
	
};

export function AddToCart(id)
{
	if(!Cart[id])
	{
	Cart[id] = 0;
	}
	
	Cart[id]++;
	
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
}

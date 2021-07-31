import React from "react";

//Funciton generates 5-star review icons based on review score.
function GenerateStars(props){
	//Score ranges from 0-10.
	const score = props.score;

	const stars = [];
	
	for(let i = 0; i < score/2; i++)
	{
	stars.append(<i className="fas fa-star"></i>);
	}
	
	if(score%2 == 1)
	{
	stars.append(<i className="fas fa-star-half"></i>);
	}
	
	for(let i = (score/2 + score%2); i < 5; i++)
	{
	stars.append(<i className="far fa-star"></i>);	
	}

	return stars;
}

function GenerateCard(props)
{
	
	const product = props.product;
	
	return (<div className="col">  
        <div className="card card-sizing">
            <img src={product["image-url"]} className="card-img-top image-size-force" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
					<p className="card-text" style={{color: "orange"}}>
                        <GenerateStars score={product.score} />
                    </p>
                    <p className="card-text">{product.price}</p>
                    <a className="" href="#">Qty {product.quantity}</a>
					<br>
                <a href="#" className="btn btn-primary">See more</a>
            </div>
        </div>
    </div>) ;
	
}

export default GenerateCard;
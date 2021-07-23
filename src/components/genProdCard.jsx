import React from "react";

function generateProductCard(prod){
    return (
        <div className = "col">  
            <div className ="card card-sizing">
                <img src={prod['image-url']} class="card-img-top image-size-force" alt="..." />
                    <div className = "card-body">
                      <h5 className = "card-title">{prod.name}</h5>
                      <p className = "card-text" style="color: orange">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </p>
                      <p className = "card-text">{prod.price}</p>
                      <p className = "card-text">{prod.quantity}</p>
                      <a href="#" className="btn btn-primary">See more</a>
                  </div>
            </div>
        </div> 
    );
}

export generateProductCard;
//jshint esversion:6
console.log("This is a test.")

//Required mondules.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));




//Beginning of database setup.
var mongoDB = "mongodb+srv://guest:temp@prototypecluster.rbkx4.mongodb.net/products";
const productCollection = 'collection';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
var collectionData;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => {
    console.log("MongoDB database disconnected successfully.")
});
db.once("open", () => {
    console.log("MongoDB database connection established.");

})

 const productSchema = new mongoose.Schema({
name: String,
category: String,
productid: Number,
quantity: Number,
price: Number,
'review-score': Number,
description: String,
'image-url': String
 });

const productModel = mongoose.model('Product', productSchema, productCollection)

function FindProductsInCategory(categ = "")
{
	let testr = { category: categ};
	
	if(!categ)
	{
		testr = null;
	}	
	
	productModel.find(testr ,(err, products) => {
		if (err) 
		{
		return console.error(err);
		}
			
		collectionData = products;
		})
	
}

FindProductsInCategory("");
//End of database setup.


//Beginning of server setup.
let port = process.env.PORT || 3001;


app.get("/api", (req, res) => {
      res.json(collectionData); 
});

app.put("/", (req, res) => {
	var category = req.body.categ;
	FindProductsInCategory(category);
	res.json(collectionData);
	console.log(category + " requested from server.");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
//Emd of server setup.






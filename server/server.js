//jshint esversion:6
console.log("This is a test.")

//Required mondules.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
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


async function QueryData(query){
	
let prodProm = await productModel.find(query, (err, products) => {
		if (err) 
		{
		return console.error(err);
		}

		return products;
		});

	/*console.log(prodProm);*/
		return prodProm;
}




function FindProductsInCategory(cat)
{
	let query = (cat.category) ? cat : null;
	
	console.log("Query: " + JSON.stringify(query));
	
	return QueryData(query);
}

function FindProductsWithName(entry)
{
	let query = (entry.name) ? {name: {$regex: entry.name , $options: "i"}} : null;

	console.log("Query: " + entry.name);

	return QueryData(query);
}

function TakeJSONInput(input)
{
	
	if(input.hasOwnProperty('category'))
	{
		return FindProductsInCategory(input);
	}
	else if(input.hasOwnProperty('name'))
	{
		return FindProductsWithName(input);
	}
}

FindProductsInCategory("");
//End of database setup.


//Beginning of server setup.
let port = process.env.PORT || 3001;


app.get("/api", (req, res) => {
      res.json(collectionData); 
});

app.put("/api", async (req, res, next) => {
	var input = req.body;
	TakeJSONInput(input)
	.then((data) => {
		res.json(data)}, reason =>{
		res.send("Error! Could not retrieve data.")	
		})
	/*.then((data) => res.send(data))*/
	.catch(next);
	console.log(input + " requested from server.");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
//Emd of server setup.






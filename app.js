console.log("This is a test.")

const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-aa:test123@prototypecluster.rbkx4.mongodb.net/products", {useNewUrlParser: true});

let port = process.env.PORT;

if(port == null || port == ""){
    port = 3000;
}

app.listen(port, () => {
    console.log("Server has started successfully.")
});
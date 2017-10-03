var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

console.log(process.env.USER_ID);
var app = express();
app.set("port", process.env.PORT || 7000);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(app.get("port"), function(){
    console.log("app is listening to: " +  app.get("port"));
});
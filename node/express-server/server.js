const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>I like good food</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>bruno.vidigal.coriolano</h1>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

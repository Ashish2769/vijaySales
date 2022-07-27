var express = require('express');
var app = express();

app.get("/",(req, res)=> {
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile</li>"
        +"<li>Holographic Devices</li>"
        +"<li>Smart Watches</li>"
        +"<li>Gaming consoles</li>"
        +"</ol>"
    );
});


app.get("/aboutus",(req, res)=> {
    res.send(
        "<h1>My company</h1>"
        +"<hr/>"
        +"<h3>Sport Bikes</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Chief Mentor: Aditya Shinde </li>"
        +"<li>Director: Ashish Kamble</li>"
        +"<li>Location: Pune</li>"
        +"</ol>"
    );
});

var server = app.listen(9000);
console.log("Vijay Sales Online Shopping running on port 9000");



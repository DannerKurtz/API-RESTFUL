const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB Connection 
const conn = require("./db/conn.js");

conn();

// Routes
const routes = require("./routes/router.js")

app.use("/api", routes);

// Porta a ser escutada

app.listen(3000, function(){
    console.log("servidor online!");
});



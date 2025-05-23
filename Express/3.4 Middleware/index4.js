import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url)) 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bandNameGenerator);
var bandName = ""

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/",(req,res) =>{
  res.sendFile(__dirname + "/public/index.html")
})
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] +" " + req.body["pet"];
  next();
}



app.post("/submit",(req,res) =>{
  
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`)
})
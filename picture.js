const path = require('path');
const express = require('express');
const app = express();
var fs = require("fs");
const fileName = "./resources/photo.jpg";
var bodyParser = require("body-parser");
const download = require('image-downloader')
const request = require('request')
const HTTP_PORT = 3000;

app.get("/photo.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "./download/hello.jpg"));
  });

  app.get("/download",(req,res)=>
  {
    var filePath =  __dirname +"/download/"; // Or format the path using the `id` rest param
    var fileName = "hello.jpg"; // The default name the browser will use
    res.download(filePath + fileName , fileName,(err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });}});  
  });
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname, './picture.html')));
app.listen(HTTP_PORT, ()=> console.log(`HTTP server listening at ${HTTP_PORT}`));
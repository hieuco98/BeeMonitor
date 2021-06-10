const ipfsClient = require('ipfs-http-client');
const path1 = require('path');
const ipfs = ipfsClient('http://localhost:5001');
const express = require('express');
var formidable = require('formidable');
var fs = require('fs');
const app = express();
const { globSource } = ipfsClient;
const { urlSource } = ipfsClient;
const addFile = async() =>
{
  
    const fileAdded = await ipfs.add(globSource('./download/hello.jpg', { recursive: true }));
    console.log(fileAdded.cid);
    //return fileAdded.hash;
    //console.log(fileAdded);
}
addFile();
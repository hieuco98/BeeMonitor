const ipfsClient = require('ipfs-http-client');
const path1 = require('path');
const ipfs = ipfsClient('https://ipfs.infura.io:5001');
const express = require('express');
var formidable = require('formidable');
var fs = require('fs');
const app = express();
const address = '0x17dB1E91E589944663F7D96B4AA8270297C67858';
const privateKey = '0x69966ee82a73caae04e84e3bb9e708480894e36126f2855bbed14e679e4e6988';
const infuraUrl = 'https://rinkeby.infura.io/v3/ebc1d1a11f844388978cf96fb5f8173b'; 
const { globSource } = ipfsClient;
const { urlSource } = ipfsClient;
// const addFile = async() =>
// {
  
//     const fileAdded = await ipfs.add(urlSource('https://ipfs.io/images/ipfs-logo.svg'));
//     console.log(fileAdded.cid);
//     return fileAdded.cid;
//     //console.log(fileAdded);
// }
//addFile();
app.use(express.json());
// app.get('/',function(req,res)
// {
//     res.send('TEST IPFS SYSTEM');
// })
app.listen(3000,function()
{
    console.log("HTTP Server is running on port 3000")
})
app.post('/upload',function(req,res)
{
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        console.log(files.filetoupload);
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/macbook/Desktop/ESP32cam/download/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        //if (err) throw err;
        // res.send('File uploaded and moved!');
        // res.end(); 
})
const fileAdded = await ipfs.add(globSource(`./download/${files.filetoupload.name}`,{recursive: true }));
const fileHash = fileAdded.cid;
res.send("Link lấy dữ liệu từ IPFS : " + `https://ipfs.infura.io/ipfs/${ fileHash }`);
    })
});
app.get('/',(req,res)=>res.sendFile(path1.resolve(__dirname, './upload.html')));

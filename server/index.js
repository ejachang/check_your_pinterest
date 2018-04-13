const express = require('express');
const request = require('request');
var querystring = require('querystring');

const app = express();

let redirectUri = process.env.REDIRECT_URI || 'http://localhost:3000/callback';




const portNum = process.env.PORT || 3000;
app.listen(portNum, function() {
  console.log('listening on port 3000!');
});


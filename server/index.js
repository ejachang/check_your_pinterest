const express = require('express');
const request = require('request');
const querystring = require('querystring');

//Make sure you do this only for your local environment. Do not use this in production.

const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();

const redirect_uri = process.env.REDIRECT_URI || 'https://localhost:8888/login';

var certOptions = {
  key: fs.readFileSync(path.resolve('build/cert/server.key')),
  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
};

/*
response_type	Must take the value code.
client_id	Your app ID. You can get this ID from your app page.
state	A value you define. This can be used to make sure that the redirect back to your site or app wasn’t spoofed.
scope	A comma-separated list of permission scopes you want to ask your user for (e.g., read_public).
redirect_uri*/

app.get('/login', (req, res)=> {
  res.redirect('https://api.pinterest.com/oauth/?' + 
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.APP_ID,
      state: 'user-read-private user-read-pins',
      scope: 'read_public, write_public, read_relationships, write_relationships',
      redirect_uri
    })
  );
}); 

/*
  grant_type=authorization_code&
  client_id=12345&
  client_secret=6789abcd&
  code=xyz1010
*/

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://api.pinterest.com/v1/oauth/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.APP_ID + ':' + process.env.APP_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000';
    res.redirect(uri + '?access_token=' + access_token)
  })
})


const portNum = process.env.PORT || 8888;

https.createServer(certOptions, app).listen(portNum, function() {
  console.log(`listening on port ${portNum}!`);
});

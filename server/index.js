const express = require('express');
const request = require('request');
const querystring = require('querystring');
const fetch = require('node-fetch');
//Make sure you do this only for your local environment. Do not use this in production.

const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
// eslint-disable-next-line
const redirect_uri = 
  process.env.REDIRECT_URI || 
  'https://localhost:8888/callback';

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
      // eslint-disable-next-line
      response_type: 'code',
      // eslint-disable-next-line
      client_id: process.env.APP_ID,
      state: 'user-read-private user-read-pins',
      scope: 'read_public',
      // eslint-disable-next-line
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
  let code = req.query.code || null;
  let authOptions = {
    url: 'https://api.pinterest.com/v1/oauth/token?',
    form: {
      code: code,
      // eslint-disable-next-line
      grant_type: 'authorization_code',
      // eslint-disable-next-line
      client_id: process.env.APP_ID,
      // eslint-disable-next-line
      client_secret: process.env.APP_SECRET
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.APP_ID + ':' + process.env.APP_SECRET
      ).toString('base64'))
    },
    json: true
  };
  /*
request
  .get('http://mysite.com/doodle.png')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('doodle.png'))
*/
  request.post(authOptions, function(error, response, body) {
    // eslint-disable-next-line
    let access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000';  
    
    let options = {
      method: 'GET',
      headers: { headers: { 'Authorization': 'Bearer' + access_token}},
      body: null,
      redirect: process.env.FRONTEND_URI || 'http://localhost:3000'
    };
    /*
{
    // These properties are part of the Fetch Standard
    method: 'GET',
    headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
    body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
    redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
 
    // The following properties are node-fetch extensions
    follow: 20,         // maximum redirect count. 0 to not follow redirect
    timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
    compress: true,     // support gzip/deflate content encoding. false to disable
    size: 0,            // maximum response body size in bytes. 0 to disable
    agent: null         // http(s).Agent instance, allows custom proxy, certificate etc.
}
*/     
    // fetch('https://api.pinterest.com/v1/me/boards/?access_token=' + access_token + '&fields=image, url, name', 
    //   options)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   // .then(data => this.props.dispatch(boardsData(data)))
    //   .catch(error => console.log(error) );

    
    // eslint-disable-next-line
    res.redirect(uri + '?access_token=' + access_token)
  });
});




const portNum = process.env.PORT || 8888;

https.createServer(certOptions, app).listen(portNum, function() {
  console.log(`listening on port ${portNum}!`);
});

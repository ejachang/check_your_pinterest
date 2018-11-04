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
});

app.get('/boards/:board', function(req, res) {
  //get specific board info
  let board = req.params.board;
  let uri = 'http://localhost:3000';
  //fetch boards info
  // eslint-disable-next-line
  let app_token;
  // eslint-disable-next-line
  let access_token = process.env.APP_TOKEN || app_token
  let options = {
    method: 'GET',
    // eslint-disable-next-line
    headers: { headers: { 'Authorization': 'Bearer' + access_token}},
    body: null,
    redirect: process.env.FRONTEND_URI || ('http://localhost:3000/boards/' + board)
  };
  // eslint-disable-next-line
  fetch('https://api.pinterest.com/v1/boards/' + board + '/pins/?access_token=' + access_token + '&fields=id%2Clink%2Cnote%2Curl%2Cimage')
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(data => this.props.dispatch(boardsData(data)))
    .catch(error => console.log(error) );  
    
  // eslint-disable-next-line
    res.redirect(uri + '/boards/' + board);

}); 

const portNum = process.env.PORT || 8888;

https.createServer(certOptions, app).listen(portNum, function() {
  console.log(`listening on port ${portNum}!`);
});

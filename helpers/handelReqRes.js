/*
* Title: Handel request response
* Description: Handel request response
* Author: Hannan Bhuiyan
* Date: 27/2/2023
* 
*/ 


// Dependences
const url = require('url');
const {StringDecoder} = require('string_decoder');

// handel object - module scaffolding
const handler = {};


handler.handelReqRes = (req, res) => {
     
     // request handling
     const parseUrl = url.parse(req.url, true);
     const path = parseUrl.pathname;
     const trimedPath = path.replace(/^\/+|\/+$/g, '');
     const headersObject = req.headers;
     const method = req.method.toLowerCase();
     const queryString = parseUrl.query;

     // body decode
     const decoder = new StringDecoder('utf-8');
     let finalData = '';

     req.on('data', (buffer) => {
          finalData += decoder.write(buffer);
     });

     req.on('end', () => {

          finalData += decoder.end();

          console.log(finalData);

          // response handling
          res.end();
     }) 
     
}

module.exports = handler
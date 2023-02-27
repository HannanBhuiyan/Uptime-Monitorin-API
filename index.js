/*
* Title: Uptime monitoring application 
* Description: A Restful api to monitor up or down time by user define links
* Author: Hannan Bhuiyan
* Date: 27/2/2023
* 
*/ 

// Dependences
const http = require("http");
const chalk = require('chalk');
const {handelReqRes} = require('./helpers/handelReqRes');


// App object -  Module Scaffolding
const app = {};

// Configuration
app.config = {
     port: 8080
};

// Create server
app.createServer = () => {
     const server = http.createServer(app.handelRequest)
     server.listen(app.config.port, () => {
          console.log(chalk.blue.bgMagenta(`Server run at ${app.config.port}`))
     });
}

// Handel request response 
app.handelRequest = handelReqRes;

// Start the server
app.createServer();
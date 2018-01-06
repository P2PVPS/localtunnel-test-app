/*
* Copyright 2018 Chris Troutner & P2PVPS.org
* MIT License. See LICENSE.md for details.
*/

//This file registers with the server
"use strict";

// Library Dependencies.
const express = require("express");

// Global Variables
const app = express();
const port = 3500;

// Create an Express server. Future development will allow serving of webpages and creation of Client API.
const ExpressServer = require("./lib/express-server.js");
const expressServer = new ExpressServer(app, port);
expressServer.start();

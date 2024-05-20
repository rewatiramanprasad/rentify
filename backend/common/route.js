const express = require('express')
const {login, signup} = require('./controller.js')
const commonRoute = express.Router()


commonRoute.post('/login', login);
commonRoute.post('/signup', signup);

module.exports={commonRoute}
const express = require('express')
const {login, signup,feed, poster,fetchposter} = require('./controller.js')
const commonRoute = express.Router()


commonRoute.post('/login', login);
commonRoute.post('/signup', signup);
commonRoute.get('/feed',feed)
commonRoute.post('/post',poster);
commonRoute.post('/fetchposter',fetchposter);

module.exports={commonRoute}
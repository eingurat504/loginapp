var express = require('express');
var router = express.Router();

//Get Register page
router.get('/register', function(req, res){
    res.render('register');
});

//Get Login page
router.get('/login', function(req, res){
    res.render('login');
});


module.exports = router;
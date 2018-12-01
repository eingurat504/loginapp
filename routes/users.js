var express = require('express');
var router = express.Router();
var User = require('../models/user');

//Get Register page
router.get('/register', function(req, res){
    res.render('register');
});

//Get Login page
router.get('/login', function(req, res){
    res.render('login');
});

//post data sent through the Registration form
router.post('/register', function(req, res){
    
        var name = req.body.name;
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var confirm_password = req.body.confirm_password;

        //validation implementation
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('confirm_password', 'Password does not match').equals(req.body.password);

        var errors = req.validationErrors();

        if(errors){
            res.render('register',{
                errors:errors
            });
        }else{
            console.log(req.body.name);
     
            // var newUser = new User({
            //     name: name,
            //     email: email,
            //     username: username,
            //     password: password,

            // });

            // console.log(newUser);

        //    models.User.create('testing');

            req.flash('success_msg','You are registered and can now login');
            res.redirect('/users/login');
        }

});

module.exports = router;
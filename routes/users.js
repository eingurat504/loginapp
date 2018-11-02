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

//Get Register page
router.post('/register', function(req, res){
    
        var name = req.body.name;
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var confirm_password = req.body.confirm_password;
console.log(name);
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
            console.log('PASSED');
        }

});


module.exports = router;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;
    
passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: ''
    },
    function(token, tokenSecret, profile, done) {
        return cb(null,profile)
    }
));



// Routes
app.get('/,
    function(req,res){
        res.send({user: req.user});
    });
    
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('auth/twitter/callback',
    passport.authenticate('twitter', 
        {successRedirect: '/',
        failureRedirect: '/login'})
);

app.get('/info', (req, res) => {
    res.send({user: req.user});
});

// app.get('/login/twitter',
//     passport.authenticate('twitter'));

app.listen(port, () => console.log(`Listening on port ${port}`));
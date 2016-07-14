var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// static route
app.use(express.static(__dirname + '/public'));

// set the view engine
app.set('view engine', 'ejs');

// configure the instagram app with client id
ig.use({
    client_id: '',
    client_secret: ''
});

// set the routes
app.get('/', function(req, res) {
    // use the instagram package to get popular media
    ig.media_search(48.4335645654, 2.345645645, function(err, medias, remaining, limit) {
        // render the home page and pass in the popular images        
        res.render('pages/index', {
            grams: medias
        });
    });
});

// start web server
app.listen(3000, function() {
    console.log('Sample app listening on port 3000!');
    console.log('http://localhost:3000/');
});

var express = require('express');
var app = express();
var Flickr = require('flickr-sdk');


// static route
app.use(express.static(__dirname + '/public'));

// set the view engine
app.set('view engine', 'ejs');

// configure the flickr app with client id
var flickr = new Flickr({
  'apiKey': '74e11d52ebe78ab2be78d45a338faf2c',
  'apiSecret': '3b47ed17473221de'
});

// set the routes
app.get('/', function(req, res) {
    // use the flickr package to get popular media
    flickr
    .request()
    .media()
    .search('popular')
    .get({
      media: 'photos',
      page: 1,
      per_page: 20
    })
    .then(function (response) {
      res.render('pages/index', {
        photos: response.body.photos.photo
      });
    });
});

// start web server
app.listen(3000, function() {
    console.log('Sample app listening on port 3000!');
    console.log('http://localhost:3000/');
});

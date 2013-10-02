/*jslint node: true */
'use strict';

var Controller  = require('../controllers')
  , namespace   = require('express-namespace')
  ; 

exports.awesomeThings = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        {'controllers':Controller}
    ]);
};


// Boot routes
exports.boot = function(app) {

  // Homepage
  app.all('/', function(req, res){console.log('hey'); res.json(Controller);});


  // API
  app.namespace('/api', function() {

    app.post('/login', Controller.User.login);
    app.get('/logout', Controller.User.logout);
    app.post('/register', Controller.User.register);
    app.get('/settings', Controller.User.settings);
    app.put('/settings', Controller.User.update);

    app.post('/vote', Controller.Team.vote);

    app.namespace('/team/:slug', function() {

      app.get('/details', Controller.Team.details);
      app.put('/details', Controller.Team.update);

      app.namespace('/blog', function() {

        app.get('/:page', Controller.Blog.page);
        app.post('/', Controller.Blog.createPost);
        app.put('/:post', Controller.Blog.editPost);

      });

    });



  });


};
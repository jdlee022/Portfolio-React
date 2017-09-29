var db = require("../models");

module.exports = function (app) {
    // GET all posts from the database
    app.get("/api/post/all", function (req, res) {
        db.Post.findAll({}).then(function (data) {
            res.json(data);
        })
    });

    // GET a post by its title
    app.get("/api/post/:title", function (req, res) {
        db.Post.findOne({ where: { title: req.params.title } }).then(function (data) {
            res.json(data)
        });
    });

    // GET all featured posts
    app.get("/api/post/featured", function (req, res) {
        db.Post.findAll({ where: { featured: true } }).then(function (data) {
            res.json(data)
        });
    });

    //TODO: store both a markdown and html version in db. Use html for fast rendering, md for editing purposes.
    // POST a new post object to the database
    app.post("/api/post", function (req, res) {
        db.Post.create({
            title: req.body.title,
            text: req.body.text,
            date: req.body.date,
            featured: req.body.featured,
            tags: req.body.tags
        }).then(function (data) {
            res.json(data);
        });
    });
};




// var express = require('express');
// var router = new express.Router();

// // var BlogPost = require('../models/blog-post');

// router.get('/api/blog-posts', function (req, res) {
//   BlogPost.find().then(function (docs) {
//     res.json(docs);
//   });
// });

// router.post('/api/blog-posts', function (req, res) {
//   var newBlogPost = new BlogPost(req.body);

//   newBlogPost.save(function (error, doc) {
//     if (error) {
//       console.log(error);
//       res.json({ error: error });
//     }
//     else {
//       res.json({ result: doc });
//     }
//   })
// })

// module.exports = router;
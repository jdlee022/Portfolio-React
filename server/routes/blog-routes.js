var express = require('express');
var router = new express.Router();

var BlogPost = require('../models/blog-post');

router.get('/api/blog-posts', function (req, res) {
  BlogPost.find().then(function (docs) {
    res.json(docs);
  });
});

router.post('/api/blog-posts', function (req, res) {
  var newBlogPost = new BlogPost(req.body);

  newBlogPost.save(function (error, doc) {
    if (error) {
      console.log(error);
      res.json({ error: error });
    }
    else {
      res.json({ result: doc });
    }
  })
})

module.exports = router;
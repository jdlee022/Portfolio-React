var db = require("../models");

module.exports = function (app) {
    // GET all posts from the database
    app.get("/api/post/all", function (req, res) {
        db.Post.findAll({}).then(function (data) {
            res.json(data);
        })
    });

    // GET a post by its id
    app.get("/api/post/:id", function (req, res) {
        db.Post.findOne({ where: { id: req.params.id } }).then(function (data) {
            res.json(data)
        });
    });

    // GET all featured posts
    app.get("/api/post/featured", function (req, res) {
        db.Post.findAll({ where: { featured: true } }).then(function (data) {
            res.json(data)
        });
    });

    // POST a new post object to the database
    app.post("/api/post", function (req, res) {
        db.Post.create({
            title: req.body.title,
            textMD: req.body.textMD,
            excerpt: req.body.excerpt,
            date: req.body.date,
            featured: req.body.featured,
            tags: req.body.tags
        }).then(function (data) {
            res.json(data);
        });
    });

    // DELETE a post by it's id
    app.delete('/api/post/:id', function (req, res) {
        db.Post.destroy({ where: { id: req.params.id } });
    });

    // UPDATE a post by it's id
    app.patch('/api/post/:id', function (req, res) {
        db.Post.find({ where: { title: 'aProject' } })
            .on('success', function (post) {
                // Check if record exists in db
                if (post) {
                    post.updateAttributes({
                        title: req.body.title,
                        textMD: req.body.textMD,
                        excerpt: req.body.excerpt,
                        date: req.body.date,
                        featured: req.body.featured,
                        tags: req.body.tags
                    })
                        .success(function () { })
                }
            })
    });
};
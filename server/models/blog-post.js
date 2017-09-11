var mongoose = require('mongoose');

var BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Missing title'],
    minlength: 1,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Missing text'],
    minlength: 1,
    unique: true
  },
  date: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  tags: {
    type: [String]
  }
});

var BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
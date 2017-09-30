import axios from 'axios';

var blogAPI = {

    getAllPosts: function(){
        return axios('/api/post/all');
    },

    getPostByTitle: function(title){
        return axios('/api/post/' + title);
    },

    getFeaturedPosts: function(){
        return axios('/api/post/featured');
    },

    newPost: function(post){
        return axios('api/post', post);
    }

}

module.exports = blogAPI;
import axios from 'axios';

var blogAPI = {

    getAllPosts: function(){
        return axios.get('/api/post/all');
    },

    getPostByTitle: function(title){
        return axios.get('/api/post/' + title);
    },

    getPostById: function(id){
        return axios.get('/api/post/' + id);
    },

    getFeaturedPosts: function(){
        return axios.get('/api/post/featured');
    },

    newPost: function(post){
        return axios.post('/api/post', post);
    }

}

export default blogAPI;
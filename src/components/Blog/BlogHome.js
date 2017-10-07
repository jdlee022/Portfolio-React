import React from 'react';
import API from '../utilities/routes/blogAPI';
import PostPreview from './PostPreview';
import $ from 'jquery';

export default class BlogHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        API.getAllPosts().then((response) => {
            if (typeof response.data === 'string' || response.data instanceof String){
                this.setState({ posts: $.parseHTML(response.data) });
            }
            // it's a string
            else if(response.data instanceof Array){
                this.setState({ posts: response.data });
            }
            else{
                this.setState({ posts:  [
                    {
                        title: "test",
                        date: "test",
                        tags: "test",
                        excerpt: "test",
                        textMD: "test"
                    }
                ]});
            }
            // it's something else
            
            console.log("response from GET", response);
            console.log("state:", this.state);
        });
    }

    render() {
        var postPreviewItems = this.state.posts.map((post, i) =>
            <PostPreview data={post} key={i} />
        );

        return <div>{postPreviewItems}</div>;
    }
};
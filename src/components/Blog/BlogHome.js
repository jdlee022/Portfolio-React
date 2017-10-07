import React from 'react';
import API from '../utilities/routes/blogAPI';
import PostPreview from './PostPreview';

export default class BlogHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        API.getAllPosts().then((response) => {
            this.setState({ posts: response.data });
            console.log("response from GET", response);
            console.log("state:", this.state);
        });
    }

    render() {
        var postPreviewItems;
        if (this.state.posts instanceof Array) {
            postPreviewItems = this.state.posts.map((post, i) =>
                <PostPreview data={post} key={i} />
            );
        }
        else {
            postPreviewItems = this.state;
        }

        return <div>{postPreviewItems}</div>;
    }
};
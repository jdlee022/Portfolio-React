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
        });
    }

    render() {
        var postPreviewItems = this.state.posts.map((post, i) =>
                <PostPreview data={post} key={i} />
            );


        return <div>{postPreviewItems}</div>;
    }
};
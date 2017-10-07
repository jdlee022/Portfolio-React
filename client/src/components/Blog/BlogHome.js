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
        //Always sort posts by date createdAt before rendering
        var sortedPosts = this.state.posts.sort(function(a, b){
            var keyA = new Date(a.createdAt),
                keyB = new Date(b.createdAt);
            // Compare the 2 dates
            if(keyA > keyB) return -1;
            if(keyA < keyB) return 1;
            return 0;
        });

        var postPreviewItems = sortedPosts.map((post, i) =>
                <PostPreview data={post} key={i} />
            );

        return <div>{postPreviewItems}</div>;
    }
};
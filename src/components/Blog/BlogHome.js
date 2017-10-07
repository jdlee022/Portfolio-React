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
            if (response.data instanceof Array) {
                this.setState({ posts: response.data });
            }
            else {
                this.setState({
                    posts: [
                        {
                            title: response.data.toString(),
                            date: "test",
                            tags: "test",
                            excerpt: "test",
                            textMD: "test"
                        }
                    ]
                });
            }
            // it's something else

            console.log("response from GET", response);
            console.log("state:", this.state);
        });
    }

    render() {
        if (!(this.state.posts instanceof Array)) {
            API.getAllPosts().then((response) => {
                this.setState({ posts: response.data });
            });
        }
        var postPreviewItems = this.state.posts.map((post, i) =>
            <PostPreview data={post} key={i} />
        );

        return <div>{postPreviewItems}</div>;
    }
};
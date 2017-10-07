import React from 'react';
import { Link } from 'react-router-dom';


export default class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }

    render() {
        var postQuery = "/blog/post/" + this.state.id;

        return (
            <div className="post-preview-item row">
                <div className="col-md-3 left-side">
                    <p className="post-preview-date">{this.state.date}</p>
                    <p className="post-preview-tags">Tags: {this.state.tags}</p>
                </div>
                <div className="col-md-9 right-side">
                    <Link to={postQuery} className="post-preview-title">{this.state.title}</Link>
                    <p className="post-preview-excerpt">{this.state.excerpt}</p>
                </div>
            </div>
        );
    }
}
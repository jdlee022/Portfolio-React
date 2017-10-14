import React from 'react';
import Markdown from 'markdown-to-jsx';
// import Markdown from 'react-markdown-syntax-highlight';
import API from '../utilities/routes/blogAPI';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            tags: '',
            textMD: ''
        }
    }

    componentDidMount() {
        API.getPostById(this.props.id).then((response) => {
            this.setState({
                title: response.data.title,
                date: response.data.date,
                tags: response.data.tags,
                textMD: response.data.textMD
            });
        });
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="post-page-container">
                <Markdown>{this.state.textMD}</Markdown>
                <div className="post-footer">
                    <hr />
                    <p>Written by Jon Lee &bull; {this.state.date} &bull; {this.state.tags}</p>
                </div>
            </div>
        );
    }
}
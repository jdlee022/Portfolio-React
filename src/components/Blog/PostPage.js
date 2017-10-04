import React from 'react';
import Markdown from 'markdown-to-jsx';
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

    componentDidMount(){
        API.getPostById(this.props.id).then((response) => {
            this.setState({
                title: response.data.title,
                date: response.data.date,
                tags: response.data.tags,
                textMD: response.data.textMD
            });
        })
    }

    render() {
        return (
            <Markdown>{this.state.textMD}</Markdown>
        );
    }
}
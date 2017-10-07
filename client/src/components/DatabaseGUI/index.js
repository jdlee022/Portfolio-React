import React from 'react';
import API from '../utilities/routes/blogAPI';

import './style.css';

export default class DatabaseGUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            excerpt: '',
            textMD: '',
            date: '',
            tags: '',
            featured: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        API.newPost(this.state).then((response => {
            console.log(response);
        }));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid dbGUI-container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br /><br />
                                date: <input type="text" name="date" value={this.state.date} onChange={this.handleChange} /><br /><br />
                                tags: <input type="text" name="tags" value={this.state.tags} onChange={this.handleChange} /><br /><br />
                                excerpt: <textarea rows="5" cols="120" type="text" name="excerpt" value={this.state.excerpt} onChange={this.handleChange} /><br /><br />
                                textMD: <textarea rows="20" cols="120" type="text" name="textMD" value={this.state.textMD} onChange={this.handleChange} /><br /><br />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article'

class BlogDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentWillMount() {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderBlogDetail() {
        if(this.state.data !== null) {
            return <div>
                {this.state.data.items.map((item, i) => {
                    if(this.props.params.slug === item.fields.slug) {
                        return <div key={i}>{item.fields.body}</div>
                    }
                })}
            </div>
        }

    }
    render() {
        return (
            <div>
                BlogDetail
                {this.renderBlogDetail()}
            </div>
        );
    }
}

export default BlogDetail;
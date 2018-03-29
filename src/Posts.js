import React, { Component } from 'react';
import { Link } from 'react-router-3';
import axios from 'axios';


const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article'

class Posts extends Component {
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
    renderPosts() {
        if(this.state.data !== null) {
            return <ul>
                {this.state.data.items.map((item, i) => {
                    const slugPost = `/posts/${item.fields.slug}`
                    return <Link to={slugPost} key={i}><li>{item.fields.title}</li></Link>
                })}
            </ul>
        }

    }
    render() {
        return (
            <div>
                Posts

                {this.renderPosts()}

            </div>
        );
    }
}

export default Posts;
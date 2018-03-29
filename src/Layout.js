import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-3';

class Layout extends Component {
    navigate() {
        console.log(this.props);
        browserHistory.push("/");
    }
    render() {
        return (
            <div>
                Layout
                <Link to="/posts" className="btn bth-danger">posts</Link>
                <Link to="/settings" className="btn bth-success">settings</Link>
                <button onClick={this.navigate.bind(this)}>feature</button>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
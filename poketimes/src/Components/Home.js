import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Ghost from '../Ghost.png'

class Home extends Component {
    state = {
        posts : []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({posts: res.data.slice(0,10)})
            });
    }
    render() {
        const {posts} = this.state;
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <div className="post card" key={post.id}>
                            <img src={Ghost} alt="Ghost image"/>
                            <div className="card-content">
                                <span className="card-title purple-text">{post.title}</span>
                                <p className="card-body">{post.body}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        ) : (
            <div className="center">No posts Yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postsList}
            </div>
        );
    }
}

export default Home;

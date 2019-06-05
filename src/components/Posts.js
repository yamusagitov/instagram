import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../services/instaservice';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(tjis.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false 
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }


    render() {
        return (
            <div className="left">
                <Post alt="nature" src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"/>
            </div>     
        )
    }
}
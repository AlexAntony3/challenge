import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css"
import PostItem from './PostItem';
import Loader from './Loader';

class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
            isLoaded: false,
            posts: '',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label htmlFor="searchInput">
                            Search:
                        </label>
                        <input
                            onChange={(event) => this.handleChange(event)}
                            type='search'
                            id='searchinput'
                            placeholder='By Author'
                        />
                        <h4>posts found: {this.state.posts.length} </h4>
                    </form>
                    <div className={css.SearchResults}>
                        {this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />}

                    </div>
                </div>
            </div>
        )
    }
}

export default Content
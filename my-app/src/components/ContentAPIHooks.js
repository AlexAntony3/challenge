import React, { useState, useEffect } from 'react';
import css from "./css/Content.module.css"
import PostItem from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secret'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;


        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        setPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Posts</h1>
                <form>
                    <label htmlFor="searchInput">
                        Search:
                    </label>
                    <input
                        onChange={(e) => {handleChange(e)}}
                        type='search'
                        id='searchinput'
                        placeholder='By Author'
                    />
                    <h4>posts found: {posts.length} </h4>
                </form>
                <div className={css.SearchResults}>
                    {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}

                </div>
            </div>
        </div>
    )
}

export default ContentAPIHooks
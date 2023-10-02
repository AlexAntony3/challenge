import React, { useState, useEffect } from 'react'
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css"
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const [isLoaded, setIsLoad] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setFetchedPosts(filteredPosts)
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
                    <h4>posts found: {fetchedPosts.length} </h4>
                </form>
                <div className={css.SearchResults}>
                    {isLoaded ? <PostItem savedPosts={fetchedPosts} /> : <Loader />}

                </div>
            </div>
        </div>
    )
}

export default ContentHooks
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message="It's my first post" likesCount='22'/>
            </div>
        </div>
    )
}

export default MyPosts;
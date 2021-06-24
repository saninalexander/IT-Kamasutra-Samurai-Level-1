import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount:0},
        {id: 2, message: 'It\'s my first post', likesCount:26},
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} id={postData[0].id}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount} id={postData[1].id}/>
            </div>
        </div>
    )
}

export default MyPosts;
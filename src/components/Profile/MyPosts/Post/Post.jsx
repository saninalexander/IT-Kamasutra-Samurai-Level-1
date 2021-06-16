import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Brad_Pitt_Inglorious_Basterds_Berlin_premiere.jpg/200px-Brad_Pitt_Inglorious_Basterds_Berlin_premiere.jpg'/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;
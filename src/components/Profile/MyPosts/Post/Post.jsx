import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Brad_Pitt_Inglorious_Basterds_Berlin_premiere.jpg/200px-Brad_Pitt_Inglorious_Basterds_Berlin_premiere.jpg'/>
            {props.message}
            <div>
                <span>Like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;
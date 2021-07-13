import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr_Ja3Mo-86dYoSL-1ve3f8XXWIOYcEOc-IcE6xR9nPFoZkjd6oMBaWtN_tclBqwPVDM&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;
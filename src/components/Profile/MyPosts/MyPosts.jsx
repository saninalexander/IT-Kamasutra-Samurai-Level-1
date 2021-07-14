import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef() //Метод реакта, создающий ссылку

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
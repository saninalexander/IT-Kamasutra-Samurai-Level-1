import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import {updateNewPostText} from "../../../Redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef() //Метод реакта, создающий ссылку

    let addPost = () => {
        props.addPost(); //через пропсы вызываем функцию из BLL
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text); //через пропсы вызываем функцию из BLL
    }

    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} // срабатывает каждый раз, когда идет попытка изменить содержимое textarea
                              ref={newPostElement}
                              value={props.newPostText}/>
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
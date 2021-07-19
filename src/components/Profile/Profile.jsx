import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost }
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;
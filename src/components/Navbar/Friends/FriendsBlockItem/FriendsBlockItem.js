import React from 'react';
import classes from './FriendsBlockItem.module.css'
import {NavLink} from "react-router-dom";

const FriendsBlockItem = (props) => {
    let path = '/dialogs/' + props.id

    return <div className={classes.friendItem}>
        <img
            src={props.img}/>

    <NavLink className={classes.friendName} to={path}>{props.name}</NavLink>
</div>
}

export default FriendsBlockItem;
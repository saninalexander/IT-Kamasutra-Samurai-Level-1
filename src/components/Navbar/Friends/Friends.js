import React from 'react';
import classes from './FriendsBlock.module.css'
import FriendsBlockItem from "./FriendsBlockItem/FriendsBlockItem";


const FriendsBlock = (props) => {
    let friendsBlockElements = props.state.friends.map(f => <FriendsBlockItem name={f.name} id={f.id} img={f.img}/>)

    return (
        <div className={classes.friendsBlockElements}>
            <h1>Friends</h1>
            {friendsBlockElements}
        </div>
    )
}

export default FriendsBlock;
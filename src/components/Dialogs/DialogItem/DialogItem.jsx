import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <img src='https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'/>
        <NavLink className={classes.dialogName} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
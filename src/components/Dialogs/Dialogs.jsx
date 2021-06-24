import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return  <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Masha' id='2'/>
                <DialogItem name='Victor' id='3'/>
                <DialogItem name='Artem' id='4'/>
                <DialogItem name='Ivan' id='5'/>
                <DialogItem name='Reggie' id='6'/>
            </div>

            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you doing'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;
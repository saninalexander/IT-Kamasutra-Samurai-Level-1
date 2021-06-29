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
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Reggie'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messagesData.map(m => <Message message={m.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
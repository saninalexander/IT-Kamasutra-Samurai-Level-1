import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' +  .active}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Masha
                </div>
                <div className={classes.dialog}>
                    Victor
                </div>
                <div className={classes.dialog}>
                    Artem
                </div>
                <div className={classes.dialog}>
                    Ivan
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How you doing</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;
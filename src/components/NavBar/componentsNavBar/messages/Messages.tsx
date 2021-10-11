import React from "react";
import s from './Messages.module.css'
import {MessageItem} from "./messageItem/MessageItem";
import {Dialogs} from "./dialogs/Dialogs";
import {messagePageType} from "../../../Redux/Redax";

type MessagesType ={
    messagePage:messagePageType
}


export const Messages = ({messagePage}:MessagesType) => {

    let dialog =  messagePage.dialogData.map((d:any) => <Dialogs id={d.id} name={d.name}/>)
    let massage = messagePage.messageData.map((m:any) => <MessageItem id={m.id} message={m.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialog}
            </div>
            <div className={s.dialogsItem}>
                {massage}
            </div>

        </div>
    )
}
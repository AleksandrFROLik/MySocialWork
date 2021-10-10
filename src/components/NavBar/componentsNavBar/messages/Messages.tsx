import React from "react";
import s from './Messages.module.css'
import {MessageItem} from "./messageItem/MessageItem";
import {Dialogs} from "./dialogs/Dialogs";




export const Messages = (props:any) => {



    // let dialogData = [
    //     {id: 1, name: 'Ivan'},
    //     {id: 2, name: 'Anton'},
    //     {id: 3, name: 'Petr'},
    //     {id: 4, name: 'Egor'},
    //     {id: 5, name: 'Anna'},
    //     {id: 6, name: 'Sveta'},
    //     {id: 7, name: 'Tania'},
    // ]
    //
    //
    // let messageData = [
    //     {id: 1, message: 'Hello!'},
    //     {id: 2, message: 'Hello'},
    //     {id: 3, message: 'How are you?'},
    //     {id: 4, message: 'Bye!'},
    //
    // ]

    let dialog = props.dialogData.map((d:any) => <Dialogs id={d.id} name={d.name}/>)
    let massage = props.messageData.map((m:any) => <MessageItem id={m.id} message={m.message}/>)

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
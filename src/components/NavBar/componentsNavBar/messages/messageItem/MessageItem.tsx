import React from "react";
import s from './MessageItem.module.css'

type propsMessageItemType = {
    message: string
    id: number
}

export const MessageItem = ({message, id, ...props}: propsMessageItemType) => {
    return (
        <div className={s.messageItem}>{message}</div>
    )
}



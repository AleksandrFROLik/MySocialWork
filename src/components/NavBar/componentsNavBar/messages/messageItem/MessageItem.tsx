import React from "react";
import s from './MessageItem.module.css'

type propsMessageItemType = {
    message: string
    id: number
}

export const MessageItem = ({message}: propsMessageItemType) => {
    return (
        <div className={s.messageItem}>{message}</div>
    )
}



import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type propsDialogType = {
    name: string
    id: number
}

export const Dialogs = ({name, id}: propsDialogType) => {
    let path = '/messages/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}





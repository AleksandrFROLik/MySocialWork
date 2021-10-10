import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type propsDialogType = {
    name: string
    id: number
}

export const Dialogs = ({name, id, ...props}: propsDialogType) => {
    let path = '/messages/' + id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}





import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {Dialogs} from "./componentsNavBar/messages/dialogs/Dialogs";
import {MessageItem} from "./componentsNavBar/messages/messageItem/MessageItem";


export const NavBar = () => {
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
    //
    // let dialog = dialogData.map(d => <Dialogs id={d.id} name={d.name}/>)
    // let massage = messageData.map(m => <MessageItem id={m.id} message={m.message}/>)

       return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/myProFile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.active} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/videos' activeClassName={s.active}>Videos</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/applications' activeClassName={s.active}>Applications</NavLink>
            </div>

        </nav>
    )
}



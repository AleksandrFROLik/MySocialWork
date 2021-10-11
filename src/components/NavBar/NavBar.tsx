import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";



export const NavBar = () => {

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



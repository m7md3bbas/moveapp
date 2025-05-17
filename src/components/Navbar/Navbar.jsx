import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.css';


const Navbar =()=>{
    return(
        <>
        <nav className={style['nav']}>
            <ul>
               <Link to={'/'}>Movie</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/actros'}>Actors</Link>
                <Link to={'/tvShowes'}>TV</Link>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;
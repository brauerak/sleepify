import React, { useContext } from 'react'
import { Lin, NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext'
import useAuth from '../../hooks/useAuth';
import styles from '../Menu/Menu.module.css'

function Menu() {

    //const auth = useContext(AuthContext);
    const [auth, setAuth] = useAuth();

    const login = (e) => {
        e.preventDefault();
        setAuth(true);
    }

    const logout = (e) => {
        e.preventDefault();
        setAuth(false)
    }

    return (
        <div className={`d-flex justify-content-evenly ${styles.link}`}> 
            <NavLink to='/' className='btn btn-outline-secondary m-2'>
                Home
            </NavLink>
            {auth ? (
                <>
                    <NavLink to='/account' className='btn btn-outline-secondary m-2'>
                    My Profile
                    </NavLink>
                    <a href='#' className='btn btn-outline-secondary m-2' onClick={logout}>  Log out
                    </a>
                </>
            ) 
                : <a href='#'className='btn btn-outline-secondary m-2' onClick={login}>Log in</a>
            }
        </div>
    )
}

export default Menu

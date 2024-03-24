import React, { useContext } from 'react'
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
            <a href='#' className='btn btn-outline-secondary m-2'>Home</a>
            {auth
                ? <a href='#' className='btn btn-outline-secondary m-2' onClick={logout}>Log out</a>
                : <a href='#'className='btn btn-outline-secondary m-2' onClick={login}>Log in</a>
            }
        </div>
    )
}

export default Menu

import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom'
import styles from '../Account/Account.module.css'
import AccountDetails from './AccountDetails/AccountDetails'
import MyHotels from './MyHotels/MyHotels'
function Account (props) {
    return (
        <div className={`${styles.body}`}>
            <div className={`card ${styles.card}`}>
                <div className={`${styles.info}`}>
                    <h1>My Account</h1>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to='/account/edit'>
                                    Account
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to='/account/hotels'>
                                    Hotels
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
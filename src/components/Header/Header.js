import React from 'react'
import styles from  './Header.module.css'
import Searchbar from './Searchbar/Searchbar';
import withMousePosition from '../../hoc/withMousePosition';
import Quotes from '../Quotes/Quotes';

function Header(props) {

const paralaxStyle = {
    transform: `translate(
                            ${props.mouseX / -50}px, 
                            ${props.mouseY / -120}px
                )`
    

}

    return(
        <header 
           className={styles.header}>
            <div className={styles.headerImage} style={paralaxStyle}> </div>
            <div>
            <Quotes />
            <p className={styles.text}>What is your destination?</p>
            <Searchbar onSearch={props.onSearch} />
            </div>
        </header>
    );
}

export default (Header)
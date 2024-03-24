import PropTypes from 'prop-types'
import React, { useEffect, useState, useRef } from "react";
import { Button } from 'reactstrap'
import styles from '../Searchbar/Searchbar.module.css'
import {useNavigate} from 'react-router'


function Searchbar(props) {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();


  /* useREf allows me to set reference to something. In this case I will 
  set a reference to input */
  const inputRef = useRef(null);
  
  /* useNavigate lets me navigate to given path.
  Cool is that I can pass the delta I want to go in the history stack.
  For example navigate(-1) works like the back button */
  const search = () => {
   navigate(`/search/${term}`)
  }

  /* another way is to put this function direct to property onKeyDown
  onKeyDown={e => e.key === 'Enter' && search()} 
  This is shorter and better looking way. Means that if e.key... is true, run search()
  */
  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  /* This function is short so we cen move it direct to property onChange
          const updateTerm = (e) => {
            setTerm(e.target.value)
    } */

    const focusInput = () => {
      /*  */
      inputRef.current.focus()
    }

    /* jako drugi argument funkcji useEffect podaje paramewtry które ma śledzić.
    Jezeli w tym wypadku nie podam zadnego ([]), to funkcja uruchomi się tyllko raz
    poniewa paramatr się nigdy nie zmieni.   */
    useEffect(() => {
      focusInput()
    }, []);

  return (
    <div
    className={`d-flex ${styles.dflex}`}>
      <input
        ref={inputRef}
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={e => setTerm(e.target.value)}
        className={`search ${styles.input}`}
        type="text"
        placeholder="I'm going to..."
      />
      <Button onClick={search} color="light" outline>Search</Button>
    </div>
  );
}


export default Searchbar;
import PropTypes from 'prop-types'
import React from "react";
import styles from "../Hotel/Hotel.module.css";
import img from "../../../assets/images/room1.webp";
import { Link } from 'react-router-dom';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

function Hotel(props) {

  const clickHandler = e => {
    //e.preventDefault();
    props.onOpen(props)
  }

  return (
    <div className={`card col-md-3 ${styles.hotel}`}>
      <div className="">
        <img src={img} alt="" className={`img-fluid ${styles.img}`} />
        <div className={styles.info}>
            <div className={`text-center pt-3 ${styles.title}`}>
              <p>{props.name}</p>
            </div>
            <div
              className={`text-center  d-flex justify-content-center align-items-center mb-0 ${styles.city}`}
            >
              <p className={styles.cityP}>{props.city}</p>
            </div>
          
          <div className={`row ${styles.row}`}>
            <div className="col d-flex justify-content-center align-items-center mx-3">
              <p>{`Rating: ${props.rating}`}</p>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <Link 
                to={`/hotels/${props.id}`}
                onClick={clickHandler}
                className="btn btn-outline-secondary mx-2"
              >
                See more
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = propTypes;

export default Hotel;

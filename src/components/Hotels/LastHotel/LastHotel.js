import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from "../BestHotel/BestHotel.module.css";


function LastHotel(props) {
    const [auth] = useAuth();

  return (
    <>
      {auth ? (
        <div className={`${styles.info}`}>
          <p className={`${styles.header}`}> 🤔 Still interested?</p>
          <p
            className={`${styles.hotel}`}
          >{`${props.name} in ${props.city}`}</p>
          <Link to={`/hotels/${props.id}`} className="btn btn-outline-secondary mx-2 my-2">
            Yes!
          </Link>
          <button href="#" onClick={props.onRemove} className="btn btn-outline-secondary mx-2 my-2">
            No.
          </button>
        </div>
      ) : (
        <div className={`${styles.info}`}> Log in to get best offer.</div>
      )}
    </>
  );
}

export default LastHotel;

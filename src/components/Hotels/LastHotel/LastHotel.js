import useAuth from "../../../hooks/useAuth";
import useStateStorage from "../../../hooks/useStateStorage";
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
          <a href="#" className="btn btn-outline-secondary mx-2 my-2">
            Yes!
          </a>
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

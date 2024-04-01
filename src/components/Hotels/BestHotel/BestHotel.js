import styles from "../BestHotel/BestHotel.module.css";
import moment, { locale } from "moment";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useStateStorage from "../../../hooks/useStateStorage";
import { Link } from "react-router-dom";

const BestHotel = (props) => {
  const [time, setTime] = useState("");
  const [auth] = useAuth();
  const [storage, setStorage] = useStateStorage('key', 'wartość startowa')


  let interval = null;
  const hotel = props.getHotel();
  const endTime = moment().add(23, "minutes").add(34, "seconds");

  // like componentDidMount()
  useEffect(() => {
    interval = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(leftTime / 60);
      const seconds = Math.floor(leftTime % 60);
      setTime(`${minutes}:${seconds}`)
    }, 1000)
    

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {auth ?
        <div className={`${styles.info}`}>
        <p className={`${styles.hotel}`}> 🔝 </p>
        <p className={`${styles.hotel}`}> {`${hotel.name} in ${hotel.city}`}</p>
        <p className={`${styles.rating}`}>{`Rating: ${hotel.rating} `}</p>
        <p className={`${styles.time}`}>{time}</p>
        <Link to={`/hotels/${hotel.id}`} className="btn btn-outline-secondary mx-2 my-2">
          See more
        </Link>
      </div>
      : <div className={`${styles.info}`}> Log in to get best offer.</div>}
      
    </>
  );
};

export default BestHotel;

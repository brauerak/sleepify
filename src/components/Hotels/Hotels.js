import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import Hotel from "./Hotel/Hotel";
import styles from "../Hotels/Hotels.module.css";
import BestHotel from "./BestHotel/BestHotel";
import LastHotel from "./LastHotel/LastHotel";
import useStateStorage from "../../hooks/useStateStorage";

const propTypes = {
  hotels: PropTypes.array.isRequired,
};

/* In Class Component:
    To avoid unneccesary rendering we can use function below. In this case props will be compare. If there was no change, the component will not be rerendered 
    We can use also PureComponent, then React will know when to render the component

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.hotel === nextProps.hotel ? false : true;
    }
  In Function Component: 
    We can use React.memo when the component is exported.
*/
function Hotels(props) {
  const [lastHotel, setLastHotel] = useStateStorage('lastHotel', null);


  /* To optimize the app I will use useCallback. Function will not be re-build everytime.
      useCallback(
                    (options) => { what function should be performed },
                    [ what changes should be tracked ]
      )
  */
  const getBestHotel = useCallback((options) => {
    if (props.hotels.length < 2) {
      return null
    } else {
      return props.hotels.sort((a, b) => a.rating > b.rating ? -1 : 1)[0]
    }
  }, [props.hotels])

  const openHotel = (hotel) => setLastHotel(hotel);


  const removeLastHotel = () => setLastHotel(null)

  return (
    <>
      <div className={`container-fluid ${styles.hotels}`}>
        {getBestHotel() ? <BestHotel getHotel={getBestHotel}/> : null}
        {lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel}/> : null}
        <div className="row d-flex justify-content-center align-items-center">
          {props.hotels.map((hotel) => (
            <Hotel onOpen={openHotel} key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
    </>
  );
}

Hotels.propTypes = propTypes;

export default React.memo(Hotels);

//Line 11: Jezeli mapuje to musze nadac temu jakiś klucz dlatego dodaje hotel.id.

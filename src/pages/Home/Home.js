 import { useContext, useEffect, useState } from "react";
import backendHotels from "../../BackendHotels";
import Header from "../../components/Header/Header";
import Hotels from "../../components/Hotels/Hotels";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import ReducerContext from "../../context/reducerContext";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Home (props) {

  const reducerContext = useContext(ReducerContext)

  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  
    useWebsiteTitle('Home')
    
      useEffect(() => {
        setTimeout(() => {
          setHotels(backendHotels)
          setLoading(false);
        }, 1000);
      }, [])


    return loading ? <LoadingIcon /> : (
        <>
            <Header />
            <Hotels hotels={hotels} />;
        </>
    )
}

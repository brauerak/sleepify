 import { useContext, useEffect } from "react";
import backendHotels from "../../BackendHotels";
import Header from "../../components/Header/Header";
import Hotels from "../../components/Hotels/Hotels";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import ReducerContext from "../../context/reducerContext";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Home (props) {

  const reducerContext = useContext(ReducerContext)
  
    useWebsiteTitle('Home')
  
    const searchHandler = term => {
        //filtrujemy po tabeli hotles a nie po state'cie poniewaz state moze byc juz zmieniony np po wykonanym filtrowaniu
        const newHotels = [...backendHotels]
                          .filter(x => x.city.toLowerCase()
                          .includes(term.toLowerCase()))
        reducerContext.dispatch({type: 'set-hotels', hotels: newHotels});
      }
  
    
      useEffect(() => {
        setTimeout(() => {
          reducerContext.dispatch({ type: 'set-hotels', hotels: backendHotels});
          reducerContext.dispatch({ type: 'set-loading', loading: false});
        }, 1000);
      }, [])

      if(reducerContext.state.loading) {
        return <LoadingIcon />
      }

    return (
        <>
            <Header onSearch={(term) => searchHandler(term)} />
            <Hotels hotels={reducerContext.state.hotels} />;
        </>
    )
}

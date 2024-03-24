import { useState } from "react"
/* hook który uzywa useState. useState jako parametr przyjmuję tu funkcję k†óra spawdza czy w lokalStorage znajduję sie juz jakas wartosc. Jesli tak to go zwraca.  */
function useStateStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        if(storageValue) {
            return JSON.parse(storageValue);
        } else {
            return defaultValue;
         }
    });

    const setValue = val => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return[state, setValue]
}

export default useStateStorage
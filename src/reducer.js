
  /* Zastąpię useState przez useReducer. Jest on przeznaczony do zarządzania wieloma informacjami  
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false) */

  export const reducer = (state, action) => {
    switch (action.type) {
      case 'set-hotels':
        return {...state, hotels: action.hotels};
      case 'set-loading':
        return {...state, loading: action.loading};
      case 'login':
        return {...state, isAuthenticated: true}
      case 'logout':
        return {...state, isAuthenticated: false}
      default:
        throw new Error(`Action ${action.type} not found`)
    }
  }

  export const initialState = {
    hotels: [],
    loading: true,
    isAuthenticated: true
  }
import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { React, useReducer, lazy, Suspense } from "react";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import { initialState, reducer } from "./reducer";
import Home from "./pages/Home/Home";
import HotelPage from "./pages/Hotel/HotelPage";
import Search from "./pages/Search/Search";
import AccountDetails from "./pages/Account/AccountDetails/AccountDetails";
import MyHotels from "./pages/Account/MyHotels/MyHotels";
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/Login"
import ErrorBoundry from "./hoc/ErrorBoundry";
import AddHotel from "./pages/Account/AddHotel/AddHotel";
const Account = lazy(() => import("./pages/Account/Account"));


function App() {
  // Reducer jako pierwszy argument przyjmuję funkcję () => {}. Jako drugi parametr przyjmuję obecny stan (przed zamierzoną zmianą)
  const [state, dispatch] = useReducer(reducer, initialState);

  // taki zapis m na celu tylko zwiększenie czytelnosci kommponentu Layout
  // I used 'Suspense' and lazy() to <Account/> to load this component when needed.
  const menu = <Menu />;
  const content = (
    <>
      <ErrorBoundry>
        <Routes>
          <Route exact={true} path="/" element={<Home />}></Route>
          <Route path={`/hotels/:id`} element={<HotelPage />}></Route>
          <Route path={`/search/:term`} element={<Search />}></Route>
          <Route path={`/account`}
                 element={state.isAuthenticated
                 ? <Suspense fallback={<LoadingIcon/>}>
                    <Account/>
                  </Suspense>
                 : <Navigate to="/login"/>}>
            <Route path={'/account/edit'} element={ <AccountDetails />}></Route>
            <Route path={`/account/hotels`} element={<MyHotels />}></Route>
            <Route path={`/account/hotels/addhotel`} element={<AddHotel />}></Route>
            <Route path={`/account`} element={<AccountDetails />}></Route>
          </Route>
          <Route path={`/login`} element={<Login />}></Route>
          <Route path={"*"} element={<NotFound/>}></Route>
        </Routes>
      </ErrorBoundry>
    </>
  );
  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispatch({ type: "login" }),
          logout: () => dispatch({ type: "logout" }),
        }}
      >
        <ReducerContext.Provider
          value={{
            state: state,
            dispatch: dispatch,
          }}
        >
          <Layout menu={menu} content={content} footer={footer} />
        </ReducerContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

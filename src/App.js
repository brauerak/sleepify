import './App.css';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels'
import {React, useEffect, useState, useReducer } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer'
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import useWebsiteTitle from './hooks/useWebsiteTitle'
import { initialState, reducer } from './reducer';
import Home from './pages/Home/Home';
import HotelPage from './pages/Hotel/HotelPage';




function App() {


  // Reducer jako pierwszy argument przyjmuję funkcję () => {}. Jako drugi parametr przyjmuję obecny stan (przed zamierzoną zmianą)
  const [state, dispatch] = useReducer(reducer, initialState)
  

  // taki zapis m na celu tylko zwiększenie czytelnosci kommponentu Layout
  const menu = <Menu />;
  const content = (
    <>
    <Routes>
      <Route 
        exact={true} 
        path='/' 
        element={
          <>
            <Home />
          </>
      }>
      </Route>
      <Route 
        path={`/hotels/:id`}  
        element={
         <HotelPage />
        }
      >
      </Route>
    </Routes>
    </>
  )
  const footer = <Footer/>


  return (
    <Router>
      <AuthContext.Provider value={{isAuthenticated: state.isAuthenticated,
        login: () => dispatch({ type: 'login'}),
        logout: () => dispatch({ type: 'logout'})
      }}>
        <ReducerContext.Provider value={{
          state: state,
          dispatch : dispatch
        }}>
            <Layout
              menu={menu}
              content={content}
              footer={footer}
            />
        </ReducerContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

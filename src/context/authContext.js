import React from 'react'

const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

// It helps me in debuging. This name wil be display in React Developer Tools in the browser. It doesn't change my code
AuthContext.displayName = 'AuthContext';

export default AuthContext;
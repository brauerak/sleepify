import React from 'react'

const ReducerContext = React.createContext({
    state : {},
    dispatch: () => {},
});

// It helps me in debuging. This name wil be display in React Developer Tools in the browser. It doesn't change my code
ReducerContext.displayName = 'ReducerContext';

export default ReducerContext;
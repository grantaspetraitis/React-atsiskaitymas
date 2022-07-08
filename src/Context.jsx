import React, { useContext, useState, useEffect } from 'react';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {

    const [login, setLogin] = useState(null);

    const setLoginAndStore = (login) => {
        setLogin(login);
        localStorage.setItem('user', JSON.stringify(login));
    }

    const value = { login, setLogin };
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
 
export default AppContextProvider;

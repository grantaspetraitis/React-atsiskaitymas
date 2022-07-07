import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {

    const [login, setLogin] = useState(null);
    const value = { login, setLogin }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
 
export default AppContextProvider;

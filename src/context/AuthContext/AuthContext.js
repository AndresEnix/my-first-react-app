import React, { useState } from 'react';

export const knownUsers = new Map()
    .set(" ", ' ')
    .set("1", 'Andres')
    .set("2", 'Camila')
    .set("3", 'Juan')
    .set("4", 'David')
    .set("5", 'Analith')
    .set("6", 'Edilsa')
    .set("7", 'Rodolfo')
    .set("8", 'Mauricio')
    .set("9", 'Sebastian')
    .set("10", 'Kevin');

export const AuthContext = React.createContext({
    login: () => { },
    isAuth: false,
    userId: null,
    userName: null
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

    const loginHandler = (userId) => {
        if (knownUsers.get(userId)) {
            setUserId(userId);
            setUserName(knownUsers.get(userId))
            setIsAuthenticated(true);
        } else {
            setUserId(null);
            setUserName(null)
            setIsAuthenticated(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            login: loginHandler,
            isAuth: isAuthenticated,
            userId: userId,
            userName: userName
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
import React, { useState } from 'react';

const knownUsers = new Map()
    .set(1, 'Andres')
    .set(2, 'Camila')
    .set(3, 'Juan')
    .set(4, 'David')
    .set(5, 'Analith')
    .set(6, 'Edilsa')
    .set(7, 'Rodolfo')
    .set(8, 'Mauricio')
    .set(9, 'Sebastian')
    .set(10, 'Kevin');

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

    const loginHandler = () => {
        setIsAuthenticated(true);
        const id = Math.floor(Math.random() * 10) + 1
        setUserId(id);
        setUserName(knownUsers.get(id))
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
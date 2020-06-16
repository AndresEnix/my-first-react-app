import React, { useRef, useState, useContext } from 'react'

import classes from './Login.module.css'
import { AuthContext, knownUsers } from '../../context/AuthContext/AuthContext'
import WithClass from '../../hoc/WithClass/WithClass';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const [userId, setUserId] = useState(null);
    const selectedUser = useRef(null);

    const userChangeHandler = () => {
        setUserId(selectedUser.current.value)
    }

    const options = [];
    for (const [key, value] of knownUsers.entries()) {
        options.push(<option value={key} key={key}>{value}</option>)
    }

    return (
        <WithClass classes={classes.Login}>
            <div>
                <label>User: </label>
                <select name="User" id="user" ref={selectedUser} onChange={userChangeHandler} options={options}>
                    {options}
                </select>
            </div>
            <div>
                <button onClick={() => { authContext.login(userId) }}>Log in</button>
                <button onClick={() => { authContext.login(null) }} className={classes.Red}>Log out</button>
            </div>
        </WithClass>
    )
}

export default Login;
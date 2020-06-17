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
            {!authContext.isAuth ?
                <div>
                    <label>User: </label>
                    <select name="User" id="user" ref={selectedUser} onChange={userChangeHandler} options={options}>
                        {options}
                    </select>
                </div> : null}
            <div>
                {!authContext.isAuth ? <button onClick={() => { authContext.login(userId) }}>Log in</button> : null}
                {authContext.isAuth ? <button onClick={() => { authContext.login(null) }} className={classes.Red}>Log out</button> : null}
            </div>
        </WithClass>
    )
}

export default Login;
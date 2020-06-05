import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.module.css'
import Aux from '../../../hoc/Aux'
import withLogic from '../../../hoc/withLogic'
import { AuthContext } from '../../../context/AuthContext'

const Person = (props) => {
    const inputElRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => inputElRef.current.focus());
    return (
        <Aux>
            {authContext.isAuth ? <p> is authenticated </p> : <p> Please log in </p>}
            <p onClick={props.click} > I 'm {props.name} and I am {props.age} years old!</p>
            <p> {props.children} </p>
            <input
                ref={inputElRef}
                type="text"
                onChange={props.changed}
                value={props.name}
            />
        </Aux>
    )
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    isAuth: PropTypes.bool,
};

export default withLogic(Person, classes.Person);
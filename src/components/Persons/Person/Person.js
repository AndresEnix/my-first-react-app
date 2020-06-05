import React from 'react';

import classes from './Person.module.css'
import Aux from '../../../hoc/Aux'
import withLogic from '../../../hoc/withLogic'

const Person = (props) => {
    return (
        <Aux>
            <p onClick={props.click} > I 'm {props.name} and I am {props.age} years old!</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
    )
}

export default withLogic(Person, classes.Person);
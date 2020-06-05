import React from 'react';
import PropTypes from 'prop-types'

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

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
};

export default withLogic(Person, classes.Person);
import React from 'react'

import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses = []
    let btnClasses = '';
    if (props.showPerson) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>{props.showPersons ? "Hide Persons" : "Show Persons"}</button>
        </div>
    )
}

export default cockpit;
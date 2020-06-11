import React, { useState, useEffect, useContext } from 'react';

import classes from './PersonManager.module.css'

import Persons from './Persons/Persons'
import Cockpit from './Cockpit/Cockpit'
import WithClass from './WithClass/WithClass'
import { AuthContext } from '../../context/AuthContext/AuthContext'

const PersonManager = (props) => {
  useEffect(() => {
    console.log('[PersonManager.js] Performing side effect')
    return () => console.log('[PersonManager.js] Cleaning up previous side effect')
  })
  const authContext = useContext(AuthContext);
  const [showCockpit, setShowCockpit] = useState(true)
  const [showPersons, setShowPersons] = useState(false)
  const [persons, setPersons] = useState(
    [
      { id: '101', name: "Andres", age: 29, hobbies: 'video games' },
      { id: '102', name: "Camila", age: 25, hobbies: 'cooking' },
      { id: '103', name: "Juan", age: 6, hobbies: 'watch tv' }
    ]
  )

  const deletePersonHandler = (personIndex) => {
    const tempPersons = [...persons];
    tempPersons.splice(personIndex, 1);
    setPersons(tempPersons);
  }

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id
    });
    const tempPerson = { ...persons[personIndex] };
    tempPerson.name = event.target.value;
    const tempPersons = [...persons];
    tempPersons[personIndex] = tempPerson;
    setPersons(tempPersons);
  }

  const removeCockpit = () => {
    setShowCockpit(false)
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons)
  }

  const loginHandler = () => {
    authContext.login()
  }

  let divPersons = null;
  if (showPersons) {
    divPersons = (
      <div>
        <Persons
          persons={persons}
          clicked={deletePersonHandler}
          changed={nameChangeHandler} />
      </div>
    );
  }

  let divCockpit = null;
  if (showCockpit) {
    divCockpit = (
      <div>
        <Cockpit
          appTitle={props.appTitle}
          showPersons={showPersons}
          persons={persons}
          clicked={togglePersonsHandler}
          login={loginHandler} />
      </div>
    )
  }

  return (
    <WithClass classes={classes.PersonManager}>
      <button onClick={removeCockpit}>Remove Cockpit</button>
      {divCockpit}
      {divPersons}
    </WithClass>
  );
}

export default PersonManager;

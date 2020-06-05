import React, { useState, useEffect } from 'react';

import classes from './App.module.css'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'

const App = (props) => {
  useEffect(() => {
    console.log('[App.js] Performing side effect')
    return () => console.log('[App.js] Cleaning up previous side effect')
  })
  const [showCockpit, setShowCockpit] = useState(true)
  const [showPersons, setShowPersons] = useState(false)
  const [persons, setPersons] = useState(
    [
      { id: '101', name: "Andres", age: 29, hobbies: 'video games' },
      { id: '102', name: "Camila", age: 25, hobbies: 'cooking'},
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
          clicked={togglePersonsHandler} />
      </div>
    );
  }

  return (
    <WithClass classes={classes.App}>
      <button onClick={removeCockpit}>Remove Cockpit</button>
      {divCockpit}
      {divPersons}
    </WithClass>
  );
}

export default App;

import React, { useState } from 'react';

import classes from './App.module.css'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

const App = (props) => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { id: '101', name: "Andres", age: "29" },
        { id: '102', name: "Camila", age: "25" },
        { id: '103', name: "Juan", age: "6" }
      ]
    }
  )

  const [showPersons, setShowPersons] = useState({ showPersons: true })

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  }

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id
    });
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({ persons: persons });
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons)
  }

  let persons = null;
  if (showPersons) {
    persons = (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangeHandler} />
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <Cockpit
        appTitle={props.appTitle}
        showPersons={showPersons}
        persons={personsState.persons}
        clicked={togglePersonsHandler} />
      {persons}
    </div>
  );
}

export default App;

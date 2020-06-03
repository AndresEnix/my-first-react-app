import React, { useState } from 'react';

import classes from './App.module.css'

import Person from './Person/Person'

const App = () => {
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

  let persons = null;
  let btnClasses = [classes.Button]
  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangeHandler(event, person.id)}>
            My Hobbies: Videogames
              </Person>
        })}
      </div>
    );
    btnClasses.push(classes.Red)
  }

  const assignedClassesClasses = []
  if (personsState.persons.length <= 2) {
    assignedClassesClasses.push(classes.red)
  }
  if (personsState.persons.length <= 1) {
    assignedClassesClasses.push(classes.Bold)
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a react developer</h1>
      <p className={assignedClassesClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setShowPersons(!showPersons)}>{showPersons ? "Hide Persons" : "Show Persons"}
      </button>
      {persons}
    </div>
  );
}

export default App;

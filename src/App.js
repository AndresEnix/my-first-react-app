import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    boder: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };
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

  console.log(personsState, showPersons)
  return (
    <div className="App">
      <h1>Hi, I'm a react developer</h1>
      <p>This is working</p>
      <button
        style={style}
        onClick={() => setShowPersons(!showPersons)}>Switch Name</button>
      {
        showPersons ?
          (<div>
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
          </div>) : (null)
      }
    </div>
  );
}

export default App;

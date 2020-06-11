import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import Person from './Person/Person'

const Persons = (props) => {
    useEffect(() => {
        console.log('[Persons.js] Side effect when persons array change', 'New array value:', props.persons)
        return () => console.log('[Persons.js] Previous persons array cleared.', 'Previous value:', props.persons)
    }, [props.persons])
    return (
        props.persons.map((person, index) => {
            return <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}>
                my hobbies: {person.hobbies}
            </Person>
        })
    );
}

Person.propTypes = {
    persons: PropTypes.array,
    clicked: PropTypes.func,
    changed: PropTypes.func,
};

export default Persons;
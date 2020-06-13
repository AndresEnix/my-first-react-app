import React from 'react';

import Aux from '../hoc/Aux/Aux'
import PersonManager from '../components/PersonsManager/PersonManager'
import BlogManager from '../components/BlogManager/BlogManager'

const App = (props) => (
  <Aux>
    <PersonManager moduleTitle="Persons Manager" />
    <BlogManager moduleTitle="Blog Manager" />
  </Aux>
)

export default App;

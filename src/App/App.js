import React from 'react';
import { Route } from 'react-router-dom'

import Aux from '../hoc/Aux/Aux'
import PersonManager from '../components/PersonsManager/PersonManager'
import BlogManager from '../components/BlogManager/BlogManager'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import FullPost from '../components/BlogManager/FullPost/FullPost'

const App = (props) => {
  return (
    <Aux>
      <Header />
      <Route path="/" exact render={() => <h1>Home</h1>}></Route>
      <Route path="/persons" exact component={PersonManager}></Route>
      <Route path="/post" exact component={BlogManager}></Route>
      <Route path="/post/:id" exact component={FullPost}></Route>
      <Route path="/login" exact render={() => <Login />}></Route>
    </Aux>
  )
}

export default App;

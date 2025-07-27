import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import { Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute path="/friends/add">
            <AddFriend />
          </PrivateRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;

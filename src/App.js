import React, { Component } from 'react';
import { Redirect, HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/login/login.component'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <ProtectedRoute path="/" name="Protected Page" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}


function ProtectedRoute({render, ...rest}) {
  const currentUser = sessionStorage.getItem("Auth")
  return (
    <Route
      {...rest}
      render={currentUser ? render : ({location}) => (
        <Redirect 
          to={{
            pathname:"/login",
            state: { from: location }}}/>
        )}
    />
  )
}

export default App;

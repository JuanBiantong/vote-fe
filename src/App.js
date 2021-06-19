import React, { useReducer, createContext } from 'react';
import { AccountBox } from './components/accountBox';
import HomePage from './components/homePage/homePage';
import LandingPage from './components/homePage/landingPage';
import ConfirmPage from './components/homePage/confirmationPage.jsx';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export const AuthContext = createContext();
const initiaState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initiaState);

  return (
    <Router>
      <Switch>
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          {state.isAuthenticated ? (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: 'confirmpage',
              }}
            />
          )}
          <Route exact path="/" component={AccountBox} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/confirmpage" component={ConfirmPage} />
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;

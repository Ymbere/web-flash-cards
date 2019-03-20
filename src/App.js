import React, { Component } from 'react';
import DeckList from './components/DeckList';

//
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NewDeck from './components/NewDeck';
import NavBar from './components/NavBar';
import { handleInitialData } from './redux/actions/Shared';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path={'/'}
            component={DeckList}
          />
          <Route
            exact path={'/create'}
            component={NewDeck}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);

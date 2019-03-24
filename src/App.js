import React, { Component } from 'react';
import DeckList from './components/DeckList';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//Components
import NewDeck from './components/NewDeck';
import DeckMainPage from './components/DeckMainPage';
import Newcard from './components/NewCard';
import QuizScreen from './components/QuizScreen';

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
          <Route
            exact path={'/deck/:id'}
            component={DeckMainPage}
          />
          <Route
            exact path={'/deck/:id/create_card'}
            component={Newcard}
          />
          <Route
            exact path={'/deck/:id/cards/quiz'}
            component={QuizScreen}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);

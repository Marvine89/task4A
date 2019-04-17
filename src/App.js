import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, StartQuote, Quote, NotFound } from './screens'
import nakedLogo from './assets/naked-logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="app-page">
          <nav className="app-page__header-block">
            <div className="app-page__left-block">
                <img src={nakedLogo} className="app-page__naked-logo" alt="logo"></img>
            </div>
            <div className="right-block">
                <i className="fas fa-question app-page__question-mark"></i>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/start-quote" component={StartQuote} />
            <Route path="/quote" component={Quote} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </Router>
    );
  }
}
export default App;
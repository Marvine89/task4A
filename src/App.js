import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, StartQuote, Quote, NotFound } from './screens'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/start-quote/" component={StartQuote} />
            <Route path="/quote" component={Quote} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;

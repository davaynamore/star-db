import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetails } from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SwapiService from '../../services';

export default class App extends Component {

  users = {
    admin: 'admin',
    vasya: 'imvasya',
    serik: '123'
  }

  state = {
    swapiService: new SwapiService(),
    loggedIn: {
      name: null,
      role: null,
      error: false
    }
  }

  onLogin = (login, password) => {

    for (let user in this.users) {
      if (login === 'admin' && user === login && password === this.users[user]) {
        this.setState({
          loggedIn: {
            name: login,
            role: 'admin',
            error: false
          }
        });
        return;
      } else if (login !== 'admin' && user === login && password === this.users[user]) {
        this.setState({
          loggedIn: {
            name: login,
            role: 'user',
            error: false
          }
        })
        return;
      }
    }
    this.setState({
      loggedIn: { error: true }
    })
    return;
  }

  onLogout = () => {
    this.setState({
      loggedIn: {
        name: null,
        role: null
      }
    })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      // const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      const Service = swapiService instanceof SwapiService ? SwapiService : SwapiService;
      console.log('Switched to ', Service.name)

      return {
        swapiService: new Service()
      }
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { loggedIn: { name, role, error } } = this.state;

    const userName = name ? `, ${name}` : '';

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <ErrorBoundry>
            <div className="container" >
              <Header onServiceChange={this.onServiceChange} loginStatus={name} onLogout={this.onLogout} />
              <RandomPlanet />
              <Switch>
                <Route path="/" component={() => <h2>{`Welcome to Star-DB ${userName}`}</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return (
                      <StarshipDetails itemId={id} />
                    );
                  }} />
                <Route
                  path="/login"
                  render={() => {
                    return <LoginPage isLoggedIn={name} onLogin={this.onLogin} error={error} />
                  }} />
                <Route path="/secret" render={() => {
                  return <SecretPage role={role} userName={userName} />
                }} />
                <Route render={() => <h2>Page not found!</h2>} />
              </Switch>

            </div>
          </ErrorBoundry>
        </Router>
      </SwapiServiceProvider>
    );
  }
};
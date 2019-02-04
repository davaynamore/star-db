import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends Component {

  state = {
    login: '',
    password: ''
  }

  onLoginInput = (e) => {
    this.setState(
      {
        login: e.target.value
      }
    )
  }

  onPasswordInput = (e) => {
    this.setState(
      {
        password: e.target.value
      }
    )
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { onLogin } = this.props;

    const { login, password } = this.state;

    onLogin(login, password);
  }

  render() {

    const { isLoggedIn, error } = this.props;

    let warningBlock = null;

    if (error) {
      warningBlock = <div className="alert alert-danger text-center" role="alert">Wrong Login or Password</div>
    }

    if (isLoggedIn) {
      return <Redirect to='/' />;
    }

    return (
      <div className="jumbotron">
        {warningBlock}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputLogin">Login</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLogin"
              aria-describedby="emailHelp"
              placeholder="Enter login"
              onChange={this.onLoginInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={this.onPasswordInput} />
          </div>
          <button
            type="submit"
            className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }

}
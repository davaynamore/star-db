import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ role, userName }) => {

  if (role === 'admin') {
    return (
      <div className="jumbotron text-center">
        <h2>Hello Master!!</h2>
      </div>
    )
  } else if (role === 'user') {
    return (
      <div className="jumbotron text-center">
        <h2>{`Hello ${userName}!!`}</h2>
      </div>
    )
  }

  return <Redirect to='/login' />


}

export default SecretPage;
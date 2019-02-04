import React from 'react';

import { StarshipsList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipsList onItemSelected={(itemId) => history.push(itemId)} />
  )
}

export default withRouter(StarshipsPage);
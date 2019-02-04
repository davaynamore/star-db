import React from 'react';
import Row from '../row';
import { withRouter } from 'react-router-dom';

import {
  PersonList,
  PersonDetails
} from '../sw-components';

const PeoplePage = ({ history, match }) => {

  const { id } = match.params;

  const personList = (
    <PersonList onItemSelected={(id) => history.push(id)} />
  );

  const personDetails = (
    <PersonDetails itemId={id} />
  );

  return (
    <React.Fragment>
      <Row left={personList} right={personDetails} />
    </React.Fragment>
  )

}

export default withRouter(PeoplePage);
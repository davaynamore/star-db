
import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
  PlanetsList,
  PlanetDetails
} from '../sw-components';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
    hasError: false
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { selectedItem } = this.state;

    const planetList = (
      <ErrorBoundry>
        <PlanetsList onItemSelected={this.onItemSelected} selectedItem={selectedItem} />
      </ErrorBoundry>
    );

    const planetDetails = (
      <ErrorBoundry>
        <PlanetDetails itemId={selectedItem} />
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={planetList} right={planetDetails} />
      </React.Fragment>
    )
  }
}
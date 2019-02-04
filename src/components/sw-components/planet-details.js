import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ ...props }) => {
  return (
    <ItemDetails {...props} >
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getPlanetImg
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
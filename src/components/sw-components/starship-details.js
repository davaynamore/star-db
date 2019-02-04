import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ ...props }) => {
  return (
    <ItemDetails {...props} >
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
      <Record field="manufacturer" label="Manufacturer" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImgUrl: swapiService.getStarshipImg
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
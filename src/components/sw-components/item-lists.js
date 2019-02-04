import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => {
  return <span>{name} {model}</span>;
}

const mapPersonsMethodsWithProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetsMethodsWithProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipsMethodsWithProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = compose(
  withSwapiService(mapPersonsMethodsWithProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetsList = compose(
  withSwapiService(mapPlanetsMethodsWithProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipsList = compose(
  withSwapiService(mapStarshipsMethodsWithProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetsList,
  StarshipsList
}
import React, { Component } from 'react';
import './loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}
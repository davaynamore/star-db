import React, { Component } from 'react';
import Loader from '../loader';
import ErrorButton from '../error-button';

import './item-details.scss';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImgUrl !== prevProps.getImgUrl) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) return;
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImgUrl(item),
          loading: false
        })
      })
  }



  render() {
    if (!this.state.item) {
      return <span>Select an item from a list</span>
    }

    const { item, loading, image } = this.state;

    const hasData = !(loading);
    const loader = loading ? <Loader /> : null;

    const itemView = (
      <React.Fragment>
        <img className="item-image"
          src={image} alt="robot" />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </React.Fragment>
    )


    const content = hasData ? itemView : null;

    return (
      <div className="item-details card">
        {loader}
        {content}
      </div>
    )
  }
}
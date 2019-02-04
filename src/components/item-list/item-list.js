import React from 'react';
import PropTypes from 'prop-types';
import './item-list.scss';

const ItemList = (props) => {

  const { data, selectedItem, onItemSelected, children: renderLabel } = props;

  const renderItems = (arr) => {

    return arr.map((item) => {

      const { id } = item;
      const className = (id.toString() === selectedItem) ? "list-group-item active" : "list-group-item";
      const label = renderLabel(item);

      return (
        <li
          key={id}
          className={className}
          onClick={() => { onItemSelected(id) }}>
          {label}
        </li>
      )
    })
  }

  const content = renderItems(data);

  return (
    <ul className="item-list list-group">
      {content}
    </ul>
  );

}

ItemList.defaultProps = {
  onItemSelected: () => { }
};

ItemList.defaultProps = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;
import React, { Component } from 'react';
import Loader from '../loader';

const withDetails = (View, getData, getImgUrl) => {

  return class extends Component {

    state = {
      item: null,
      loading: true,
      image: null
    }

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.setState({ loading: true });
        this.updateItem();
      }
    }

    updateItem = () => {
      console.log(this.props);
      const { itemId } = this.props;
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

      const { loading, ...data } = this.state;

      if (loading) {
        return <Loader />;
      }

      return <View {...this.props} data={data} />;
    }
  }
}

export default withDetails;
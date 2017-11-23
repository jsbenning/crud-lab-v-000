import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';


class Restaurant extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.id
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.restaurant.text}
            <p>
              <button onClick={this.handleDelete}>Delete!</button>
              <ReviewInput restaurantId={this.props.id} />
            </p>
          </li>
        </ul>
      </div>
    );
  }
};

export default Restaurant;

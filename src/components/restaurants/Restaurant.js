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
          <li><h2>{this.props.restaurant.text}</h2>
            <p>
              <button className="deleteButton btn-warning" onClick={this.handleDelete}>Delete!</button>
              <h3>Add a Review:</h3>
              <ReviewInput store={this.props.store} id={this.props.id} />
              <Reviews store={this.props.store} id={this.props.id} />
            </p>
          </li>
        </ul>
      </div>
    );
  }
};

export default Restaurant;

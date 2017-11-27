import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsArray = this.props.store.getState().reviews.filter(review => {
      review.restaurantId === this.props.id
    });
    const filteredReviews = reviewsArray.map((review, index) => {
      return <Review review={review} key={index} />
    }) ;
    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;

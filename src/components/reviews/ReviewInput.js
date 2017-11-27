import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.id
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text}  onChange={(event) => this.handleOnChange(event)} />
          <p><input type="submit" className="btn-primary" /></p>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

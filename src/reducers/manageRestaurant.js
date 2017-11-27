
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
  }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    id++;
    const restaurant = Object.assign({}, action.restaurant, {id: id})
    return { restaurants: state.restaurants.concat(restaurant) }
  case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
    return { restaurants }
  case 'ADD_REVIEW':
    const review = Object.assign({}, action.review);
    return { reviews: state.reviews.concat(review) }
  default:
    return state;
  }
}

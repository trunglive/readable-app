import { GET_ALL_CATEGORIES } from '../actions/actionTypes';

const initialCategoriesState = [];
const categoriesReducer = (state = initialCategoriesState, action) => {
  return action.type === GET_ALL_CATEGORIES ? action.categories : state;
};

export default categoriesReducer;

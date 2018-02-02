import { GET_ALL_CATEGORIES } from '../actions/categoriesActions';

const initialCategoriesState = [];
const categoriesReducer = (state = initialCategoriesState, action) => {
  return action.type === GET_ALL_CATEGORIES ? action.categories : state;
};

export default categoriesReducer;

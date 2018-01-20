import GET_ALL_CATEGORIES from '../actions/categories';

const initialCategoriesState = [];

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return [...state, ...action.categories];
    default:
      return state;
  }
};

export default categoriesReducer;

import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import * as api from '../utils/api';
import categories from '../reducers/categories';

// const defaultData = {
//   categories: [
//     {
//       name: 'react',
//       path: 'react'
//     },
//     {
//       name: 'redux',
//       path: 'redux'
//     },
//     {
//       name: 'udacity',
//       path: 'udacity'
//     }
//   ]
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadAllCategories = categories => {
  return {
    type: 'GET_ALL_CATEGORIES',
    categories
  }
};

export function fetchAllCategories() {
  return function(dispatch) {
    return api.getAllCategories().then(categories => {
      dispatch(loadAllCategories(categories));

    }).catch(error => {
      throw(error);
    });
  };
}

// const fetchAllCategories = () => dispatch =>
//   api
//     .getAllCategories()
//     .then(categories => console.log(categories))
//     .then(categories => dispatch(loadAllCategories(categories)));

const initialCategoriesState = [];

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      return action.categories;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    cat: categoriesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

store.dispatch(fetchAllCategories());

console.log(store.getState());


// const oldState = [{ name: 'awesome' }];

// const newState = [
//   {
//     name: 'react',
//     path: 'react'
//   },
//   {
//     name: 'redux',
//     path: 'redux'
//   },
//   {
//     name: 'udacity',
//     path: 'udacity'
//   }
// ];

// const result = [...oldState, ...newState];

// console.log(result);
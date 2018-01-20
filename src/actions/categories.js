import * as api from '../utils/api';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
});

export const fetchAllCategories = () => dispatch =>
  api
    .getAllCategories()
    .then(categories => dispatch(getAllCategories(categories)));

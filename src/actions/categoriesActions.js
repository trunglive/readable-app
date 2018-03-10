import * as api from '../utils/api';
import { GET_ALL_CATEGORIES } from './actionTypes';

export const loadAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
});

export const fetchAllCategories = () => dispatch => (
  api
    .getAllCategories()
    .then(categories => dispatch(loadAllCategories(categories)))
);

import * as API from '../utils/api';

API.getAllCategories().then(categories => console.log(categories));

import {
  SORT_BY_NEWEST_DATE,
  SORT_BY_OLDEST_DATE,
  SORT_BY_HIGHEST_VOTE_SCORE,
  SORT_BY_LOWEST_VOTE_SCORE
} from '../actions/sorting';

const initialSortingState = {
  sortBy: 'Vote score (highest)'
};

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY_NEWEST_DATE:
      return {
        ...state,
        sortBy: 'Newest date'
      };
    case SORT_BY_OLDEST_DATE:
      return {
        ...state,
        sortBy: 'Oldest date'
      };
    case SORT_BY_HIGHEST_VOTE_SCORE:
      return {
        ...state,
        sortBy: 'Vote score (highest)'
      };
    case SORT_BY_LOWEST_VOTE_SCORE:
      return {
        ...state,
        sortBy: 'Vote score (lowest)'
      };
    default:
      return state;
  }
};

export default sortingReducer;

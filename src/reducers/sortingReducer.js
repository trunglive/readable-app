import {
  SORT_BY_NEWEST_POST,
  SORT_BY_OLDEST_POST,
  SORT_BY_HIGHEST_VOTE_SCORE,
  SORT_BY_LOWEST_VOTE_SCORE
} from '../actions/actionTypes';

const initialSortingState = {
  sortBy: 'Newest Post'
};

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY_NEWEST_POST:
      return {
        ...state,
        sortBy: 'Newest Post'
      };
    case SORT_BY_OLDEST_POST:
      return {
        ...state,
        sortBy: 'Oldest Post'
      };
    case SORT_BY_HIGHEST_VOTE_SCORE:
      return {
        ...state,
        sortBy: 'Highest Vote'
      };
    case SORT_BY_LOWEST_VOTE_SCORE:
      return {
        ...state,
        sortBy: 'Lowest Vote'
      };
    default:
      return state;
  }
};

export default sortingReducer;
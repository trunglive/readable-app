import {
  SORT_BY_NEWEST_DATE,
  SORT_BY_OLDEST_DATE,
  SORT_BY_HIGHEST_VOTE_SCORE,
  SORT_BY_LOWEST_VOTE_SCORE
} from '../actions/sortingActions';

const initialSortingState = {
  sortBy: 'Highest Vote'
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

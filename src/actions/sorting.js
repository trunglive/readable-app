export const SORT_BY_NEWEST_DATE = 'SORT_BY_NEWEST_DATE';
export const SORT_BY_OLDEST_DATE = 'SORT_BY_OLDEST_DATE';
export const SORT_BY_HIGHEST_VOTE_SCORE = 'SORT_BY_HIGHEST_VOTE_SCORE';
export const SORT_BY_LOWEST_VOTE_SCORE = 'SORT_BY_LOWEST_VOTE_SCORE';

export const sortByNewestDate = () => ({
  type: SORT_BY_NEWEST_DATE
});

export const sortByOldestDate = () => ({
  type: SORT_BY_OLDEST_DATE
});

export const sortByHighestVoteScore = () => ({
  type: SORT_BY_HIGHEST_VOTE_SCORE
});

export const sortByLowestVoteScore = () => ({
  type: SORT_BY_LOWEST_VOTE_SCORE
});
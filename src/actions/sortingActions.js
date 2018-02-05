export const SORT_BY_NEWEST_POST = 'SORT_BY_NEWEST_POST';
export const SORT_BY_OLDEST_POST = 'SORT_BY_OLDEST_POST';
export const SORT_BY_HIGHEST_VOTE_SCORE = 'SORT_BY_HIGHEST_VOTE_SCORE';
export const SORT_BY_LOWEST_VOTE_SCORE = 'SORT_BY_LOWEST_VOTE_SCORE';

export const sortByNewestPost = () => ({
  type: SORT_BY_NEWEST_POST
});

export const sortByOldestPost = () => ({
  type: SORT_BY_OLDEST_POST
});

export const sortByHighestVoteScore = () => ({
  type: SORT_BY_HIGHEST_VOTE_SCORE
});

export const sortByLowestVoteScore = () => ({
  type: SORT_BY_LOWEST_VOTE_SCORE
});
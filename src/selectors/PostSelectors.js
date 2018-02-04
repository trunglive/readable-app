
const PostSelectors = (posts, { sortBy }) => {
  return posts.sort((currentPost, nextPost) => {
    if (sortBy === 'Highest Vote') {
      return currentPost.voteScore < nextPost.voteScore ? 1 : -1;
    } else if (sortBy === 'Lowest Vote') {
      return currentPost.voteScore > nextPost.voteScore ? 1 : -1;
    }
  });
};

export default PostSelectors;

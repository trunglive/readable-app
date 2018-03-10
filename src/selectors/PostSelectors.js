const PostSelectors = (posts, { sortBy }) => {
  return posts.sort((currentPost, nextPost) => {
    if (sortBy === 'Newest Post') {
      return currentPost.timestamp < nextPost.timestamp ? 1 : -1;
    } else if (sortBy === 'Oldest Post') {
      return currentPost.timestamp > nextPost.timestamp ? 1 : -1;
    } else if (sortBy === 'Highest Vote') {
      return currentPost.voteScore < nextPost.voteScore ? 1 : -1;
    } else if (sortBy === 'Lowest Vote') {
      return currentPost.voteScore > nextPost.voteScore ? 1 : -1;
    }
  });
};

export default PostSelectors;
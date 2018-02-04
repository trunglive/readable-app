
const PostSelectors = posts => {
  return posts.filter(post => {
    return post.sort((a, b) => {
      if (sortBy === 'highest') {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === 'lowest') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  });
};

export default PostSelectors;

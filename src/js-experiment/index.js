const posts = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'udacity',
    voteScore: 36,
    deleted: false,
    commentCount: 2
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -15,
    deleted: false,
    commentCount: 0
  },
  {
    id: '9c85dea2cde87682c179',
    timestamp: 1492380534238,
    title: 'Udacity Nanodegree',
    body: 'Learn the skills you need to get the jobs you want',
    author: 'thingthree',
    category: 'udacity',
    voteScore: 3,
    deleted: false,
    commentCount: 0
  }
];

const PostSelectors = posts => {
  return posts.sort((a, b) => {
    return a.voteScore > b.voteScore ? 1 : -1
  })
}

console.log(PostSelectors(posts));

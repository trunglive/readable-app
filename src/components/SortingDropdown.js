import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';
import {
  sortByNewestPost,
  sortByOldestPost,
  sortByHighestVoteScore,
  sortByLowestVoteScore
} from '../actions/sortingActions';
import { fetchAllPosts } from '../actions/postsActions';

const trigger = (
  <span>
    <Icon name="filter" /> Sort By
  </span>
);

const options = [
  {
    key: 'sort',
    text: <span>Sorting Criteria</span>,
    disabled: false
  },
  { key: 'newestPost', text: 'Newest Post (Default)', value: 'newestPost' },
  { key: 'oldestPost', text: 'Oldest Post', value: 'oldestPost' },
  { key: 'highestPost', text: 'Highest Vote', value: 'highestVote' },
  { key: 'lowestPost', text: 'Lowest Vote', value: 'lowestVote' }
];

class SortingDropdown extends Component {
  state = { options };

  handleChange = (e, { value }) => {
    if (value === 'newestPost') {
      this.props.sortByNewestPost();
    } else if (value === 'oldestPost') {
      this.props.sortByOldestPost();
    } else if (value === 'highestVote') {
      this.props.sortByHighestVoteScore();
    } else if (value === 'lowestVote') {
      this.props.sortByLowestVoteScore();
    }
    this.props.fetchAllPosts();
  };

  render() {
    return (
      <Dropdown
        trigger={trigger}
        options={this.state.options}
        onChange={this.handleChange}
        className="sorting-dropdown"
      />
    );
  }
}

const mapStateToProps = state => ({
  sorting: state.sorting
});

export default connect(mapStateToProps, {
  fetchAllPosts,
  sortByNewestPost,
  sortByOldestPost,
  sortByHighestVoteScore,
  sortByLowestVoteScore
})(SortingDropdown);

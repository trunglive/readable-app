import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';
import {
  sortByHighestVoteScore,
  sortByLowestVoteScore
} from '../actions/sortingActions';
import { fetchAllPosts } from '../actions/postsActions';

const trigger = (
  <span>
    <Icon name="user" /> Sort By
  </span>
);

const options = [
  {
    key: 'sort',
    text: <span>Sorting Criteria</span>,
    disabled: false
  },

  { key: 'highest', text: 'Highest Vote', value: 'highestVote' },
  { key: 'lowest', text: 'Lowest Vote', value: 'lowestVote' }
];

class SortingDropdown extends Component {
  state = { options };

  handleChange = (e, { value }) => {
    if (value === 'highestVote') {
      this.props.sortByHighestVoteScore();
      this.props.fetchAllPosts();
    } else if (value === 'lowestVote') {
      this.props.sortByLowestVoteScore();
      this.props.fetchAllPosts();
    }
    this.setState({ currentValue: value });
  };

  render() {
    return (
      <Dropdown
        trigger={trigger}
        options={this.state.options}
        onChange={this.handleChange}
        value={this.state.currentValue}
        className="sorting-dropdown"
      />
    );
  }
}

const mapStateToProps = state => ({
  sorting: state.sorting
});

export default connect(mapStateToProps, {
  sortByHighestVoteScore,
  sortByLowestVoteScore,
  fetchAllPosts
})(SortingDropdown);

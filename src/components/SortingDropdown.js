import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="user" /> Sort By
  </span>
);

const options = [
  {
    key: 'user',
    text: (
      <span>
        Sorting Criteria
      </span>
    ),
    disabled: false
  },
  { key: 'highest', text: 'Highest Vote', value: 'highest' },
  { key: 'lowest', text: 'Lowest Vote', value: 'lowest' }
];

const SortingDropdown = () => (
  <Dropdown trigger={trigger} options={options} className='sorting-dropdown' />
);

export default SortingDropdown;

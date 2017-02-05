import React from 'react';
import { connect } from 'react-redux';

import { Title } from 'Title';
import { Search } from 'Search';
import { List } from 'List';

export class Groundhog extends React.Component {
  render() {
    return (
      <div className='container'>
        <Title />
        <Search />
        <List />
      </div>
    );
  }
}

export default connect()(Groundhog);

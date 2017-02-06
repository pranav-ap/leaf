import React from 'react';
import { connect } from 'react-redux';

import { Title } from 'Title';
import { Search } from 'Search';
import { List } from 'List';
import { Toolbar } from 'Toolbar';
import { Sidebar } from 'Sidebar';

export class Groundhog extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col'>
            <Title />
          </div>
          <div className='col-sm-12'>
            <Search />
          </div>
          <div className='col hidden-md-up'>
            <Toolbar />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8'>
            <List />
          </div>
          <div className='col-sm-4 hidden-sm-down'>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Groundhog);

import React from 'react';
import { connect } from 'react-redux';

import { setSearchText } from 'actions';

export class Search extends React.Component {
  onTextChange() {
    const { dispatch } = this.props;
    dispatch(setSearchText(this.refs.searchbar.value));
  }

  render() {
    return (
      <div id="search">
        <input type="search" placeholder="Search" ref="searchbar" onChange={this.onTextChange.bind(this)} />
      </div>
    );
  }
}

export default connect()(Search);

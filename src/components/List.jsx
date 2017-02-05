import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from 'actions';

import Day from 'Day';

export class List extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>List Component</h3>
        <Day />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    features: state.features
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFeature }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

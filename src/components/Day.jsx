import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from 'actions';

import Todo from 'Todo';

export class Day extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>Day Component</h3>
        <Todo />
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

export default connect(mapStateToProps, mapDispatchToProps)(Day);

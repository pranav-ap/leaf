import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFeature } from 'actions';

export class Todo extends React.Component {
  render() {
    const { time, text } = this.props;
    return (
      <div>
        <h6>{time}</h6>
        <h4>{text}</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

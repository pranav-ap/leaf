import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from 'actions';

export class Toolbar extends React.Component {
  render() {
    return (
      <div className='container toolbar'>
        <h3>Toolbar Component</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

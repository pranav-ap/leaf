import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from 'actions';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className='container sidebar'>
        <h3>Sidebar Component</h3>
        <ul>
          <li>efwe</li>
            <li>efwe</li>
              <li>efwe</li>
                <li>efwe</li>
                  <li>efwe</li>

        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from 'actions';

export class Search extends React.Component {
  render() {
    return (
      <div className='container search'>
        <form>
          <div className="form-group row justify-content-center">
            <div className="col">
              <input className="form-control form-control-lg" type="search" placeholder="Search Todo" id="search-input" ref="search-input" />
            </div>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);

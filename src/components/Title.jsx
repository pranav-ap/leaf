import React from 'react';
import { connect } from 'react-redux';

export class Title extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center title-component'><i className="fa fa-sticky-note" aria-hidden="true"></i>&nbsp;&nbsp;Groundhog</h1>
      </div>
    );
  }
}

export default connect()(Title);

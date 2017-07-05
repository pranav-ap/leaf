import React from 'react';
import { connect } from 'react-redux';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home component</h1>
      </div>
    );
  }
}

export default connect()(Home);

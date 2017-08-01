import React from 'react';
import { connect } from 'react-redux';

export class Toolbar extends React.Component {
  handleNew() {
    document.getElementById('createModal').style.display = 'block';
  }

  render() {
    return (
      <div id='toolbar'>
        <button onClick={this.handleNew.bind(this)}><i className="fa fa-cog" aria-hidden="true" /></button>
      </div>
    );
  }
}

export default connect()(Toolbar);

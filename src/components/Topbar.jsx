import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { startLogout } from 'authActions';

export class Topbar extends React.Component {
  componentDidMount() {
    // $(':not(#dropdown-content)').on('click', () => {
    //   document.getElementById('dropdown-content').style.display = 'none';
    // });
  }

  onLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(startLogout());
  }

  handleDropdown(e) {
    e.preventDefault();
    const value = document.getElementById('dropdown-content').style.display;
     if (value === 'none') {
       document.getElementById('dropdown-content').style.display = 'block';
     } else {
       document.getElementById('dropdown-content').style.display = 'none';
     }
  }

  render() {
    return (
      <div id='topbar'>
        <p><i className="fa fa-leaf" aria-hidden="true" />&nbsp;&nbsp;Leaf</p>
        <button id="dropdown-button" onClick={this.handleDropdown.bind(this)}><i className="fa fa-cog" aria-hidden="true" />&nbsp;&nbsp;Settings&nbsp;&nbsp;<i className="fa fa-caret-down" aria-hidden="true" /></button>
        <div id='dropdown-content'>
          <button id='logout' onClick={this.onLogout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true" />&nbsp;&nbsp;Logout</button>
        </div>
      </div>
    );
  }
}

export default connect()(Topbar);

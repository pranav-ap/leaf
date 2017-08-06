import React from 'react';

export default class Topbar extends React.Component {
  handleDropdown(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div id='topbar'>
        <p><i className="fa fa-leaf" aria-hidden="true" />&nbsp;&nbsp;Leaf</p>
        <button className="dropdown-button" onClick={this.handleDropdown.bind(this)}>Logout&nbsp;&nbsp;<i className="fa fa-caret-down" aria-hidden="true" /></button>
        <div className='dropdown-content'>
          <p>Content 1</p>
          <p>Content 2</p>
        </div>
      </div>
    );
  }
}

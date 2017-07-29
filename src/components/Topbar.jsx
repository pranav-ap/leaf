import React from 'react';

export default class Topbar extends React.Component {
  render() {
    return (
      <div id='topbar'>
        <p id='logo'><span id='slide'><i className="fa fa-bars" aria-hidden="true" />&nbsp;&nbsp;</span>Groundhog&nbsp;&nbsp;</p>
      </div>
    );
  }
}

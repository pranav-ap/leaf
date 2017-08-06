import React from 'react';

export default class HoverButton extends React.Component {
  handleCreate(e) {
    e.preventDefault();
    document.getElementById('createModal').style.display = 'block';
  }

  render() {
    return (
      <div id='hoverButton'>
        <button onClick={this.handleCreate.bind(this)}><i className="fa fa-plus" aria-hidden="true" /></button>
      </div>
    );
  }
}

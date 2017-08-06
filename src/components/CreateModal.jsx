import React from 'react';
import { connect } from 'react-redux';

import { startAddTodo } from 'todosActions';

export class CreateModal extends React.Component {
  handleCreate(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const text = this.refs.modalText.value;

    dispatch(startAddTodo(text));
    this.refs.modalText.value = '';
    document.getElementById('createModal').style.display = 'none';
  }

  handleCancel() {
    this.refs.modalText.value = '';
    document.getElementById('createModal').style.display = 'none';
  }

  render() {
    return (
      <div id='createModal' className='modal'>
        <div className='modal-content'>
          <input type='text' ref='modalText' placeholder='Enter title' autoFocus />
          <button onClick={this.handleCancel.bind(this)}>Cancel</button>
          <button onClick={this.handleCreate.bind(this)}><i className="fa fa-plus" aria-hidden="true" />&nbsp;&nbsp;Create</button>
        </div>
      </div>
    );
  }
}

export default connect()(CreateModal);

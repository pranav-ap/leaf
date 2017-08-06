import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import { startAddTodo } from 'todosActions';

export class AddBar extends React.Component {
  componentDidMount() {
    $('#addbartext').keypress((e) => {
      const value = document.getElementById('addbartext').value;
      if (e.which === 13 && value !== '') {
        const { dispatch } = this.props;
        const text = this.refs.addbartext.value;

        dispatch(startAddTodo(text));
        this.refs.addbartext.value = '';
      }
    });
  }

  handleCreate(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const text = this.refs.addbartext.value;

    dispatch(startAddTodo(text));
    this.refs.addbartext.value = '';
  }

  render() {
    return (
      <div id='addbar'>
        <input id='addbartext' type='text' ref='addbartext' placeholder='Add more tasks' autoFocus />
        <button onClick={this.handleCreate.bind(this)}><i className="fa fa-plus" aria-hidden="true" /></button>
      </div>
    );
  }
}

export default connect()(AddBar);

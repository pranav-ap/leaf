import React from 'react';

export default class Post extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div id='todo'>
        <p>Todo {text}</p>
      </div>
    );
  }
}

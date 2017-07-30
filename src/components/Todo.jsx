import React from 'react';

export default class Post extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className='todo'>
        <p className='message'>{text}</p>
      </div>
    );
  }
}

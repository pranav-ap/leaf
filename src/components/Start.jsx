import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startSignup } from 'actions';

import { Title } from 'Title';

export class Start extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log('check', email, password);

    this.props.startSignup(email, password);
  }

  render() {
    return (
      <div className='container start'>
        <div className='row justify-content-center'>
          <div className='col'>
            <Title />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-5 '>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" ref="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-block btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startSignup }, dispatch);
}

export default connect(null, mapDispatchToProps)(Start);

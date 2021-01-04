import React, { Component } from 'react';

class Confirmed extends Component {
  
  handleHomeRedirect() {
      return window.location.href = '/';
  }
  
  render() {
    return (
      <div className='confirmContainer'>
        <div className='confirmOne'>
          <h1>
            CONGRATULATIONS!
          </h1>
        </div>
        <div className='confirmTwo'>
          <h2>
            We hope your new furry friend warms your heart and home!
          </h2>
        </div>
        <div className='confirmThree'>
          <h3>
            Click below to be redirected to our home page!
          </h3>
        </div>
        <div className='backHome'>
        <button onClick={this.handleHomeRedirect}>
          Back to Home
        </button>
        </div>
      </div>
    );
  }
}

export default Confirmed;
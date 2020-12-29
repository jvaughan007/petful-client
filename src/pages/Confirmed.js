import React, { Component } from 'react';

class Confirmed extends Component {
  
  handleHomeRedirect() {
      return window.location.href = '/';
  }
  
  render() {
    return (
      <div>
        <h2> SUCCESS! You have adopted a new best friend!</h2>
        <button onClick={this.handleHomeRedirect}>
          Back to Home
        </button>
      </div>
    );
  }
}

export default Confirmed;
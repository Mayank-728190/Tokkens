import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <div className="error mx-auto" data-text="404">404</div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
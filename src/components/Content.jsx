import React, {Component} from 'react';

class Content extends Component {

  render() {

    return (
      <div>
        <h4>Sample content</h4>
        <hr/>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br/>
        <img src={require('img/logo.png')} alt=""/></p>
      </div>
    )
  };
}

export default Content;

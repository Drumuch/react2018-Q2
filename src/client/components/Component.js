import React, { Component } from 'react';
import USER from '../constats/User';
import '../css/app.css';
import ReactImage from '../assets/images/react.png';

const ComponentApp = class extends Component {
  state = { username: USER.firstName };

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>{`Hello ${username}`}</h1>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
};

export default ComponentApp;

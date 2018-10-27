import React, { PureComponent } from 'react';
import ReactImage from '../assets/images/react.png';
import USER from '../constats/User';

const PureComponentApp = class extends PureComponent {
  state = { user: USER };

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>{`Hello ${user.firstName} ${user.lastName}`}</h1>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
};

export default PureComponentApp;

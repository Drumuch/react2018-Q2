import React from 'react';
import ReactImage from '../assets/images/react.png';
import USER from '../constats/User';

const functionApp = user => (
  <div>
    <h1>{`${user.firstName} ${user.lastName}`}</h1>
    <img src={ReactImage} alt="react" />
  </div>
);

export default functionApp(USER);

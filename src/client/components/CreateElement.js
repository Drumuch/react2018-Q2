import React, { createElement } from 'react';
import ReactImage from '../assets/images/react.png';
import USER from '../constats/User';

const reactElement = createElement(
  'div',
  {},
  [<h1 key="22">{`${USER.firstName} ${USER.lastName}`}</h1>,
    <img key="11" src={ReactImage} alt="react" />]
);

export default reactElement;

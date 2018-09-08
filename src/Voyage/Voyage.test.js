import React from 'react';
import ReactDOM from 'react-dom';
import Voyage from './Voyage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Voyage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    mount(<App />);
  });
});

import React from 'react';
import { mount } from 'enzyme';

import App from './App';

jest.mock('youtube-api-search');

describe('App', () => {
  it('loads YouTube videos', () => {
    // const app = mount(<App />);
    // expect(app.find('li').length).toBe(5);
  });
});

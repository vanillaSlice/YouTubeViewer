import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  const onSearch = jest.fn();
  const header = shallow(<Header onSearch={onSearch} />);

  test('renders heading', () => {
    expect(header.find('h1').length).toBe(1);
  });

  test('renders search form', () => {
    expect(header.find('.search-form').length).toBe(1);
  });

  test('renders back button', () => {
    expect(header.find('.back-button').length).toBe(1);
  });

  test('renders search button', () => {
    expect(header.find('.search-button').length).toBe(1);
  });

  test('onSearch function is passed term on submit', () => {
    const component = ReactTestUtils.renderIntoDocument(<Header onSearch={onSearch} />);
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
    input.value = 'surfboards';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.submit(form);
    expect(onSearch).toHaveBeenCalledWith('surfboards');
  });
});

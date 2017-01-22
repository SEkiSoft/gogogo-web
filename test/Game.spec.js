import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Game from '../src/components/Game';

describe('<Game />', () => {
  it('renders the App div', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('div#App').length).to.equal(1);
  });
});
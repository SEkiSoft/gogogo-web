import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MainMenu from '../src/components/MainMenu';

describe('<MainMenu />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainMenu />);
  });

  it('should render the buttons container', () => {
    expect(wrapper.find('div#buttons-container')).to.have.length(1);
  });

  it('should render the profile button', () => {
    expect(wrapper.find('button#profile')).to.have.length(1);
    expect(wrapper.find('button#profile').text()).to.equal("Profile");
  });

  it('should render the profile button', () => {
    expect(wrapper.find('button#play-now')).to.have.length(1);
    expect(wrapper.find('button#play-now').text()).to.equal("Play Now");
  });

  it('should render the profile button', () => {
    expect(wrapper.find('button#find-game')).to.have.length(1);
    expect(wrapper.find('button#find-game').text()).to.equal("Find a custom game");
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import LoginForm from '../src/components/LoginForm';

describe('<LoginForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });

  it('should render the title as <h3 />', () => {
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('should render the word Login for the title', () => {
    expect(wrapper.find('h3').text()).to.equal('Login');
  });

  it('should render two inputs', () => {
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('should render a login button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render a signup link', () => {
    expect(wrapper.find('h6')).to.have.length(1);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('should render the correct text for signup', () => {
    expect(wrapper.find('h6').text()).to.equal("Don't have an account? Sign up <Link />.");
  });

  it('should render correct email and password from props passed in', () => {
    wrapper = shallow(<LoginForm email={'test'} password={'test'} />);
    wrapper.find('input').forEach(function (node) {
      expect(node.props().value).to.equal('test');
    });
  });

  it('calls update on input value after keypress', () => {
    const onChange = sinon.spy();
    wrapper = shallow(
      <LoginForm 
        updateEmailInput={onChange} 
        updatePasswordInput={onChange} 
      />
    );
    wrapper.find('input').forEach(function (node) {
      node.simulate('change');
    });
    expect(onChange.calledTwice).to.equal(true);
  });

  it('should call function on form submission', () => {
    const onClick = sinon.spy();
    wrapper = shallow(<LoginForm handleLogin={onClick} />);
    wrapper.find('form').simulate('submit');
    expect(onClick.calledOnce).to.equal(true);
  });
});
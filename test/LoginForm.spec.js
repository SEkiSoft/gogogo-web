import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import LoginForm from '../src/components/LoginForm';

describe('<LoginForm />', () => {
  it('should render the title as <h2 />', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should render the word Login for the title', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h2').text()).to.equal('Login');
  });

  it('should render two inputs', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('should render a login button', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render a signup link', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h5')).to.have.length(1);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('should render the correct text for signup', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h5').text()).to.equal("Don't have an account? Sign up <Link />.");
  });

  it('should render correct email and password from props passed in', () => {
    const wrapper = shallow(<LoginForm email={'test'} password={'test'} />);
    wrapper.find('input').forEach(function (node) {
      expect(node.props().value).to.equal('test');
    });
  });

  it('calls update on input value after keypress', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(
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
    const wrapper = shallow(<LoginForm handleLogin={onClick} />);
    wrapper.find('form').simulate('submit');
    expect(onClick.calledOnce).to.equal(true);
  });
});
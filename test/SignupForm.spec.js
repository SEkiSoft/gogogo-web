import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SignupForm from '../src/components/SignupForm';

describe('<SignupForm />', () => {
  const state = {username: 'test', password: 'test', email: 'test'};
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignupForm state={state} />);
  });

  it('should render a title', () => {
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('should render the correct text for the title', () => {
    expect(wrapper.find('h4').text()).to.equal('Account Signup');
  });

  it('should render 3 inputs', () => {
    expect(wrapper.find('input')).to.have.length(3);
  });

  it('should render 3 input labels', () => {
    expect(wrapper.find('label')).to.have.length(3);
  });

  it('should render a signup button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render correct values when props passed into input', () => {
    wrapper.find('input').forEach(function(node) {
      expect(node.props().value).to.equal('test');
    });
  });

  it('should call function to update state on keypress', () => {
    const updateUser = sinon.spy();
    const updatePass = sinon.spy();
    const updateEmail = sinon.spy();

    wrapper = shallow(
      <SignupForm 
        state={state}
        updateEmailInput={updateEmail}
        updatePasswordInput={updatePass}
        updateUserInput={updateUser}
      />
    );

    wrapper.find('input').forEach(function(node) {
      node.simulate('change');
    });

    expect(updateUser.calledOnce).to.equal(true);
    expect(updatePass.calledOnce).to.equal(true);
    expect(updateEmail.calledOnce).to.equal(true);
  });

  it('should call function on form submission', () => {
    const signup = sinon.spy();
    wrapper = shallow(<SignupForm state={state} handleSignup={signup} />);

    wrapper.find('form').simulate('submit');
    expect(signup.calledOnce).to.equal(true);
  });
});
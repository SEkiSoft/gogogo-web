import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SignupForm from '../src/components/SignupForm';

describe('<SignupForm />', () => {
  const state = {username: 'test', password: 'test', email: 'test'};

  it('should render a title', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should render the correct text for the title', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    expect(wrapper.find('h2').text()).to.equal('Account Signup');
  });

  it('should render 3 inputs', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    expect(wrapper.find('input')).to.have.length(3);
  });

  it('should render 3 input labels', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    expect(wrapper.find('label')).to.have.length(3);
  });

  it('should render a signup button', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render correct values when props passed into input', () => {
    const wrapper = shallow(<SignupForm state={state} />);
    wrapper.find('input').forEach(function(node) {
      expect(node.props().value).to.equal('test');
    });
  });

  it('should call function to update state on keypress', () => {
    const updateUser = sinon.spy();
    const updatePass = sinon.spy();
    const updateEmail = sinon.spy();

    const wrapper = shallow(
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
    const wrapper = shallow(<SignupForm state={state} handleSignup={signup} />);

    wrapper.find('form').simulate('submit');
    expect(signup.calledOnce).to.equal(true);
  });
});
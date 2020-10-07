import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Form, notification } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';
import { useLoginForm } from '../../hooks';
import { FormTextInput, FormSubmitButton } from '../../../../shared/components/form';

function SignUpModal({ isOpen, toggle }) {
  const { isLoading, form } = useLoginForm();

  const handleSignUp = (data) => {

  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="Forgot Password">
      <Form form={form} onFinish={handleResetPassword} layout='horizontal'>
        <FormTextInput name="email" label="Email" placeholder="Please enter your email." rules={[{
          type: 'email',
          message: 'The input is not valid email address.',
        }, { required: true, message: 'Please input an email.' }]} />
        <Divider />
        <FormSubmitButton isLoading={isLoading} label="Send Email" />
      </Form>
    </PrimaryModal>
  );
}

export default SignUpModal;

ForgotPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

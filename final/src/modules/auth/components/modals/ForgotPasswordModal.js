import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Form, notification } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';
import { useLoginForm } from '../../hooks';
import { FormTextInput, FormSubmitButton } from '../../../../shared/components/form';

export default function ForgotPasswordModal({ isOpen, toggle }) {
  const { isLoading, form, resetPassword } = useLoginForm();

  const handleResetPassword = (data) => {
    resetPassword(data.email)
      .then((res) => {
        notification.success({ message: 'Success', description: 'An email with details on how to reset your password has been sent to your email address.' });
        toggle();
      })
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

ForgotPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

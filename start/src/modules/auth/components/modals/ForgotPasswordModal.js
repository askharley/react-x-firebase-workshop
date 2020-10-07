import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Form } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';
import { useLoginForm } from '../../hooks';
import { FormTextInput, FormSubmitButton } from '../../../../shared/components/form';

export default function ForgotPasswordModal({ isOpen, toggle }) {
  const [form] = Form.useForm();  

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="Forgot Password">
      <Form form={form} onFinish={() => { }} layout='horizontal'>
        <FormTextInput name="email" label="Email" placeholder="Please enter your email." rules={[{
          type: 'email',
          message: 'The input is not valid email address.',
        }, { required: true, message: 'Please input an email.' }]} />
        <Divider />
        <FormSubmitButton label="Send Email" />
      </Form>
    </PrimaryModal>
  );
}

ForgotPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

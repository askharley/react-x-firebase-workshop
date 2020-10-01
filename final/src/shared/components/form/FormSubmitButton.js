import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';

export default function FormSubmitButton({ isLoading = false, label }) {
  return (
    <Form.Item name='submit'>
      <Button loading={isLoading} style={{ float: 'right' }} type="primary" htmlType="submit">{label}</Button>
    </Form.Item>
  );
}

FormSubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired
}
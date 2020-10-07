import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

export default function FormPasswordInput({ name, label, placeholder, prefix, rules }) {
  return (
    <Form.Item name={name} label={<b>{label}</b>} rules={rules}>
      <Input.Password prefix={prefix} placeholder={placeholder} />
    </Form.Item>
  );
}

FormPasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.object,
  rules: PropTypes.array
}

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

export default function FormTextInput({ name, label, rules, prefix, placeholder, defaultValue }) {
  return (
    <Form.Item name={name} label={<b>{label}</b>} rules={rules}>
      <Input prefix={prefix} type="text" placeholder={placeholder} defaultValue={defaultValue} />
    </Form.Item>
  );
}

FormTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rules: PropTypes.array,
  prefix: PropTypes.object,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
}

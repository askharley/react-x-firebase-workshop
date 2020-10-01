import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

export default function PrimaryModal({ isOpen, toggle, title, footer = null, children }) {
  return (
    <Modal visible={isOpen} title={title} onCancel={toggle} footer={footer} centered>
      {children}
    </Modal>
  );
}

PrimaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}

PrimaryModal.defaultValues= {
  footer: null
}

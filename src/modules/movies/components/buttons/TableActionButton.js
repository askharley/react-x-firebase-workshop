import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';

export default function TableActionButton({ label, icon, onClick }) {
  return (
    <Button style={{ float: 'right', marginLeft: '10px' }} icon={icon} onClick={onClick}>
      {label}
    </Button>
  );
}

TableActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

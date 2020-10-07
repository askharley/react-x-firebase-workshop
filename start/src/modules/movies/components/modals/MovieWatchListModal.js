import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { listTable } from '../../schemas/table';

export default function MovieWatchListModal({ isOpen, toggle }) {
  const movies = [];

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="My Watch List">
      <CustomDataTable pagination={false} schema={listTable} data={movies} onClick={() => { }} />
    </PrimaryModal>
  );
}

MovieWatchListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setCurrentMovie: PropTypes.func.isRequired,
  toggleMovieDetailsModal: PropTypes.func.isRequired
}

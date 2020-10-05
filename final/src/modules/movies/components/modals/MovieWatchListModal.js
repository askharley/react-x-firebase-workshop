import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { listTable } from '../../schemas/table';
import { UserContext } from '../../../../shared/context';
import useStreamCollection from '../../../../shared/hooks/useStreamCollection';

export default function MovieWatchListModal({ isOpen, toggle, setCurrentMovie, toggleMovieDetailsModal }) {
  const [user] = useContext(UserContext);  
  const movies = useStreamCollection(`users/${user?.id}/watchlist`);

  const handleMovieSelection = (movie) => {
    toggle();
    setCurrentMovie(movie);
    toggleMovieDetailsModal();
  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="My Watch List">
      <CustomDataTable pagination={false} schema={listTable} data={movies} onClick={handleMovieSelection} />
    </PrimaryModal>
  );
}

MovieWatchListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setCurrentMovie: PropTypes.func.isRequired,
  toggleMovieDetailsModal: PropTypes.func.isRequired
}

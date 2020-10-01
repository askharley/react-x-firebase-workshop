import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { getWatchListMovies } from '../../../../shared/services/userService';
import { listTable } from '../../schemas/table';
import { UserContext } from '../../../../shared/context';

export default function MovieWatchListModal({ isOpen, toggle, setCurrentMovie, toggleMovieDetailsModal }) {
  const [user] = useContext(UserContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getWatchListMovies(user.id)
      .then((res) => setMovies(res));
  }, [user.id]);

  const handleMovieSelection = (movie) => {
    toggle();
    setCurrentMovie(movie);
    toggleMovieDetailsModal();
  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="My Watch List">
      <CustomDataTable schema={listTable} data={movies} onClick={handleMovieSelection} />
    </PrimaryModal>
  );
}

MovieWatchListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setCurrentMovie: PropTypes.func.isRequired,
  toggleMovieDetailsModal: PropTypes.func.isRequired
}

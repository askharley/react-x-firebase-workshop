import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { getWatchListMovies } from '../../../../shared/services/userService';
import { listTable } from '../../schemas/table';

export default function MovieWatchListModal({ isOpen, toggle, setCurrentMovie, toggleMovieDetailsModal }) {
  const user = useSelector((state) => state.auth.current);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // get watch list
    // set movies
  }, []);

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

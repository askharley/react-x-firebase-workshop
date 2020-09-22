import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Input } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { searchMovies } from '../../../../shared/services/movieService';
import { listTable } from '../../schemas/table';

export default function SearchMoviesModal({ isOpen, toggle, setCurrentMovie, toggleMovieDetailsModal }) {
  const [movieResults, setMovieResults] = useState([]);

  const handleMovieSearch = (term) => {
    searchMovies(term)
      .then((res) => setMovieResults(res));
  }

  const handleMovieSelection = (movie) => {
    toggle();
    setMovieResults([]);
    setCurrentMovie(movie);
    toggleMovieDetailsModal();
  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="Search movies">
      <Input.Search placeholder="Title..." onSearch={handleMovieSearch} allowClear />
      <Divider />
      {movieResults.length > 0 && <CustomDataTable schema={listTable} data={movieResults} onClick={handleMovieSelection} />}
    </PrimaryModal>
  );
}

SearchMoviesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setCurrentMovie: PropTypes.func.isRequired,
  toggleMovieDetailsModal: PropTypes.func.isRequired
}

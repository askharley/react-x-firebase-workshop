import React from 'react';
import { PrimaryModal } from '../../../shared/components/modals';
import { CustomDataTable } from '../../../shared/components/table';
import { listTable } from '../schemas/table';

export default function MovieFavouritesModal({ isOpen, toggle, movies, setCurrentMovie, toggleMovieDetailsModal }) {
  const handleMovieSelection = (movie) => {
    toggle();    
    setCurrentMovie(movie);
    toggleMovieDetailsModal();
  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="My Favourites">
      <CustomDataTable schema={listTable} data={movies} onClick={handleMovieSelection} />
    </PrimaryModal>
  );
}

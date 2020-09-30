
import React, { useState } from 'react';
import { Typography, Card, Divider, Row } from 'antd';
import { HeartOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useModal } from '../../../shared/hooks';
import useMovieList from '../hooks/useMovieList';
import { MovieDetailsModal, MovieWatchListModal, MovieFavouritesModal } from './modals';
import { TableActionButton } from './buttons';
import { MovieCard } from './cards';

export default function MovieList() {
  const { user, movies } = useMovieList();
  const [currentMovie, setCurrentMovie] = useState({});
  const [showMovieDetailsModal, toggleMovieDetailsModal] = useModal();
  const [showUserWatchListModal, toggleUserWatchListModal] = useModal();
  const [showUserFavouritesModal, toggleUserFavouritesModal] = useModal();

  const displayMovieDetailsModal = (data) => {
    // set the chosen movie
    // display the modal
  }

  const handleAddMovieToFavourites = (movie) => {

  }

  const handleAddMovieToWatchList = (movie) => {

  }

  return (
    <>
      {
        movies === undefined
          ? <></>
          : <Card>
            <Typography.Title level={3}>
              Movies
              <TableActionButton label="My Favourites" icon={<HeartOutlined />} onClick={toggleUserFavouritesModal} />
              <TableActionButton label="My Watch List" icon={<CheckCircleOutlined />} onClick={toggleUserWatchListModal} />
            </Typography.Title>
            <Divider />
            <Row gutter={[32, 16]}>
              {movies.map((movie) => {
                return <MovieCard movie={movie} displayMovieDetailsModal={displayMovieDetailsModal} handleAddMovieToFavourites={handleAddMovieToFavourites} handleAddMovieToWatchList={handleAddMovieToWatchList} />
              })}
            </Row>
          </Card>
      }
      <MovieDetailsModal isOpen={showMovieDetailsModal} toggle={toggleMovieDetailsModal} movie={currentMovie} />
      <MovieWatchListModal isOpen={showUserWatchListModal} toggle={toggleUserWatchListModal} setCurrentMovie={setCurrentMovie} toggleMovieDetailsModal={toggleMovieDetailsModal} />
      <MovieFavouritesModal isOpen={showUserFavouritesModal} toggle={toggleUserFavouritesModal} movies={user?.favourites} setCurrentMovie={setCurrentMovie} toggleMovieDetailsModal={toggleMovieDetailsModal} />
    </>
  );
}


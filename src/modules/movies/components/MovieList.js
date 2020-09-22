
import React, { useState } from 'react';
import { Typography, Card, Divider, Row, message } from 'antd';
import { HeartOutlined, CheckCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { useModal } from '../../../shared/hooks';
import { addMovieToFavourites, addMovieToWatchList } from '../../../shared/services/userService';
import useMovieList from '../hooks/useMovieList';
import { MovieDetailsModal, SearchMoviesModal, MovieWatchListModal, MovieFavouritesModal } from './modals';
import { TableActionButton } from './buttons';
import { MovieCard } from './cards';

export default function MovieList() {
  const [showMovieDetailsModal, toggleMovieDetailsModal] = useModal();
  const [showSearchMoviesModal, toggleSearchMoviesModal] = useModal();
  const [showUserWatchListModal, toggleUserWatchListModal] = useModal();
  const [showUserFavouritesModal, toggleUserFavouritesModal] = useModal();
  const { user, movies } = useMovieList();
  const [currentMovie, setCurrentMovie] = useState({});

  const displayMovieDetailsModal = (data) => {
    setCurrentMovie(data);
    toggleMovieDetailsModal();
  }

  const handleAddMovieToFavourites = (movie) => {
    addMovieToFavourites(user.id, movie)
      .then(() => message.success('Added movie to your favourites.'))
      .catch(() => message.error('Failed to add move to your favourites.'))
  }

  const handleAddMovieToWatchList = (movie) => {
    addMovieToWatchList(user.id, movie)
      .then(() => message.success('Added move to your watch list.'))
      .catch(() => message.error('Failed to add move to your watch list.'))
  }

  return (
    <>
      {
        movies === undefined
          ? <></>
          : <Card>
            <Typography.Title level={3}>
              Movies
            <TableActionButton label="Search" icon={<SearchOutlined />} onClick={toggleSearchMoviesModal} />
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
      <SearchMoviesModal isOpen={showSearchMoviesModal} toggle={toggleSearchMoviesModal} setCurrentMovie={setCurrentMovie} toggleMovieDetailsModal={toggleMovieDetailsModal} />
      <MovieWatchListModal isOpen={showUserWatchListModal} toggle={toggleUserWatchListModal} setCurrentMovie={setCurrentMovie} toggleMovieDetailsModal={toggleMovieDetailsModal} />
      <MovieFavouritesModal isOpen={showUserFavouritesModal} toggle={toggleUserFavouritesModal} movies={user?.favourites} setCurrentMovie={setCurrentMovie} toggleMovieDetailsModal={toggleMovieDetailsModal} />
    </>
  );
}


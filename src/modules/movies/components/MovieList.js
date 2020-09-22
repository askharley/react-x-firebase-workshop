import React, { useState } from 'react';
import { Typography, Card, Divider, Button, Row, Col, message } from 'antd';
import { HeartOutlined, CheckCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { useModal } from '../../../shared/hooks';
import useMovieList from '../hooks/useMovieList';
import { MovieDetailsModal, SearchMoviesModal, MovieWatchListModal, MovieFavouritesModal } from '.';
import { addMovieToFavourites, addMovieToWatchList } from '../../../shared/services/userService';

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
      {movies === undefined
        ? <></>
        : <Card>
          <Typography.Title level={3}>
            Movies
            <Button style={{ float: 'right', marginLeft: '10px' }} icon={<SearchOutlined />} onClick={toggleSearchMoviesModal}>
              Search
            </Button>
            <Button style={{ float: 'right', marginLeft: '10px' }} icon={<HeartOutlined />} onClick={toggleUserFavouritesModal}>
              My Favourites
            </Button>
            <Button style={{ float: 'right' }} icon={<CheckCircleOutlined />} onClick={toggleUserWatchListModal}>
              My Watch List
            </Button>
          </Typography.Title>
          <Divider />
          <Row gutter={[32, 16]}>
            {movies.map((movie) => {
              return <Col span={4}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img style={{ height: 350 }} alt={movie.title} src={movie.posterUrl} onClick={() => displayMovieDetailsModal(movie)} />}
                  actions={[
                    <CheckCircleOutlined key="watchlist" onClick={() => handleAddMovieToWatchList(movie)} />,
                    <HeartOutlined key="favourite" onClick={() => handleAddMovieToFavourites(movie)} />,
                  ]}>
                  <Card.Meta title={movie.title} />
                </Card>
              </Col>
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

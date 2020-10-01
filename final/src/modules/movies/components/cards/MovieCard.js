import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'antd';
import { HeartOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function MovieCard({ movie, displayMovieDetailsModal, handleAddMovieToWatchList, handleAddMovieToFavourites }) {
  return (
    <Col span={4}>
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
  );
}

MovieCard.propTypes = {  
  movie: PropTypes.object.isRequired,
  displayMovieDetailsModal: PropTypes.func.isRequired,
  handleAddMovieToWatchList: PropTypes.func.isRequired,
  handleAddMovieToFavourites: PropTypes.func.isRequired
}

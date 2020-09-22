import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';
import { formatTimestampToDate } from '../../../../shared/utils/helpers';

export default function MovieDetailsModal({ isOpen, toggle, movie }) {
  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title={movie.title}>
      <Row>
        <Col span={8}>
          <Image src={movie.posterUrl} />
        </Col>
        <Col span={2} />
        <Col span={14}>
          <div><b>Title:</b> {movie.title}</div>
          <div><b>Date:</b> {formatTimestampToDate(movie.releaseDate)}</div>
          <div><b>Synopsis: </b>{movie.synopsis}</div>
        </Col>
      </Row>
    </PrimaryModal>
  );
}

MovieDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

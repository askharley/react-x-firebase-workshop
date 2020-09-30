import firebase from 'firebase';
import { db } from './firebase';
import { firestoreKeys } from '../utils/constants';

export function getUser(id) {
  return db.collection(firestoreKeys.USERS).doc(id).get()
    .then((res) => ({
      ...res.data(),
      id
    }));
}

export function addMovieToWatchList(userId, movie) {

}

export function addMovieToFavourites(userId, movie) {

}

export function getWatchListMovies(userId) {

}

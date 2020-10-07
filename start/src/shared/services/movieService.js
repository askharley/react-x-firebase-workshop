import { db } from './firebase';
import { firestoreKeys } from '../utils/constants';

export function streamMovies(observer) {
  return db.collection(firestoreKeys.MOVIES).orderBy('title', 'asc').onSnapshot(observer);
}

export function getMovie(id) {

}

export function createMovie(data) {

}

import { db } from './firebase';
import { firestoreKeys } from '../utils/constants';

export function getMovies() {
  const results = [];

  return db.collection(firestoreKeys.MOVIES).orderBy('title', 'asc').get().then((docs) => {
    docs.forEach((doc) => {
      results.push({
        ...doc.data(),
        id: doc.id
      });
    });
    return results;
  });
}

export function searchMovies(searchTerm) {
  const results = [];

  return db.collection(firestoreKeys.MOVIES).where('title', '==', searchTerm).get().then((docs) => {
    docs.forEach((doc) => {
      results.push({
        ...doc.data(),
        id: doc.id
      });
    });
    return results;
  });
}

export function getMovie(id) {
  return db.collection(firestoreKeys.MOVIES).doc(id).get()
    .then((res) => ({
      ...res.data(),
      id
    }));
}

export function createMovie(data) {
  return db.collection(firestoreKeys.MOVIES).doc().set(data);
}

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
  return db.collection(firestoreKeys.USERS).doc(userId).collection(firestoreKeys.WATCH_LIST).add(movie);
}

export function addMovieToFavourites(userId, movie) {
  return db.collection(firestoreKeys.USERS).doc(userId).update({
    favourites: firebase.firestore.FieldValue.arrayUnion(movie)
  })
}

export function getWatchListMovies(userId) {
  let results = [];

  return db.collection(firestoreKeys.USERS).doc(userId).collection(firestoreKeys.WATCH_LIST).orderBy('title', 'asc').get().then((docs) => {
    docs.forEach((doc) => {
      results.push({
        ...doc.data(),
        id: doc.id
      });
    });
    return results;
  });
}

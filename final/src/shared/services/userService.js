import firebase from 'firebase';
import { db } from './firebase';
import { firestoreKeys } from '../utils/constants';

export function streamUser(id, observer) {
  return db.collection(firestoreKeys.USERS).doc(id).onSnapshot(observer);
}

export function checkUserExists(uid) {
  return db.collection(firestoreKeys.USERS).doc(uid).get();
}

export function createUserDocument(user) {
  return db.collection(firestoreKeys.USERS).doc(user.uid).set({
    person: {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
    }
  })
}

export function addMovieToWatchList(userId, movie) {
  return db.collection(firestoreKeys.USERS).doc(userId).collection(firestoreKeys.WATCH_LIST).add(movie);
}

export function addMovieToFavourites(userId, movie) {
  return db.collection(firestoreKeys.USERS).doc(userId).update({
    favourites: firebase.firestore.FieldValue.arrayUnion(movie)
  })
}

export function streamUserWatchListMovies(userId, observer) {
  return db.collection(firestoreKeys.USERS).doc(userId).collection(firestoreKeys.WATCH_LIST).orderBy('title', 'asc').onSnapshot(observer);
}

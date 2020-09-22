import { message } from 'antd';
import { auth } from './firebase';

export function getCurrentUser() {
  return auth().currentUser;
}

export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case 'auth/email-already-in-use':
          message.error(err.message);
          break;
        default:
          break;
      }
    });
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth().signOut();
}

export function sendForgotPasswordEmail(email) {
  return auth().sendPasswordResetEmail(email);
}

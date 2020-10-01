import { auth } from './firebase';

export function getCurrentUser() {
  return auth.currentUser;
}

export function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}

export function sendForgotPasswordEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

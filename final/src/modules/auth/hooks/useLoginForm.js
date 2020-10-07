import { useContext } from 'react';
import { Form } from 'antd';
import firebase from 'firebase';
import { UserContext } from '../../../shared/context';
import { signIn, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { streamUser } from '../../../shared/services/userService';
import { auth } from '../../../shared/services/firebase';

export default function useLoginForm() {
  const [form] = Form.useForm();
  const [, setUser] = useContext(UserContext);

  const login = (email, password) => {
    return signIn(email, password)
      .then((authRes) => streamUser(authRes.user.uid, {
        next: (docSnapshot) => {
          const updatedDocument = {
            ...docSnapshot.data(),
            id: docSnapshot.id
          };
          setUser(updatedDocument);
        }
      }));
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => alert(result.user.displayName));
  }

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  return { form, login, signInWithGoogle, resetPassword };
}

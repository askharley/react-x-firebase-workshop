import { useContext } from 'react';
import { Form } from 'antd';
import { UserContext } from '../../../shared/context';
import { signIn, signInWithGoogle, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { checkUserExists, createUserDocument, streamUser } from '../../../shared/services/userService';

export default function useLoginForm() {
  const [form] = Form.useForm();
  const [, setUser] = useContext(UserContext);

  const loginWithEmailPassword = (email, password) => {
    return signIn(email, password)
      .then((authRes) => startStream(authRes.user.uid));
  }

  const loginWithGoogle = () => {
    return signInWithGoogle()
      .then((authRes) => checkUserExists(authRes.user.uid)
        .then((res) => {
          res.exists
            ? startStream(authRes.user.uid)
            : createUserDocument(authRes.user)
              .then(() => startStream(authRes.user.uid))
        }));
  }

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  const startStream = (uid) => {
    streamUser(uid, {
      next: (docSnapshot) => {
        const updatedDocument = {
          ...docSnapshot.data(),
          id: docSnapshot.id
        };
        setUser(updatedDocument);
      }
    })
  }

  return { form, loginWithEmailPassword, loginWithGoogle, resetPassword };
}

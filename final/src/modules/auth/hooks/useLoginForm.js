import { useContext } from 'react';
import { Form } from 'antd';
import { UserContext } from '../../../shared/context';
import { signIn, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { streamUser } from '../../../shared/services/userService';

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

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  return { form, login, resetPassword };
}

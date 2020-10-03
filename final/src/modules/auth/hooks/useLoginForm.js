import { useContext } from 'react';
import { Form } from 'antd';
import { UserContext } from '../../../shared/context';
import { signIn, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { getUser } from "../../../shared/services/userService";

export default function useLoginForm() {
  const [form] = Form.useForm();
  const [, setUser] = useContext(UserContext);

  const login = (email, password) => {
    return signIn(email, password)
      .then((authRes) => console.log(authRes.user.uid));
  }

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  return { form, login, resetPassword };
}

import { useContext } from 'react';
import { Form } from 'antd';
import { UserContext } from '../../../shared/context';
import { signIn, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { getUser } from "../../../shared/services/userService";

export default function useLoginForm() {
  const [form] = Form.useForm();
  const [user, setUser] = useContext(UserContext);

  const login = (email, password) => {
    return signIn(email, password)
      .then((authRes) => getUser(authRes.user.uid).then((res) => setUser(res)));      
  }

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  return { form, login, resetPassword };
}

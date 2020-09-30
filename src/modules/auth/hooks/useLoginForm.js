import { useDispatch } from "react-redux";
import { Form } from 'antd';
import { signIn, sendForgotPasswordEmail } from "../../../shared/services/authService";
import { getUser } from "../../../shared/services/userService";
import { actionCreators } from "../../../shared/state/authStore";

export default function useLoginForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const login = (email, password) => {
    return signIn(email, password)
      .then((authRes) => getUser(authRes.user.uid).then((res) => dispatch(actionCreators.setAuthUser(res))));
  }

  const resetPassword = (email) => {
    return sendForgotPasswordEmail(email);
  }

  return { form, login, resetPassword };
}

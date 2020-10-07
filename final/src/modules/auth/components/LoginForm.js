import React from 'react';
import { Row, Col, Typography, Card, Form, Button, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigation, useModal } from '../../../shared/hooks';
import { routeKeys } from '../../../shared/utils/constants';
import { useLoginForm } from '../hooks';
import { ForgotPasswordModal } from './modals';
import { FormTextInput, FormPasswordInput } from '../../../shared/components/form';

function Login() {
  const { push } = useNavigation();
  const { form, loginWithEmailPassword, loginWithGoogle, signInWithGoogle, signUpWithGoogle } = useLoginForm();
  const [showForgotPasswordModal, toggleForgotPasswordModal] = useModal();

  const handleEmailPasswordLogin = (data) => {
    loginWithEmailPassword(data.email, data.password)
      .then((res) => push(routeKeys.MOVIES))
      .catch((err) => message.error(err.message));
  }

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((res) => push(routeKeys.MOVIES))
      .catch((err) => message.error(err.message));
  }

  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then((res) => message.success('Successfully signed up.'))
  }


  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Typography.Title>Login</Typography.Title>
            <Typography.Paragraph className="text-muted">Sign in to your account</Typography.Paragraph>
            <Form form={form} layout='vertical' onFinish={handleEmailPasswordLogin}>
              <FormTextInput name="email" prefix={<UserOutlined />} label="Email Address" placeholder="Enter your email address" rules={[{
                type: 'email',
                message: 'The input is not valid email address.',
              }, { required: true, message: 'Please input your email address.' }]} />
              <FormPasswordInput name="password" prefix={<LockOutlined />} label="Password" placeholder="Enter a password" rules={[{ required: true, message: 'Please input your password.' }]} />
              <Form.Item>
                <Button style={{ float: 'right' }} type="text" onClick={toggleForgotPasswordModal}>Forgot password?</Button>
              </Form.Item>
              <Form.Item>
                <Button type="text" onClick={signInWithGoogle} danger>Sign Up</Button>
                <Button style={{ float: 'right' }} type="text" onClick={handleGoogleSignUp} danger>Sign Up with Google</Button>
              </Form.Item>
              <Divider />
              <Form.Item>
                <Button type="primary" htmlType="submit" block>Login</Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={handleGoogleSignIn} block danger>Google Login</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <ForgotPasswordModal isOpen={showForgotPasswordModal} toggle={toggleForgotPasswordModal} />
    </>
  )
}

export default Login;

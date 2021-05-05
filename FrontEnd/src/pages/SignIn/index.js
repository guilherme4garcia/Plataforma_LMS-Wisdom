import React from 'react';

import { Form, Input, Button } from 'antd';

import { Link, useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Helmet } from 'react-helmet';

import { FiMail, FiLock } from 'react-icons/fi';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import * as styles from './styles';

import Logo from '../../assets/logo.svg';
import { useAuth } from '~/hooks/AuthContext';

function SignIn() {
  const history = useHistory();
  const { signIn } = useAuth();

  const onFinish = async (values) => {
    try {
      const { username, password } = values;

      await signIn({
        username,
        password,
      });

      history.push('/dashboard');
    } catch (error) {
      toast.error('Erro ao realizar Login');
    }
  };

  return (
    <styles.Container>
      <Helmet>
        <title>Entrar</title>
      </Helmet>
      <ToastContainer />
      <styles.Content>
        <styles.AnimationContainer>
          <Form
            name="LoginForm"
            className="login-form"
            layout="verfical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <img src={Logo} alt="Logo Wisdom" />

            <h1>Faça seu Login</h1>
            <p>Preencha os campos e faça seu login na nossa plataforma.</p>

            <Form.Item
              name="username"
              label="Insira seu E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'O e-mail tem que ser válido!',
                },
                { required: true, message: 'Por favor insira seu e-mail!' },
              ]}
            >
              <Input
                prefix={<FiMail className="site-form-item-icon" />}
                placeholder="example@email.com"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Insira sua senha"
              rules={[
                { required: true, message: 'Por favor insira sua Senha!' },
              ]}
            >
              <Input.Password
                prefix={<FiLock className="site-form-item-icon" />}
                placeholder="******"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Entrar
              </Button>
              Ou <Link to="/signup">Crie sua conta</Link>
            </Form.Item>
          </Form>
        </styles.AnimationContainer>
      </styles.Content>
      <styles.Background />
    </styles.Container>
  );
}

export default SignIn;

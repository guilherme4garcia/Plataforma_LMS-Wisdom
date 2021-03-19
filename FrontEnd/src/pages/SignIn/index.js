import React, { useRef, useCallback, useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

import { Link, useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Helmet } from 'react-helmet';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import * as styles from './styles';

// import LogoIMG from '../../assets/Only_Icon.svg';

function SignIn() {
  const onFinish = (values) => {
    toast.success('Recebi os valores: ', JSON.stringify(values));
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
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {/* <img src={LogoGestor} alt="Logo Gestor" /> */}

            <h1>Faça seu Login</h1>
            <p>Preencha os campos e faça seu login na nossa plataforma.</p>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Porfavor insira seu e-mail!' },
              ]}
            >
              <Input
                prefix={<FiMail className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Porfavor insira sua Senha!' },
              ]}
            >
              <Input
                prefix={<FiLock className="site-form-item-icon" />}
                type="password"
                placeholder="Senha"
              />
            </Form.Item>

            <Form.Item>
              <Link to="forgot-password">
                <FiLock />
                Esqueceu sua senha?
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or{' '}
              <Link to="/signup">
                <FiLogIn />
                Criar conta
              </Link>
            </Form.Item>
          </Form>
        </styles.AnimationContainer>
      </styles.Content>
      <styles.Background />
    </styles.Container>
  );
}

export default SignIn;

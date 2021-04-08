import React from 'react';

import { Form, Input, Button, Radio } from 'antd';

import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Helmet } from 'react-helmet';

import { FiMail, FiLock } from 'react-icons/fi';

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
            layout="verfical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {/* <img src={LogoGestor} alt="Logo Gestor" /> */}

            <h1>Faça seu Login</h1>
            <p>Preencha os campos e faça seu login na nossa plataforma.</p>

            <Form.Item name="isStudent" label="Entrar como aluno ou professor?">
              <Radio.Group defaultValue="true">
                <Radio.Button value="true">Aluno</Radio.Button>
                <Radio.Button value="false">Professor</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="email"
              label="Insira seu E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'O e-mail tem que ser válido!',
                },
                { required: true, message: 'Porfavor insira seu e-mail!' },
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
                { required: true, message: 'Porfavor insira sua Senha!' },
              ]}
            >
              <Input.Password
                prefix={<FiLock className="site-form-item-icon" />}
                placeholder="******"
              />
            </Form.Item>

            {/* <Form.Item>
              <Link to="forgot-password" className="login-form-forgot">
                <FiLock />
                Esqueceu sua senha?
              </Link>
            </Form.Item> */}

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

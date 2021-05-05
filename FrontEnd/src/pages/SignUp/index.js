import React from 'react';

import { Form, Input, Button, Radio } from 'antd';

import { Link, useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Helmet } from 'react-helmet';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import * as styles from './styles';

import Logo from '../../assets/logo.svg';
import api from '~/services/api';

function SignUp() {
  const history = useHistory();

  const onFinish = async (values) => {
    try {
      await api.post('user-account/new', values);

      toast.success('Usuário Cadastrado com sucesso! Agora realize seu Login');

      history.push('/signin');
    } catch (error) {
      toast.error('Erro ao realizar cadastro.');
    }
  };

  return (
    <styles.Container>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <ToastContainer />
      <styles.Content>
        <styles.AnimationContainer>
          <Form
            name="SignUpForm"
            className="signup-form"
            layout="verfical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <img src={Logo} alt="Logo Gestor" />

            <h1>Faça seu Cadastro</h1>
            <p>Preencha os campos e cadastre-se na nossa plataforma.</p>

            <Form.Item
              name="role"
              label="Cadastrar como aluno ou professor?"
              rules={[
                {
                  required: true,
                  message: 'Insira qual cadastro deseja fazer!',
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="ALUNO">Aluno</Radio.Button>
                <Radio.Button value="PROFESSOR">Professor</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="name"
              label="Insira seu Nome"
              rules={[{ required: true, message: 'Insira seu Nome!' }]}
            >
              <Input
                prefix={<FiUser className="site-form-item-icon" />}
                placeholder="John Doe"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Insira seu E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'O e-mail tem que ser válido!',
                },
                { required: true, message: 'Insira seu E-mail!' },
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
                {
                  required: true,
                  message: 'Porfavor insira sua senha!',
                },
              ]}
              hasFeedback
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
                className="signup-form-button"
              >
                Cadastrar
              </Button>
              Já tem uma conta? <Link to="/signin">Faça Login</Link>
            </Form.Item>
          </Form>
        </styles.AnimationContainer>
      </styles.Content>
      <styles.Background />
    </styles.Container>
  );
}

export default SignUp;

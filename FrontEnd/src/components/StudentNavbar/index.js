import { Col, Menu, Row, Avatar, Input } from 'antd';
import React from 'react';
import { FiUser } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const { Search } = Input;
const { SubMenu } = Menu;

export default function StudentNavbar() {
  return (
    <Row aling="middle" justify="center">
      <Col span="2" />
      <Col span="3" style={colStyle}>
        <img src={Logo} alt="Logo" />
      </Col>
      <Col span="3" style={colStyle}>
        <Menu mode="horizontal">
          <SubMenu key="SubMenu" title=" Categorias">
            <Menu.Item key="bio">Biologia</Menu.Item>
            <Menu.Item key="math">Matemática</Menu.Item>
            <Menu.Item key="tech">Tecnologia</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span="6" style={colStyle}>
        <Search
          placeholder="O que você quer aprender?"
          style={{ width: '80%' }}
        />
      </Col>
      <Col span="4" style={colStyle}>
        <Menu mode="horizontal">
          <Menu.Item key="Classes">Meus Cursos</Menu.Item>
        </Menu>
      </Col>
      <Col span="3" style={colStyle}>
        Usuário <Avatar style={{ marginLeft: '20px' }} icon={<FiUser />} />
      </Col>
      <Col span="2" />
    </Row>
  );
}

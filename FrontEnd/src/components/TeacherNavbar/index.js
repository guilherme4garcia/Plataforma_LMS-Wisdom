import { Col, Row, Avatar } from 'antd';
import React from 'react';
import { FiUser } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function TeacherNavbar() {
  return (
    <Row aling="middle" justify="center">
      <Col span="2" />
      <Col span="3" style={colStyle}>
        <img src={Logo} alt="Logo" />
      </Col>
      <Col span="14" />
      <Col span="3" style={colStyle}>
        Usuário <Avatar style={{ marginLeft: '20px' }} icon={<FiUser />} />
      </Col>
      <Col span="2" />
    </Row>
  );
}

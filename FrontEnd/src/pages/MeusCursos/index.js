import React from 'react';

import { Layout, Breadcrumb, Row, Col } from 'antd';
import PrivateNavbar from '../../components/PrivateNavbar';
import MyClassesList from '~/components/MyClassesList';

const { Header, Content } = Layout;

function MeusCursos() {
  return (
    <Layout style={{ height: '100vh' }} className="layout">
      <Header style={{ background: '#fff' }}>
        <PrivateNavbar />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col span="2" />
          <Col span="20">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Aluno</Breadcrumb.Item>
              <Breadcrumb.Item>Meus Cursos</Breadcrumb.Item>
            </Breadcrumb>
            <MyClassesList />
          </Col>
          <Col span="2" />
        </Row>
      </Content>
    </Layout>
  );
}

export default MeusCursos;

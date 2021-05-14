import React from 'react';
// import { useParams } from 'react-router-dom';

import { Layout, Row, Col, Breadcrumb } from 'antd';

import PrivateNavbar from '~/components/PrivateNavbar';

const { Header, Content } = Layout;

export default function CursoEdit() {
  // const { idCurso } = useParams();

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
              <Breadcrumb.Item>Professor</Breadcrumb.Item>
              <Breadcrumb.Item>Editar Curso</Breadcrumb.Item>
            </Breadcrumb>
            EDITAR CURSO
          </Col>
          <Col span="2" />
        </Row>
      </Content>
    </Layout>
  );
}

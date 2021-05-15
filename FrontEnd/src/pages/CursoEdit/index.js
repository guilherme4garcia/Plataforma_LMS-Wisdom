/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import React from 'react';
// import { useParams } from 'react-router-dom';

import { Layout, Row, Col, Breadcrumb } from 'antd';

import { useParams } from 'react-router-dom';
import PrivateNavbar from '~/components/PrivateNavbar';
import { classes } from '~/services/dataAPi';
import EditClass from '~/components/EditClass';

const { Header, Content } = Layout;

export default function CursoEdit() {
  const { idCurso } = useParams();

  function findId(data, idToLookFor) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === idToLookFor) {
        return data[i];
      }
    }
  }

  const item = findId(classes, idCurso);

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
            <EditClass data={item} />
          </Col>
          <Col span="2" />
        </Row>
      </Content>
    </Layout>
  );
}

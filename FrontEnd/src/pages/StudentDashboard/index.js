import React from 'react';

import { Layout, Breadcrumb } from 'antd';
import StudentNavbar from '../../components/StudentNavbar';
import ClassesList from '~/components/ClassesList';

const { Header, Content } = Layout;

function StudentDashboard() {
  return (
    <Layout style={{ height: '100vh' }} className="layout">
      <Header style={{ background: '#fff' }}>
        <StudentNavbar />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Aluno</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <ClassesList />
      </Content>
    </Layout>
  );
}

export default StudentDashboard;

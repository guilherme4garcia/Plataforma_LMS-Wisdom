import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { AiOutlinePlusSquare, AiOutlineBook } from 'react-icons/ai';
import TeacherNavbar from '~/components/TeacherNavbar';
import ClassesList from '~/components/ClassesList';
import NewClass from '~/components/NewClass';

const { Header, Content, Sider } = Layout;

function TeacherDashboard() {
  const [renderState, setRenderState] = useState('Meus Cursos');

  const PAGE_STATES = {
    'Meus Cursos': (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Professor</Breadcrumb.Item>
          <Breadcrumb.Item>Meus Cursos</Breadcrumb.Item>
        </Breadcrumb>
        <ClassesList />
      </>
    ),
    'Novo Curso': (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Professor</Breadcrumb.Item>
          <Breadcrumb.Item>Novo Curso</Breadcrumb.Item>
        </Breadcrumb>
        <NewClass />
      </>
    ),
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header" style={{ background: '#fff' }}>
        <TeacherNavbar />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item
              key="1"
              onClick={() => setRenderState('Meus Cursos')}
              icon={<AiOutlineBook />}
            >
              Meus Cursos
            </Menu.Item>

            <Menu.Item
              key="2"
              onClick={() => setRenderState('Novo Curso')}
              icon={<AiOutlinePlusSquare />}
            >
              Novo Curso
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content>{PAGE_STATES[renderState]}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default TeacherDashboard;

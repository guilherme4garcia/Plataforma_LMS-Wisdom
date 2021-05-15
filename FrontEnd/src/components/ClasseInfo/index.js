/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';

import { Tabs, Card, Button, Typography, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { classes } from '~/services/dataAPi';
import * as styles from './styles';
import { useAuth } from '~/hooks/AuthContext';

const { TabPane } = Tabs;
const { Title } = Typography;

export default function ClassesInfo({ idCurso }) {
  const { user } = useAuth();

  function findId(data, idToLookFor) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === idToLookFor) {
        return data[i];
      }
    }
  }

  function confirm(e) {
    console.log(e);
  }

  function cancel(e) {
    console.log(e);
  }

  const item = findId(classes, idCurso);

  return (
    <styles.Content>
      <Tabs size="large" style={{ marginBottom: 32 }} defaultActiveKey="1">
        <TabPane tab="Conteúdo" key="1">
          <Card title={item.title} style={{ width: '100%' }} bordered={false}>
            <Card title="Descrição" style={{ width: '100%' }} bordered={false}>
              {item.description}
            </Card>
            <Card title="Seções" style={{ width: '100%' }} bordered={false}>
              {item.sections.map((section) => (
                <Card
                  title={section.name}
                  style={{ width: '100%', margin: '10px 0px 10px 0px' }}
                  bordered
                  key={section.id}
                >
                  <Title level={5}>Descrição</Title>
                  {section.description}
                  {section.extras && (
                    <>
                      <Title level={5}>Informações extras</Title>
                      {section.extras}
                    </>
                  )}
                </Card>
              ))}
            </Card>
          </Card>
        </TabPane>
        <TabPane tab="Alunos" key="2">
          Alunos
        </TabPane>
        <TabPane tab="Comentários" key="3">
          Comentários
        </TabPane>
      </Tabs>

      {user.role === 'PROFESSOR' && (
        <>
          <Link to={`/cursoEdit/${idCurso}`}>
            <Button icon={<EditOutlined />} type="primary">
              Editar
            </Button>
          </Link>

          <Popconfirm
            title="Tem certeza que deseja deletar essa turma?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Sim"
            cancelText="Não"
          >
            <Button
              icon={<DeleteOutlined />}
              type="primary"
              danger
              style={{ marginLeft: '10px' }}
            >
              Deletar
            </Button>
          </Popconfirm>
        </>
      )}
    </styles.Content>
  );
}

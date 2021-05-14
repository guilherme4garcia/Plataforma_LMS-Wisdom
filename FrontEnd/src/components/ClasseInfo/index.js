/* eslint-disable react/prop-types */
import React from 'react';

import { Tabs, Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import faker from 'faker';

import { Link } from 'react-router-dom';
import * as styles from './styles';
import { useAuth } from '~/hooks/AuthContext';

const { TabPane } = Tabs;

export default function ClassesInfo({ idCurso }) {
  const { user } = useAuth();

  faker.locale = 'pt_BR';
  return (
    <styles.Content>
      <Tabs size="large" style={{ marginBottom: 32 }} defaultActiveKey="1">
        <TabPane tab="Conteúdo" key="1">
          <Card
            title={faker.address.city()}
            style={{ width: '100%' }}
            bordered={false}
          >
            <Card title="Descrição" style={{ width: '100%' }} bordered={false}>
              {faker.lorem.paragraph()}
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

          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            style={{ marginLeft: '10px' }}
          >
            Deletar
          </Button>
        </>
      )}
    </styles.Content>
  );
}

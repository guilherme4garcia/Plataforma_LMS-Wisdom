/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Tabs,
  Card,
  Form,
  Input,
  Button,
  Typography,
  Popconfirm,
  Comment,
  Avatar,
  Tooltip,
  Descriptions,
} from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';

import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import moment from 'moment';
import * as styles from './styles';
import { useAuth } from '~/hooks/AuthContext';
import { useClass } from '~/services/dataHooks';

const { TabPane } = Tabs;
const { Title } = Typography;

export default function ClassesInfo({ idCurso }) {
  const {
    classes,
    RemoveData,
    EditStudent,
    AddCommentarie,
    commentaries,
    AddTeacherPost,
    teacherPost,
    students,
    students2,
    EditStudent2,
  } = useClass();
  const [refresh, setRefresh] = useState(false);
  const history = useHistory();
  const { user } = useAuth();

  const [comentarie, setComentarie] = useState('');
  const [newTeacherPost, setNewTeacherPost] = useState('');
  const [extra, setExtra] = useState('');
  const [loading, setLoading] = useState(false);

  function findId(data, idToLookFor) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === idToLookFor) {
        return data[i];
      }
    }
  }

  function confirm() {
    RemoveData(idCurso);
    history.push('/dashboard');
  }

  const handleSubmit = () => {
    if (comentarie === '') {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const newComment = {
        user: user.name,
        content: comentarie,
        time: moment().fromNow(),
      };

      AddCommentarie(newComment);

      setComentarie('');
    }, 1000);
  };

  const handleSubmitTeacherPost = () => {
    if (newTeacherPost === '') {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const newComment = {
        user: user.name,
        content: newTeacherPost,
        time: moment().fromNow(),
        extra,
      };

      AddTeacherPost(newComment);

      setNewTeacherPost('');
      setExtra('');
    }, 1000);
  };

  const { TextArea } = Input;

  const item = findId(classes, idCurso);

  return (
    <styles.Content>
      <Tabs size="large" style={{ marginBottom: 32 }} defaultActiveKey="1">
        <TabPane tab="Conteúdo" key="1">
          <Card title={item.title} style={{ width: '100%' }} bordered={false}>
            <Card title="Descrição" style={{ width: '100%' }} bordered={false}>
              {item.description}
            </Card>
            {user.role === 'ALUNO' && item.students[0].id === user.id ? (
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
            ) : (
              ''
            )}
          </Card>
        </TabPane>
        {user.role === 'PROFESSOR' && (
          <TabPane tab="Alunos" key="2">
            {item.students[0].id === 1
              ? students.map(
                (student) =>
                  student.status !== 'Recusado' && (
                    <Descriptions
                      bordered
                      style={{ marginTop: '50px' }}
                      title={student.name}
                      extra={
                        <>
                          {student.status === 'Aguardando' && (
                            <Button
                              type="primary"
                              onClick={() => {
                                EditStudent(
                                  student.id,
                                  'Matriculado',
                                  student.name
                                );
                                setRefresh(!refresh);
                              }}
                            >
                              Aprovar
                            </Button>
                          )}
                          <Popconfirm
                            title="Tem certeza que deseja deletar esse aluno?"
                            onConfirm={() => {
                              EditStudent(
                                student.id,
                                'Recusado',
                                student.name
                              );
                              setRefresh(!refresh);
                            }}
                            okText="Sim"
                            cancelText="Não"
                          >
                            <Button type="primary" danger>
                              Remover
                              </Button>
                          </Popconfirm>
                        </>
                      }
                    >
                      <Descriptions.Item label="Status">
                        {student.status}
                      </Descriptions.Item>
                    </Descriptions>
                  )
              )
              : students2.map(
                (student) =>
                  student.status !== 'Recusado' && (
                    <Descriptions
                      bordered
                      style={{ marginTop: '50px' }}
                      title={student.name}
                      extra={
                        <>
                          {student.status === 'Aguardando' && (
                            <Button
                              type="primary"
                              onClick={() => {
                                EditStudent2(
                                  student.id,
                                  'Matriculado',
                                  student.name
                                );
                                setRefresh(!refresh);
                              }}
                            >
                              Aprovar
                            </Button>
                          )}
                          <Popconfirm
                            title="Tem certeza que deseja deletar esse aluno?"
                            onConfirm={() => {
                              EditStudent2(
                                student.id,
                                'Recusado',
                                student.name
                              );
                              setRefresh(!refresh);
                            }}
                            okText="Sim"
                            cancelText="Não"
                          >
                            <Button type="primary" danger>
                              Remover
                              </Button>
                          </Popconfirm>
                        </>
                      }
                    >
                      <Descriptions.Item label="Status">
                        {student.status}
                      </Descriptions.Item>
                    </Descriptions>
                  )
              )}
          </TabPane>
        )}

        <TabPane tab="Comentários" key="3">
          {commentaries.map((commentarie) => (
            <Comment
              author={<b>{commentarie.user}</b>}
              avatar={<Avatar icon={<UserOutlined />} />}
              content={<p>{commentarie.content}</p>}
              datetime={
                <Tooltip title={moment().format('DD-MM-YYYY HH:mm:ss')}>
                  <span>{commentarie.time}</span>
                </Tooltip>
              }
            />
          ))}
          {user.role === 'ALUNO' && item.students[0].id === user.id && (
            <Comment
              avatar={<Avatar icon={<UserOutlined />} />}
              content={
                <>
                  <Form.Item>
                    <TextArea
                      rows={4}
                      onChange={(e) => setComentarie(e.target.value)}
                      value={comentarie}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      loading={loading}
                      onClick={handleSubmit}
                      type="primary"
                    >
                      Enviar comentário
                    </Button>
                  </Form.Item>
                </>
              }
            />
          )}
        </TabPane>
        {user.role === 'PROFESSOR' || item.students[0].id === user.id ? (
          <TabPane tab="Mural" key="4">
            {teacherPost.map((posts) => (
              <Comment
                author={<b>{posts.user}</b>}
                avatar={<Avatar icon={<UserOutlined />} />}
                content={
                  <>
                    <p>{posts.content}</p>
                    {posts.extra === '' ? (
                      ''
                    ) : (
                      <ReactPlayer url={posts.extra} />
                    )}
                  </>
                }
                datetime={
                  <Tooltip title={moment().format('DD-MM-YYYY HH:mm:ss')}>
                    <span>{posts.time}</span>
                  </Tooltip>
                }
              />
            ))}
            {user.role === 'PROFESSOR' && (
              <Comment
                avatar={<Avatar icon={<UserOutlined />} />}
                content={
                  <>
                    <Form.Item>
                      <TextArea
                        rows={4}
                        onChange={(e) => setNewTeacherPost(e.target.value)}
                        value={newTeacherPost}
                      />
                    </Form.Item>
                    <Form.Item label="Link para vídeo">
                      <Input
                        onChange={(e) => setExtra(e.target.value)}
                        value={extra}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        onClick={handleSubmitTeacherPost}
                        type="primary"
                      >
                        Enviar comentário
                      </Button>
                    </Form.Item>
                  </>
                }
              />
            )}
          </TabPane>
        ) : (
          ''
        )}
      </Tabs>

      {user.role === 'ALUNO' && item.students[0].id !== user.id && (
        <Button type="primary" style={{ marginLeft: '10px' }}>
          Matricular-se
        </Button>
      )}

      {user.role === 'PROFESSOR' && (
        <>
          <Link to={`/cursoEdit/${idCurso}`}>
            <Button icon={<EditOutlined />} type="primary">
              Editar
            </Button>
          </Link>

          <Popconfirm
            title="Tem certeza que deseja deletar esse curso?"
            onConfirm={confirm}
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

/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Divider,
  Upload,
  Popconfirm,
} from 'antd';

import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import * as styles from './styles';
import { useClass } from '~/services/dataHooks';

export default function NewClass() {
  const history = useHistory();
  const { AddData } = useClass();

  const onFinish = async (values) => {
    await AddData(values);
    history.push('/dashboard');
  };

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <styles.Content>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Card title="Dados do curso" style={{ width: '100%' }} bordered={false}>
          <Form.Item
            label="Nome do Curso:"
            name="title"
            style={{
              display: 'inline-block',
              width: '50%',
            }}
            rules={[
              {
                required: true,
                message: 'Por favor insira o nome do curso!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Categoria do Curso:"
            name="category"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginLeft: '8px',
            }}
            rules={[
              {
                required: true,
                message: 'Por favor insira a categoria do curso!',
              },
            ]}
          >
            <Select>
              <Select.Option value="Bio">Biologia</Select.Option>
              <Select.Option value="Math">Matemática</Select.Option>
              <Select.Option value="Tech">Tecnologia</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Descrição do Curso:"
            name="description"
            style={{
              display: 'inline-block',
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Por favor insira a descrição do curso!',
              },
            ]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>

          <Divider />

          <Form.List
            name="sections"
            rules={[
              {
                validator: async (_, section) => {
                  if (!section || section.length < 1) {
                    return Promise.reject(
                      new Error('É necessário de pelomenos uma seção.')
                    );
                  }
                },
              },
            ]}
          >
            {(sections, { add, remove }, { errors }) => (
              <>
                {sections.map((section) => (
                  <>
                    <Form.Item key={section.key} style={{ marginBottom: '0' }}>
                      <Form.Item
                        {...section}
                        label="Nome da seção"
                        name={[section.name, 'name']}
                        fieldKey={[section.fieldKey, 'name']}
                        style={{
                          display: 'inline-block',
                          width: '100%',
                        }}
                        rules={[
                          {
                            required: true,
                            message: 'Por favor insira o nome da seção!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        {...section}
                        label="Descrição da seção:"
                        name={[section.name, 'description']}
                        fieldKey={[section.fieldKey, 'description']}
                        style={{
                          display: 'inline-block',
                          width: '100%',
                        }}
                        rules={[
                          {
                            required: true,
                            message: 'Por favor insira a descrição da seção!',
                          },
                        ]}
                      >
                        <Input.TextArea rows={2} />
                      </Form.Item>

                      <Form.Item
                        valuePropName="fileList"
                        name={[section.name, 'content']}
                        fieldKey={[section.fieldKey, 'content']}
                        getValueFromEvent={normFile}
                        noStyle
                      >
                        <Upload.Dragger name="files" action="/upload.do">
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Clique ou arraste nessa área para realizar um upload
                          </p>
                        </Upload.Dragger>
                      </Form.Item>

                      <Form.Item
                        {...section}
                        label="Informações Extras:"
                        name={[section.name, 'extras']}
                        fieldKey={[section.fieldKey, 'extras']}
                        style={{
                          display: 'inline-block',
                          width: '100%',
                        }}
                      >
                        <Input.TextArea rows={2} />
                      </Form.Item>

                      {sections.length > 1 ? (
                        <Form.Item>
                          <Popconfirm
                            title="Tem certeza que deseja remover essa seção?"
                            onConfirm={() => remove(section.name)}
                            okText="Sim"
                            cancelText="Não"
                          >
                            <Button
                              type="dashed"
                              danger
                              block
                              icon={<MinusCircleOutlined />}
                            >
                              Remover Seção
                            </Button>
                          </Popconfirm>
                        </Form.Item>
                      ) : null}
                    </Form.Item>

                    <Divider />
                  </>
                ))}

                <Form.ErrorList errors={errors} />

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Nova Seção
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Criar
            </Button>
          </Form.Item>
        </Card>
      </Form>
    </styles.Content>
  );
}
